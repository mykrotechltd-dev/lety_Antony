import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Lety Antony</h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              Your style, your fabric, seven working days. Premium custom fashion with guaranteed delivery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li><Link href="#" className="hover:text-accent transition-colors">7-Day Production</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">AI Visualization</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Express Service</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Corporate Orders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li><Link href="#" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Process</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-200">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Abuja, FCT, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+234 (0) XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@letyantonyfh.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-300">
            © {new Date().getFullYear()} Lety Antony Fashion House. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-primary-300 hover:text-accent transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-primary-300 hover:text-accent transition-colors">
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
