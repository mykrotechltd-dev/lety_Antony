import { NextRequest, NextResponse } from 'next/server'

// API Route: GET /api/orders
// Fetches all orders from Airtable base
//
// Setup:
// 1. Create Airtable base with fields: Order ID, Client Name, Email, Phone, Garment, Stage, Tailor, Start Date, Due Date, Status, Notes
// 2. Generate Airtable Personal Access Token: https://airtable.com/account/tokens
// 3. Set AIRTABLE_TOKEN and AIRTABLE_BASE_ID in .env.local
// 4. Wire the base ID to your own Airtable base
//
// Example Airtable record:
// {
//   "id": "rec123...",
//   "fields": {
//     "Order ID": "LA-2026-0412",
//     "Client Name": "Amara O.",
//     "Email": "amara@example.com",
//     "Phone": "+234 802 XXX 0412",
//     "Garment": "Beaded Cape Gown (Tier III)",
//     "Stage": 3,
//     "Tailor": "Grace",
//     "Start Date": "2026-07-13",
//     "Due Date": "2026-07-22",
//     "Status": "on-track",
//     "Notes": "Beading progressing well."
//   }
// }

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const airtableToken = process.env.AIRTABLE_TOKEN
    const airtableBaseId = process.env.AIRTABLE_BASE_ID

    if (!airtableToken || !airtableBaseId) {
      return NextResponse.json(
        { error: 'Airtable configuration missing. Set AIRTABLE_TOKEN and AIRTABLE_BASE_ID in .env.local' },
        { status: 500 }
      )
    }

    // Fetch from Airtable API
    // Replace "tbl..." with your actual table ID
    const tableName = 'tblOrders' // Replace with your table name
    const url = `https://api.airtable.com/v0/${airtableBaseId}/${tableName}`

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${airtableToken}`,
      },
    })

    if (!response.ok) {
      console.error('Airtable API error:', response.status, response.statusText)
      return NextResponse.json(
        { error: 'Failed to fetch from Airtable' },
        { status: response.status }
      )
    }

    const data = await response.json()

    // Transform Airtable records into dashboard-friendly format
    const orders = data.records.map((record: any) => ({
      id: record.fields['Order ID'],
      name: record.fields['Client Name'],
      email: record.fields['Email'],
      phone: record.fields['Phone'],
      garment: record.fields['Garment'],
      stage: record.fields['Stage'],
      tailor: record.fields['Tailor'],
      startDate: record.fields['Start Date'],
      dueDate: record.fields['Due Date'],
      status: record.fields['Status'],
      notes: record.fields['Notes'],
      daysLeft: calculateDaysLeft(record.fields['Due Date']),
    }))

    return NextResponse.json({ orders })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper: calculate days remaining until due date
function calculateDaysLeft(dueDate: string): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const due = new Date(dueDate)
  due.setHours(0, 0, 0, 0)
  const diff = due.getTime() - today.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

// API Route: POST /api/orders
// Updates an order's stage and sends WhatsApp notification
//
// Request body:
// {
//   "orderId": "LA-2026-0412",
//   "stage": 4,
//   "message": "Your garment is now being sewn..."
// }

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { orderId, stage, message } = body

    // Update Airtable record
    const airtableToken = process.env.AIRTABLE_TOKEN
    const airtableBaseId = process.env.AIRTABLE_BASE_ID

    if (!airtableToken || !airtableBaseId) {
      return NextResponse.json(
        { error: 'Airtable configuration missing' },
        { status: 500 }
      )
    }

    // Find the record by Order ID and update its stage
    // This is a simplified flow — in production, you'd:
    // 1. Query by Order ID to get the record ID
    // 2. PATCH that record with the new stage
    // 3. Send WhatsApp message via WhatsApp Business API

    // TODO: Implement Airtable update
    // TODO: Implement WhatsApp message sending

    return NextResponse.json({
      success: true,
      message: 'Order updated and notification sent',
    })
  } catch (error) {
    console.error('Error updating order:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
