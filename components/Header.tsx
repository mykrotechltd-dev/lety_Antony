'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container flex justify-between items-center py-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">LA</span>
          </div>
          <span className="text-xl font-serif font-bold text-primary-900 hidden sm:inline">
            Lety Antony
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#services" className="text-gray-700 hover:text-primary-500 transition-colors">
            Services
          </Link>
          <Link href="#process" className="text-gray-700 hover:text-primary-500 transition-colors">
            Our Process
          </Link>
          <Link href="#why" className="text-gray-700 hover:text-primary-500 transition-colors">
            Why Us
          </Link>
          <Link href="/order-inquiry" className="btn-primary text-sm">
            Order Now
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container flex flex-col gap-4">
            <Link
              href="#services"
              className="text-gray-700 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-gray-700 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Our Process
            </Link>
            <Link
              href="#why"
              className="text-gray-700 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="/order-inquiry"
              className="btn-primary text-sm w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
