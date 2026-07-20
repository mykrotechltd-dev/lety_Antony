'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Search,
  Check,
  Clock,
  MessageCircle,
  CalendarClock,
  Scissors,
  Truck,
  PackageCheck,
  User,
  AlertCircle,
} from 'lucide-react'

const WHATSAPP = '2348036438208'

// The seven production stages, with the exact client notification for each.
const STAGES = [
  { label: 'Order Intake & Measurement', day: 'Day 0', note: 'Order confirmed — production begins.' },
  { label: 'Fabric Check & Pattern', day: 'Day 1', note: 'Fabric inspected ✓ Pattern in progress.' },
  { label: 'Cutting', day: 'Day 2', note: 'Your fabric has been cut.' },
  { label: 'Sewing & Assembly', day: 'Days 3–5', note: 'Your garment is being sewn.' },
  { label: 'Finishing', day: 'Day 6', note: 'Finishing touches in progress.' },
  { label: 'Quality Control & Pressing', day: 'Day 7 AM', note: 'Quality check passed ✓' },
  { label: 'Ready for Collection', day: 'Day 7 PM', note: '🎉 Ready for collection!' },
]

type Order = {
  id: string
  client: string
  garment: string
  tailor: string
  started: string
  due: string
  daysLeft: number
  stage: number // index into STAGES of the CURRENT stage (0-based)
}

// Demo dataset — mirrors what the live WhatsApp + Airtable tracker returns.
const ORDERS: Record<string, Order> = {
  'LA-2026-0412': {
    id: 'LA-2026-0412',
    client: 'Amara O.',
    garment: 'Beaded Cape Gown (Tier III)',
    tailor: 'Senior Tailor — Grace',
    started: 'Mon, 13 Jul',
    due: 'Wed, 22 Jul',
    daysLeft: 3,
    stage: 3,
  },
  'LA-2026-0435': {
    id: 'LA-2026-0435',
    client: 'Tunde A.',
    garment: 'Senator Agbada (Tier II)',
    tailor: 'Senior Tailor — Musa',
    started: 'Thu, 16 Jul',
    due: 'Sat, 25 Jul',
    daysLeft: 6,
    stage: 1,
  },
  'LA-2026-0388': {
    id: 'LA-2026-0388',
    client: 'Chidinma E.',
    garment: 'Emerald Satin Gown (Tier II)',
    tailor: 'Senior Tailor — Grace',
    started: 'Fri, 10 Jul',
    due: 'Mon, 20 Jul',
    daysLeft: 0,
    stage: 6,
  },
}

function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
}

