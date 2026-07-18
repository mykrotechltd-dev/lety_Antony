import type { Metadata } from 'next'
import { Bodoni_Moda, Jost } from 'next/font/google'
import './globals.css'

const display = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: false,
})

const body = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lety Antony Fashion House | Custom Couture in 7 Days',
  description:
    'Your style, your fabric, seven working days. Bespoke Nigerian couture with AI visualization and real-time production tracking. Abuja — serving Nigeria and the diaspora.',
  keywords: 'custom tailoring, couture, Abuja, aso-ebi, bespoke fashion, Nigeria, diaspora',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable}`}>
      <body className="bg-ivory text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
