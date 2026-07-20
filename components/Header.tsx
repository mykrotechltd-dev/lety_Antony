'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#gallery', label: 'Designs' },
  { href: '/track', label: 'Track Order' },
  { href: '/#why', label: 'The House' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-40 bg-bone border-b border-ink/10">
      <div className="container flex justify-between items-center py-5">
        <Link href="/" className="flex items-center" aria-label="Lety Antony Fashion House — home">
          <img
            src="/logo.png"
            alt="Lety Antony Fashion Designer"
            className="h-16 md:h-20 w-auto mix-blend-multiply"
          />
        </Link>

        <nav className="hidden md:flex gap-9 items-center">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-luxe text-ink/70 hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/order-inquiry" className="btn-primary !px-6 !py-3">
            Enquire
          </Link>
        </nav>

        <button
          className="md:hidden text-ink"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-bone border-t border-ink/10 py-6">
          <div className="container flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-luxe text-ink/70 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/order-inquiry"
              className="btn-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              Enquire
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
