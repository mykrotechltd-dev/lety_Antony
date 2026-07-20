import { NextRequest, NextResponse } from 'next/server'

// API Route: POST /api/send-update
// Sends WhatsApp status update to client via WhatsApp Business API
//
// Setup:
// 1. Sign up for WhatsApp Business API (Twilio, MessageBird, or official)
// 2. Create message templates for each stage transition
// 3. Set WHATSAPP_API_KEY and WHATSAPP_PHONE_ID in .env.local
//
// Request body:
// {
//   "orderId": "LA-2026-0412",
//   "clientPhone": "+234 803 643 8208",
//   "stage": 3,
//   "message": "Your garment is being sewn. You're on track for delivery on 22 Jul."
// }

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { orderId, clientPhone, stage, message } = body

    if (!orderId || !clientPhone || stage === undefined || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: orderId, clientPhone, stage, message' },
        { status: 400 }
      )
    }

    const whatsappApiKey = process.env.WHATSAPP_API_KEY
    const whatsappPhoneId = process.env.WHATSAPP_PHONE_ID

    if (!whatsappApiKey || !whatsappPhoneId) {
      console.warn(
        'WhatsApp API not configured. In production, set WHATSAPP_API_KEY and WHATSAPP_PHONE_ID.'
      )
      // For now, log the message instead of sending
      console.log(`[WhatsApp] To: ${clientPhone}, Order: ${orderId}, Stage: ${stage}`)
      console.log(`[WhatsApp] Message: ${message}`)

      return NextResponse.json({
        success: true,
        message: 'Message logged (WhatsApp not configured yet)',
        orderId,
      })
    }

    // Send via WhatsApp Business API
    // Example for Twilio (adjust for your provider):
    const response = await fetch('https://graph.instagram.com/v18.0/YOUR_PHONE_ID/messages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${whatsappApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: clientPhone,
        type: 'template',
        template: {
          name: `order_stage_${stage}`, // Use stage-specific template
          language: {
            code: 'en_US',
          },
          parameters: {
            body: {
              parameters: [orderId, message],
            },
          },
        },
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('WhatsApp API error:', error)
      return NextResponse.json(
        { error: 'Failed to send WhatsApp message' },
        { status: response.status }
      )
    }

    const result = await response.json()

    return NextResponse.json({
      success: true,
      message: 'WhatsApp notification sent',
      orderId,
      messageId: result.messages?.[0]?.id,
    })
  } catch (error) {
    console.error('Error sending update:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
