import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'

const WHATSAPP = 'https://wa.me/2340000000000'

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <p className="font-display text-2xl mb-4">Lety Antony</p>
            <p className="text-ivory/60 max-w-sm leading-relaxed">
              Bespoke Nigerian couture. Your style, your fabric, seven working days — visualised
              before we cut, tracked at every stage, delivered on the day.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-luxe text-gold-light mb-5">Explore</p>
            <ul className="space-y-3 text-ivory/70">
              <li><Link href="/#services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/#process" className="hover:text-accent transition-colors">Our Process</Link></li>
              <li><Link href="/#gallery" className="hover:text-accent transition-colors">Designs</Link></li>
              <li><Link href="/order-inquiry" className="hover:text-accent transition-colors">Begin a Commission</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-luxe text-gold-light mb-5">Contact</p>
            <ul className="space-y-4 text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-accent" />
                <span>Abuja, FCT, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-accent" />
                <span>+234 (0) XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-accent" />
                <a href="mailto:hello@letyantonyfh.com" className="hover:text-accent transition-colors">
                  hello@letyantonyfh.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="flex-shrink-0 text-accent" />
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase tracking-luxe text-ivory/50">
            © {new Date().getFullYear()} Lety Antony Fashion House
          </p>
          <div className="flex gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-accent transition-colors" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
