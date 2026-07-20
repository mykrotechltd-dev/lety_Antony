'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  BarChart3,
  Filter,
  RefreshCw,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  Scissors,
  MessageCircle,
  LogOut,
} from 'lucide-react'

// Types match Airtable record structure
type Order = {
  id: string
  name: string
  email: string
  phone: string
  garment: string
  stage: number // 0-6 (stage index)
  tailor: string
  startDate: string
  dueDate: string
  daysLeft: number
  status: 'on-track' | 'at-risk' | 'delayed'
  notes: string
}

type DashboardStats = {
  total: number
  onTrack: number
  atRisk: number
  delayed: number
  thisWeek: number
}

const STAGES = [
  'Order Intake',
  'Fabric Check',
  'Cutting',
  'Sewing',
  'Finishing',
  'QC',
  'Ready',
]

const TAILORS = [
  'Grace',
  'Musa',
  'Amara',
  'Tunde',
  'Chidinma',
]

export default function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    total: 0,
    onTrack: 0,
    atRisk: 0,
    delayed: 0,
    thisWeek: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filterStage, setFilterStage] = useState<number | null>(null)
  const [filterTailor, setFilterTailor] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPasswordInput, setShowPasswordInput] = useState(true)

  // Simple auth check (replace with real OAuth later)
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: in production, this calls a real auth API
    // For now, check against an env variable
    if (password === process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || password === 'lety2026') {
      setIsAuthenticated(true)
      setShowPasswordInput(false)
      setError(null)
    } else {
      setError('Invalid password')
    }
  }

  // Fetch orders from Airtable API (placeholder — wire to real endpoint)
  const fetchOrders = async () => {
    setLoading(true)
    try {
      // This will be: const res = await fetch('/api/orders', { headers: { Authorization: 'Bearer ...' } })
      // For now, load demo data
      const demoOrders: Order[] = [
        {
          id: 'LA-2026-0412',
          name: 'Amara O.',
          email: 'amara@example.com',
          phone: '+234 802 XXX 0412',
          garment: 'Beaded Cape Gown (Tier III)',
          stage: 3,
          tailor: 'Grace',
          startDate: '2026-07-13',
          dueDate: '2026-07-22',
          daysLeft: 3,
          status: 'on-track',
          notes: 'Beading progressing well. Client approved render.',
        },
        {
          id: 'LA-2026-0435',
          name: 'Tunde A.',
          email: 'tunde@example.com',
          phone: '+234 803 XXX 0435',
          garment: 'Senator Agbada (Tier II)',
          stage: 1,
          tailor: 'Musa',
          startDate: '2026-07-16',
          dueDate: '2026-07-25',
          daysLeft: 6,
          status: 'on-track',
          notes: 'Fabric check passed. Patterns drafted.',
        },
        {
          id: 'LA-2026-0388',
          name: 'Chidinma E.',
          email: 'chidinma@example.com',
          phone: '+234 801 XXX 0388',
          garment: 'Emerald Satin Gown (Tier II)',
          stage: 6,
          tailor: 'Grace',
          startDate: '2026-07-10',
          dueDate: '2026-07-20',
          daysLeft: 0,
          status: 'on-track',
          notes: 'Ready for collection today. Client notified.',
        },
        {
          id: 'LA-2026-0401',
          name: 'Blessing M.',
          email: 'blessing@example.com',
          phone: '+234 804 XXX 0401',
          garment: 'Beaded Bridal Gown (Tier III)',
          stage: 4,
          tailor: 'Amara',
          startDate: '2026-07-12',
          dueDate: '2026-07-21',
          daysLeft: 1,
          status: 'at-risk',
          notes: 'Finishing touches running behind. Rush fees apply.',
        },
        {
          id: 'LA-2026-0375',
          name: 'Folake D.',
          email: 'folake@example.com',
          phone: '+234 805 XXX 0375',
          garment: 'Three-Piece Suit (Tier II)',
          stage: 5,
          tailor: 'Tunde',
          startDate: '2026-07-08',
          dueDate: '2026-07-17',
          daysLeft: -2,
          status: 'delayed',
          notes: 'QC flagged hem issue. Being reworked. Client notified of delay.',
        },
      ]
      setOrders(demoOrders)
      calculateStats(demoOrders)
      setError(null)
    } catch (err) {
      setError('Failed to fetch orders. Check your Airtable connection.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (orderList: Order[]) => {
    const today = new Date()
    const thisWeekStart = new Date(today)
    thisWeekStart.setDate(today.getDate() - today.getDay())

    const stats: DashboardStats = {
      total: orderList.length,
      onTrack: orderList.filter((o) => o.status === 'on-track').length,
      atRisk: orderList.filter((o) => o.status === 'at-risk').length,
      delayed: orderList.filter((o) => o.status === 'delayed').length,
      thisWeek: orderList.filter(
        (o) => new Date(o.startDate) >= thisWeekStart && new Date(o.startDate) <= today
      ).length,
    }
    setStats(stats)
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders()
    }
  }, [isAuthenticated])

  // Filter logic
  const filteredOrders = orders.filter((order) => {
    if (filterStage !== null && order.stage !== filterStage) return false
    if (filterTailor && order.tailor !== filterTailor) return false
    if (filterStatus && order.status !== filterStatus) return false
    return true
  })

  const getStageColor = (stage: number) => {
    if (stage < 6) return 'bg-accent/15 text-gold-deep'
    return 'bg-primary-500 text-ivory'
  }

  const getStatusIcon = (status: string) => {
    if (status === 'on-track') return <CheckCircle size={18} className="text-primary-500" />
    if (status === 'at-risk') return <AlertCircle size={18} className="text-yellow-600" />
    return <AlertCircle size={18} className="text-wine" />
  }

  const getStatusLabel = (status: string) => {
    if (status === 'on-track') return 'On Track'
    if (status === 'at-risk') return 'At Risk'
    return 'Delayed'
  }

  if (showPasswordInput) {
    return (
      <main className="min-h-screen bg-ivory flex items-center justify-center">
        <Header />
        <div className="container max-w-sm mt-24">
          <div className="bg-bone rounded-sm border border-ink/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="text-accent" size={28} />
              <h1 className="text-2xl">Order Dashboard</h1>
            </div>
            <p className="text-ink/70 mb-6">Production management for Lety Antony internal use.</p>
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label htmlFor="pass" className="block text-sm font-semibold text-ink/80 mb-2">
                  Access Password
                </label>
                <input
                  id="pass"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter dashboard password"
                  className="w-full px-4 py-3 border border-ink/15 rounded-sm bg-ivory focus:outline-none focus:border-accent"
                />
              </div>
              {error && <p className="text-wine text-sm">{error}</p>}
              <button type="submit" className="btn-primary w-full">
                Access Dashboard
              </button>
            </form>
            <p className="text-xs text-ink/50 text-center mt-6">
              For authorized team members only.
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-ivory">
      <Header />

      {/* Hero */}
      <section className="bg-bone border-b border-ink/10 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-accent" size={28} />
                <h1 className="text-3xl">Production Dashboard</h1>
              </div>
              <p className="text-ink/70">Real-time order tracking & tailor management</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => fetchOrders()}
                className="btn-secondary flex items-center gap-2"
                disabled={loading}
              >
                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                Refresh
              </button>
              <button onClick={() => setIsAuthenticated(false)} className="btn-secondary">
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ivory">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { label: 'Total Orders', value: stats.total, icon: BarChart3 },
              { label: 'On Track', value: stats.onTrack, icon: CheckCircle, color: 'text-primary-500' },
              { label: 'At Risk', value: stats.atRisk, icon: AlertCircle, color: 'text-yellow-600' },
              { label: 'Delayed', value: stats.delayed, icon: AlertCircle, color: 'text-wine' },
              { label: 'This Week', value: stats.thisWeek, icon: Clock },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="border border-ink/10 bg-bone rounded-sm p-4">
                  <p className="text-xs uppercase tracking-luxe text-ink/50 mb-2">{s.label}</p>
                  <div className="flex items-end gap-3">
                    <p className="font-display text-3xl">{s.value}</p>
                    <Icon size={20} className={`text-ink/30 ${s.color || ''}`} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-ink/10">
            <div className="flex items-center gap-2 text-sm text-ink/60">
              <Filter size={16} />
              <span>Filter:</span>
            </div>
            {/* Stage filter */}
            <select
              value={filterStage ?? ''}
              onChange={(e) => setFilterStage(e.target.value === '' ? null : parseInt(e.target.value))}
              className="px-3 py-2 text-sm border border-ink/15 rounded-sm bg-ivory text-ink focus:outline-none focus:border-accent"
            >
              <option value="">All Stages</option>
              {STAGES.map((s, i) => (
                <option key={i} value={i}>
                  {s}
                </option>
              ))}
            </select>
            {/* Tailor filter */}
            <select
              value={filterTailor ?? ''}
              onChange={(e) => setFilterTailor(e.target.value === '' ? null : e.target.value)}
              className="px-3 py-2 text-sm border border-ink/15 rounded-sm bg-ivory text-ink focus:outline-none focus:border-accent"
            >
              <option value="">All Tailors</option>
              {TAILORS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {/* Status filter */}
            <select
              value={filterStatus ?? ''}
              onChange={(e) => setFilterStatus(e.target.value === '' ? null : e.target.value)}
              className="px-3 py-2 text-sm border border-ink/15 rounded-sm bg-ivory text-ink focus:outline-none focus:border-accent"
            >
              <option value="">All Status</option>
              <option value="on-track">On Track</option>
              <option value="at-risk">At Risk</option>
              <option value="delayed">Delayed</option>
            </select>
            {(filterStage !== null || filterTailor || filterStatus) && (
              <button
                onClick={() => {
                  setFilterStage(null)
                  setFilterTailor(null)
                  setFilterStatus(null)
                }}
                className="text-sm text-accent hover:text-gold-deep"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Orders table */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-ink/60">Loading orders...</p>
            </div>
          ) : error ? (
            <div className="flex items-start gap-3 border border-wine/30 bg-wine/5 rounded-sm p-6 mb-8">
              <AlertCircle className="text-wine flex-shrink-0 mt-0.5" size={22} />
              <p className="text-wine">{error}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink/15">
                    <th className="text-left px-4 py-3 font-semibold text-ink/60 uppercase tracking-luxe text-xs">
                      Order
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink/60 uppercase tracking-luxe text-xs">
                      Client
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink/60 uppercase tracking-luxe text-xs">
                      Garment
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink/60 uppercase tracking-luxe text-xs">
                      Stage
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink/60 uppercase tracking-luxe text-xs">
                      Tailor
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink/60 uppercase tracking-luxe text-xs">
                      Due
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink/60 uppercase tracking-luxe text-xs">
                      Days Left
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink/60 uppercase tracking-luxe text-xs">
                      Status
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink/60 uppercase tracking-luxe text-xs">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-ink/10 hover:bg-bone transition-colors">
                      <td className="px-4 py-3 font-semibold text-ink">{order.id}</td>
                      <td className="px-4 py-3 text-ink/75">{order.name}</td>
                      <td className="px-4 py-3 text-ink/75 max-w-xs truncate">{order.garment}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 rounded-sm text-xs font-semibold ${getStageColor(order.stage)}`}>
                          {STAGES[order.stage]}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ink/75">{order.tailor}</td>
                      <td className="px-4 py-3 text-ink/75 text-xs">{order.dueDate}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`font-semibold ${
                            order.daysLeft <= 0 ? 'text-wine font-bold' : 'text-ink'
                          }`}
                        >
                          {order.daysLeft <= 0 ? `${order.daysLeft} (⚠️)` : order.daysLeft}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(order.status)}
                          <span className="text-xs font-semibold">{getStatusLabel(order.status)}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`https://wa.me/2348036438208?text=Hi, this is regarding order ${order.id} for ${order.name}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-accent/15 text-gold-deep rounded-sm hover:bg-accent/25 transition-colors"
                        >
                          <MessageCircle size={14} />
                          Chat
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredOrders.length === 0 && (
                <div className="text-center py-12 text-ink/60">
                  No orders match your filters.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Setup guide */}
      <section className="bg-bone border-t border-ink/10">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-2xl mb-6">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Wire to Airtable</h3>
                <ol className="space-y-2 text-ink/70 text-sm list-decimal list-inside">
                  <li>Create an Airtable base with fields: Order ID, Client Name, Email, Phone, Garment, Stage, Tailor, Start Date, Due Date, Status, Notes</li>
                  <li>Generate a personal access token in Airtable</li>
                  <li>Create an API route at `/api/orders` that fetches from your base</li>
                  <li>Update the `fetchOrders()` function in this dashboard to call your endpoint</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Wire to WhatsApp API</h3>
                <ol className="space-y-2 text-ink/70 text-sm list-decimal list-inside">
                  <li>Sign up for WhatsApp Business API (Twilio, MessageBird, or official)</li>
                  <li>Create message templates for each stage transition</li>
                  <li>Create an API route at `/api/send-update` to push messages when stage changes</li>
                  <li>Call it when orders are updated in the dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
