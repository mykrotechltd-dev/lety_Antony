import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lety Antony Fashion House | 7-Day Custom Clothing',
  description: 'Your style, your fabric, 7 working days. Premium custom fashion with AI visualization and real-time tracking. Based in Abuja, serving Nigeria and the diaspora.',
  keywords: 'custom tailoring, fashion, Abuja, design visualization, guaranteed delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