export default function TrackOrder() {
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState<Order | null>(null)
  const [notFound, setNotFound] = useState(false)

  const lookup = (raw: string) => {
    const key = raw.trim().toUpperCase()
    const found = ORDERS[key] || null
    setOrder(found)
    setNotFound(!found && key.length > 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    lookup(query)
  }

  const ready = order && order.stage >= STAGES.length - 1
  const progress = order ? Math.round((order.stage / (STAGES.length - 1)) * 100) : 0

  return (
    <main className="min-h-screen bg-ivory">
      <Header />

      {/* Hero */}
      <section className="bg-ink text-ivory pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="container max-w-3xl">
          <p className="eyebrow mb-5">The Process Tracker</p>
          <h1 className="text-ivory mb-6">
            Track your garment,<br />
            <span className="accent-serif">like a parcel.</span>
          </h1>
          <p className="text-ivory/75 max-w-xl mb-10">
            The DHL tracking experience — for fashion. Every order carries a unique Order ID and
            moves through seven visible stages. Enter yours to see exactly where it is.
          </p>

          {/* Search */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" size={18} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your Order ID (e.g. LA-2026-0412)"
                aria-label="Order ID"
                className="w-full pl-11 pr-4 py-4 rounded-sm bg-ivory text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <button type="submit" className="btn-accent">
              Track Order
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ivory/55">
            <span>Try a sample:</span>
            {Object.keys(ORDERS).map((id) => (
              <button
                key={id}
                onClick={() => {
                  setQuery(id)
                  lookup(id)
                }}
                className="underline underline-offset-4 hover:text-accent transition-colors"
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="bg-ivory">
        <div className="container max-w-4xl">
          {notFound && (
            <div className="flex items-start gap-3 border border-wine/30 bg-wine/5 rounded-sm p-6 animate-rise">
              <AlertCircle className="text-wine flex-shrink-0 mt-0.5" size={22} />
              <div>
                <p className="text-ink font-semibold mb-1">No order found for that ID.</p>
                <p className="text-ink/70 text-base">
                  Check the Order ID on your confirmation message, or{' '}
                  <a
                    href={waLink('Hello Lety Antony, I need help tracking my order.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold underline"
                  >
                    message us on WhatsApp
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          {order && (
            <div className="animate-rise">
              {/* Summary header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                  <p className="eyebrow mb-3">Order {order.id}</p>
                  <h2 className="mb-2">{order.garment}</h2>
                  <p className="text-ink/70">for {order.client}</p>
                </div>
                <div
                  className={`inline-flex items-center gap-2 self-start px-5 py-3 rounded-sm text-xs uppercase tracking-luxe font-semibold ${
                    ready ? 'bg-primary-500 text-ivory' : 'bg-accent/15 text-gold-deep'
                  }`}
                >
                  {ready ? <PackageCheck size={16} /> : <Clock size={16} />}
                  {ready ? 'Ready for Collection' : STAGES[order.stage].label}
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-luxe text-ink/50">
                <span>Production progress</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-ink/10 rounded-full overflow-hidden mb-10">
                <div
                  className="h-full bg-accent rounded-full transition-[width] duration-700 ease-out-expo"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Meta row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10 mb-12">
                {[
                  { icon: CalendarClock, k: 'Started', v: order.started },
                  { icon: Truck, k: 'Due', v: order.due },
                  {
                    icon: Clock,
                    k: 'Remaining',
                    v: ready ? 'Ready now' : `${order.daysLeft} working day${order.daysLeft === 1 ? '' : 's'}`,
                  },
                  { icon: User, k: 'Assigned', v: order.tailor.replace('Senior Tailor — ', '') },
                ].map((m) => {
                  const Icon = m.icon
                  return (
                    <div key={m.k} className="bg-ivory p-5">
                      <Icon className="text-accent mb-2" size={18} />
                      <p className="text-[0.7rem] uppercase tracking-luxe text-ink/45 mb-1">{m.k}</p>
                      <p className="text-ink font-medium">{m.v}</p>
                    </div>
                  )
                })}
              </div>

              {/* Timeline */}
              <div className="mb-12">
                <h3 className="text-xl mb-8">Production timeline</h3>
                <ol className="relative">
                  {STAGES.map((s, i) => {
                    const done = i < order.stage
                    const current = i === order.stage
                    return (
                      <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
                        {/* rail */}
                        {i < STAGES.length - 1 && (
                          <span
                            className={`absolute left-[11px] top-7 bottom-0 w-px ${
                              done ? 'bg-accent' : 'bg-ink/15'
                            }`}
                          />
                        )}
                        {/* marker */}
                        <span
                          className={`relative z-10 flex-shrink-0 mt-0.5 grid place-items-center w-6 h-6 rounded-full border ${
                            done
                              ? 'bg-accent border-accent text-ivory'
                              : current
                              ? 'bg-ivory border-accent text-accent ring-4 ring-accent/15'
                              : 'bg-ivory border-ink/25 text-transparent'
                          }`}
                        >
                          {done ? <Check size={14} /> : current ? <Scissors size={12} /> : <span className="w-1.5 h-1.5 rounded-full bg-ink/25" />}
                        </span>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                            <h4 className={`font-display text-lg ${current ? 'text-ink' : done ? 'text-ink' : 'text-ink/45'}`}>
                              {s.label}
                            </h4>
                            <span className="text-[0.7rem] uppercase tracking-luxe text-ink/45">{s.day}</span>
                          </div>

                          {/* WhatsApp-style bubble for done + current stages */}
                          {(done || current) && (
                            <div
                              className={`mt-3 inline-block max-w-md rounded-lg rounded-tl-none px-4 py-2.5 text-sm ${
                                current ? 'bg-primary-500 text-ivory' : 'bg-bone text-ink/75'
                              }`}
                            >
                              {s.note}
                              {current && (
                                <span className="block mt-1 text-[0.65rem] uppercase tracking-luxe text-ivory/60">
                                  Sent via WhatsApp · just now
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </div>

              {/* Actions */}
              <div className="border-t border-ink/10 pt-8">
                <p className="text-xs uppercase tracking-luxe text-ink/50 mb-4">Reply to your tracker</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={waLink(`Hello Lety Antony, please can I get an update on my order ${order.id}?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle size={16} />
                    Check Status
                  </a>
                  <a
                    href={waLink(`Hello Lety Antony, I'd like to reschedule the fitting for order ${order.id}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Reschedule Fitting
                  </a>
                  <a
                    href={waLink(`Hello Lety Antony, please arrange delivery for order ${order.id}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Request Delivery
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!order && !notFound && (
            <div className="text-center border border-dashed border-ink/20 rounded-sm py-16 px-6">
              <Search className="text-ink/25 mx-auto mb-4" size={40} />
              <p className="text-ink/60 max-w-md mx-auto">
                Enter your Order ID above to see your garment&apos;s live production status — or try
                one of the sample orders.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bone">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">The Technology Layer</p>
            <h2 className="mb-5">Reliability, engineered</h2>
            <p className="text-ink/70">
              The tracker isn&apos;t a feature — it&apos;s the product. Here&apos;s what runs behind
              every order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-ink/10">
            {[
              { icon: PackageCheck, title: 'A unique Order ID', desc: 'Every order is tagged at intake, so it can be traced from fabric to finished garment.' },
              { icon: MessageCircle, title: 'Automated updates', desc: 'Status messages are pushed via the WhatsApp Business API and SMS at each stage transition.' },
              { icon: CalendarClock, title: 'Two-way replies', desc: 'Reply to check status, reschedule a fitting, or request delivery — no phone-tag.' },
              { icon: User, title: 'Internal dashboard', desc: 'Every order\'s stage, assigned tailor and deadline countdown, tracked and owned.' },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="border-r border-b border-ink/10 p-8 bg-ivory">
                  <Icon className="text-accent mb-4" size={26} />
                  <h3 className="text-lg mb-3">{f.title}</h3>
                  <p className="text-ink/70 text-base">{f.desc}</p>
                </div>
              )
            })}
          </div>

          <p className="mt-8 text-sm text-ink/55 max-w-2xl">
            This page is a live demonstration of the client experience. In production, these updates
            arrive automatically on your WhatsApp and SMS — you never have to check a website.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-ivory">
        <div className="container text-center max-w-3xl">
          <p className="eyebrow mb-6">Your style, tracked every step of the way</p>
          <h2 className="text-ivory mb-8">
            Ready to start an order you can <span className="accent-serif">actually follow?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/order-inquiry" className="btn-accent">
              Begin a Commission
            </Link>
            <a
              href={waLink('Hello Lety Antony, I would like to start an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
