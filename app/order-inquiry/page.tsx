'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Scissors,
  Calendar,
  MessageSquare,
  Layers,
  Camera,
  Mic,
  Mail,
  Clock,
  AlertTriangle,
  CheckCircle,
  Send,
} from 'lucide-react'

const BUSINESS_EMAIL = 'hello@letyantonyfh.com'

export default function OrderInquiry() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom-Made Clothing',
    eventDate: '',
    fabric: 'I will supply my own fabric',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Order Inquiry — ${form.service} — ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Desired Date / Deadline: ${form.eventDate || 'Not specified'}`,
      `Fabric: ${form.fabric}`,
      '',
      'Design Details / Vision:',
      form.description,
      '',
      '(Reminder: please attach photos of outfits that match your idea.)',
    ].join('\n')

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-500 uppercase mb-4">
            Order Inquiry
          </p>
          <h1 className="mb-6">Let&apos;s Bring Your Vision to Life</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Lety Antony offers custom-made clothing, personal styling consultations, garment
            rentals, and fashion show participation. Tell us what you have in mind — and we&apos;ll
            handle the rest, tracked every step of the way.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="container">
          <h2 className="text-center mb-14">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scissors,
                title: 'Custom-Made Clothing',
                desc: 'Bespoke garments tailored precisely to your measurements, style, and occasion.',
              },
              {
                icon: MessageSquare,
                title: 'Personal Consultations',
                desc: 'One-on-one sessions with the designer to refine your vision and get expert advice.',
              },
              {
                icon: Layers,
                title: 'Garment Rentals',
                desc: 'Elegant, occasion-ready pieces available to rent for events and special moments.',
              },
              {
                icon: Mic,
                title: 'Fashion Show Participation',
                desc: 'Showcase and couture involvement that brings prestige to your wardrobe.',
              },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="card">
                  <Icon className="text-primary-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-base">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Ordering Works — Policies */}
      <section className="bg-primary-50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="mb-4">How Ordering Works</h2>
            <p className="text-xl text-gray-600">
              A few simple policies that keep quality high and delivery on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Lead time */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <Calendar className="text-primary-500 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-3">One Month Lead Time</h3>
              <p className="text-gray-600">
                Please submit your order at least <strong>one month in advance</strong>. This
                ensures adequate production scheduling and the high-quality result your garment
                deserves.
              </p>
            </div>

            {/* Rush fees */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <AlertTriangle className="text-amber-500 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-3">Rush Fees</h3>
              <p className="text-gray-600">
                Orders placed with less than a month&apos;s notice incur a rush fee of{' '}
                <strong>$50 to $200</strong>, depending on complexity and timeline.
              </p>
            </div>

            {/* Consultation */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <MessageSquare className="text-primary-500 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-3">$50 Consultation Fee</h3>
              <p className="text-gray-600">
                A <strong>$50 consultation</strong> unlocks a detailed one-on-one session with the
                designer — especially recommended for complex or extravagant garments, to refine
                your vision and prevent misunderstandings.
              </p>
            </div>

            {/* Fabric */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <Layers className="text-primary-500 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-3">Your Fabric or Ours</h3>
              <p className="text-gray-600">
                You may <strong>supply your own fabric</strong> or choose from fabrics provided by
                Lety Antony. An <strong>additional cost</strong> applies when using designer-provided
                fabric.
              </p>
            </div>
          </div>

          {/* Photo tip */}
          <div className="max-w-5xl mx-auto mt-8 bg-white rounded-xl p-8 border border-primary-200">
            <div className="flex items-start gap-4">
              <Camera className="text-accent flex-shrink-0" size={28} />
              <div>
                <h3 className="text-lg font-bold mb-2">Send Photos of Your Idea</h3>
                <p className="text-gray-600">
                  Visual references dramatically improve design accuracy. Please attach photos of
                  outfits that match the look you&apos;re going for when you email us — it helps the
                  designer understand your vision and get the final garment just right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Start Your Inquiry</h2>
            <p className="text-lg text-gray-600">
              Fill in the details below. Submitting opens your email client with everything
              pre-filled — just attach your reference photos and hit send.
            </p>
          </div>

          {submitted && (
            <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-6 flex items-start gap-3">
              <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={22} />
              <p className="text-gray-700">
                Your email draft has been opened. Don&apos;t forget to{' '}
                <strong>attach photos</strong> of your outfit ideas before sending. If nothing
                opened, email us directly at{' '}
                <a href={`mailto:${BUSINESS_EMAIL}`} className="text-primary-500 font-semibold underline">
                  {BUSINESS_EMAIL}
                </a>
                .
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="+234 ..."
                />
              </div>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Date / Deadline
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option>Custom-Made Clothing</option>
                  <option>Personal Consultation</option>
                  <option>Garment Rental</option>
                  <option>Fashion Show Participation</option>
                  <option>Aso-Ebi / Group Order</option>
                  <option>Corporate / Uniforms</option>
                </select>
              </div>
              <div>
                <label htmlFor="fabric" className="block text-sm font-semibold text-gray-700 mb-2">
                  Fabric
                </label>
                <select
                  id="fabric"
                  name="fabric"
                  value={form.fabric}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option>I will supply my own fabric</option>
                  <option>Use Lety Antony fabric (additional cost)</option>
                  <option>Not sure yet — need advice</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Describe Your Vision *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                value={form.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Tell us about the outfit — occasion, style, colours, fit preference, any details that matter to you."
              />
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-500">
              <Camera size={18} className="flex-shrink-0 mt-0.5" />
              <span>
                Tip: after submitting, attach photos of outfits that match your idea to your email.
              </span>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Send size={18} />
              Submit Inquiry
            </button>
          </form>

          {/* Direct email */}
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-2">Prefer to email us directly?</p>
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
            >
              <Mail size={18} />
              {BUSINESS_EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="mx-auto mb-3 text-accent" size={32} />
              <h3 className="text-white text-lg font-bold mb-1">7-Day Production</h3>
              <p className="text-primary-100 text-base">Once your design is locked, the clock starts.</p>
            </div>
            <div>
              <MessageSquare className="mx-auto mb-3 text-accent" size={32} />
              <h3 className="text-white text-lg font-bold mb-1">Real-Time Tracking</h3>
              <p className="text-primary-100 text-base">WhatsApp &amp; SMS updates at every stage.</p>
            </div>
            <div>
              <CheckCircle className="mx-auto mb-3 text-accent" size={32} />
              <h3 className="text-white text-lg font-bold mb-1">Approve Before We Sew</h3>
              <p className="text-primary-100 text-base">See an AI render of your outfit first.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
