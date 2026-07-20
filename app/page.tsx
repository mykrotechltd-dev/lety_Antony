import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Eye,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react'

const WHATSAPP = 'https://wa.me/2348036438208'

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Header />

      {/* ---------- Hero ---------- */}
      <section className="relative bg-ink text-ivory pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 animate-rise">
              <p className="eyebrow mb-6">Bespoke Nigerian Couture · Abuja</p>
              <h1 className="text-ivory mb-8">
                Your style, your fabric,<br />
                <span className="accent-serif">seven working days.</span>
              </h1>
              <p className="text-ivory/75 max-w-xl mb-10">
                Hand-finished garments made to your measure — visualised before a single cut,
                tracked at every stage, and delivered when we say. Craftsmanship with certainty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/order-inquiry" className="btn-accent">
                  Begin a Commission
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Editorial stat row — hairline-divided, not the SaaS metric template */}
              <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-ivory/15 pt-8">
                {[
                  { k: 'VII', l: 'Working days, guaranteed' },
                  { k: '100%', l: 'Made to measure' },
                  { k: 'Live', l: 'Production tracking' },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-3">
                    <dt className="font-display text-3xl text-gold-light leading-none">{s.k}</dt>
                    <dd className="text-xs uppercase tracking-luxe text-ivory/60 max-w-[7rem]">
                      {s.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[26rem] md:h-[34rem] lg:h-[40rem] overflow-hidden">
                <img
                  src="/designs/g-navy-cape.jpg"
                  alt="Navy beaded evening gown with satin cape, hand-finished at the Lety Antony atelier"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="eyebrow text-gold-light mb-1">Signature</p>
                  <p className="font-display text-lg text-ivory">The Beaded Cape Gown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- The Problem ---------- */}
      <section className="bg-ivory">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">The Reckoning</p>
            <h2 className="mb-5">“My tailor disappointed me.”</h2>
            <p className="text-ink/70">
              A national cliché — missed deadlines, hidden processes, endless follow-ups. We
              re-engineered the whole thing into one disciplined, visible line.
            </p>
          </div>
          <figure className="rounded-sm border border-ink/10 bg-white p-3 md:p-5 shadow-sm">
            <img
              src="/graphics/problem-solution.jpg"
              alt="The old way — a tangle of verbal briefs, hidden processes and late delivery — versus the Lety Antony way: a clean, AI-assisted, tracked seven-day pipeline"
              loading="lazy"
              className="w-full h-auto"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Services (atelier index) ---------- */}
      <section id="services" className="bg-bone">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">The House</p>
            <h2 className="mb-5">A full service, end to end</h2>
            <p className="text-ink/70">
              From fabric to finished garment, everything happens under one roof — so nothing gets
              lost between hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/10">
            {[
              { n: '01', title: '7-Day Production', desc: 'Your custom garment, made and delivered within seven working days. Guaranteed in writing.' },
              { n: '02', title: 'AI Visualisation', desc: 'See your finished outfit rendered on your proportions before a single cut is made.' },
              { n: '03', title: 'Real-Time Tracking', desc: 'WhatsApp and SMS updates at every stage. You always know where your garment is.' },
              { n: '04', title: 'Aso-Ebi & Groups', desc: 'Coordinated bulk production for weddings and events, delivered on a hard deadline.' },
              { n: '05', title: 'Corporate & Uniforms', desc: 'Branded workwear and uniforms produced in volume, to a documented standard.' },
              { n: '06', title: 'Styling Consultancy', desc: 'Personal sessions on silhouette, fabric and colour — matched to occasion and body.' },
            ].map((s) => (
              <div
                key={s.n}
                className="group border-r border-b border-ink/10 p-8 md:p-10 transition-colors duration-300 hover:bg-bone"
              >
                <span className="font-display text-2xl text-accent">{s.n}</span>
                <h3 className="mt-5 mb-3">{s.title}</h3>
                <p className="text-ink/70 text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section id="process" className="bg-ivory">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">The Process</p>
            <h2 className="mb-5">Seven days, one clear line</h2>
            <p className="text-ink/70">
              Every order moves through the same disciplined pipeline — with a notification the
              moment each stage is done.
            </p>
          </div>

          <ol className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-10 gap-x-4">
            {[
              { day: 'Day 0', stage: 'Order Intake', desc: 'Measurements & design lock' },
              { day: 'Day 1', stage: 'Fabric & Pattern', desc: 'Inspection, drafting' },
              { day: 'Day 2', stage: 'Cutting', desc: 'Precision cutting' },
              { day: 'Days 3–5', stage: 'Sewing', desc: 'Assembly & construction' },
              { day: 'Day 6', stage: 'Finishing', desc: 'Hems, beads, details' },
              { day: 'Day 7 AM', stage: 'Quality Control', desc: 'Checked against your render' },
              { day: 'Day 7 PM', stage: 'Ready', desc: 'Ready for collection' },
            ].map((item, idx) => (
              <li key={idx} className="relative pt-6">
                <span className="absolute top-0 left-0 right-0 h-px bg-ink/15" />
                <span className="absolute top-0 left-0 h-px w-8 bg-accent" />
                <span className="font-display text-xl text-accent">{idx + 1}</span>
                <p className="mt-3 text-[0.7rem] uppercase tracking-luxe text-ink/50">{item.day}</p>
                <h4 className="mt-1 mb-1 text-base font-display">{item.stage}</h4>
                <p className="text-sm text-ink/65">{item.desc}</p>
              </li>
            ))}
          </ol>

          <figure className="mt-16 rounded-sm border border-ink/10 bg-white p-3 md:p-5 shadow-sm">
            <img
              src="/graphics/tracker.jpg"
              alt="The production tracker — WhatsApp updates pushed at each stage from Order Intake through Fabric Check, Cutting, Sewing, Finishing, QC and Collection"
              loading="lazy"
              className="w-full h-auto"
            />
          </figure>

          <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1 flex items-start gap-4 border border-ink/10 bg-bone p-8">
              <MessageCircle className="text-accent flex-shrink-0 mt-1" size={22} />
              <p className="text-ink/75">
                <span className="font-display text-lg text-ink">The tracker is the product.</span>{' '}
                Automated WhatsApp &amp; SMS notifications land at every stage transition — no chasing,
                no silence, no surprises on collection day.
              </p>
            </div>
            <Link
              href="/track"
              className="btn-accent flex-shrink-0 self-center"
            >
              Track an Order
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- AI Visualisation ---------- */}
      <section className="bg-bone">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[26rem] lg:h-[34rem] overflow-hidden order-2 lg:order-1">
              <img
                src="/designs/g-wine-gown.jpg"
                alt="Wine lace mermaid gown with hand-beaded bodice from the Lety Antony atelier"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-4">Design Certainty</p>
              <h2 className="mb-6">See it before we sew it</h2>
              <p className="text-ink/70 mb-8">
                The biggest source of disappointment in custom tailoring is the gap between what you
                imagined and what you received. We close it — the approved render becomes the contract.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  'A photorealistic preview of your finished garment',
                  'Rendered on a model matching your own proportions',
                  'In your actual fabric, captured with precision',
                  'Up to two revision rounds before production begins',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Eye className="text-accent flex-shrink-0 mt-1" size={18} />
                    <span className="text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-display text-xl italic text-ink">
                “What you approve is what you collect.”
              </p>
            </div>
          </div>

          <figure className="mt-16 rounded-sm border border-ink/10 bg-white p-3 md:p-6 shadow-sm">
            <img
              src="/graphics/ai-workflow.jpg"
              alt="The expectation-gap closer: client measurements and a text prompt feed the AI styling engine, which returns a photorealistic render the client approves before production"
              loading="lazy"
              className="w-full h-auto"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Atelier gallery (dark ground) ---------- */}
      <section id="gallery" className="bg-ink text-ivory">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">The Atelier</p>
            <h2 className="text-ivory mb-5">Recent work</h2>
            <p className="text-ivory/70">
              Hand-beaded bodices, structured tailoring, and a finish worthy of the occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative overflow-hidden aspect-[3/4] sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
                poster="/designs/g-navy-cape.jpg"
              >
                <source src="/designs/design3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 bg-ink/70 backdrop-blur px-3 py-1.5">
                <p className="eyebrow text-gold-light">In Motion</p>
              </div>
            </div>

            {[
              { src: '/designs/g-navy-embroidered.jpg', alt: 'Navy velvet ballgown with silver embroidery', label: 'Embellished Velvet Ballgown' },
              { src: '/designs/g-red-ballgown.jpg', alt: 'Off-shoulder rouched red satin ballgown', label: 'Rouched Satin Ballgown' },
              { src: '/designs/g-black-beaded.jpg', alt: 'Black beaded high-neck column gown', label: 'Beaded Black Column' },
              { src: '/designs/g-emerald-satin.jpg', alt: 'Emerald green satin A-line gown with jewelled belt', label: 'Emerald Satin Gown' },
              { src: '/designs/g-wine-gown.jpg', alt: 'Wine lace mermaid gown with beaded bodice', label: 'Wine Lace Mermaid' },
              { src: '/designs/g-ivory-lace.jpg', alt: 'Ivory lace long-sleeve bridal gown', label: 'Lace Bridal Gown' },
              { src: '/designs/g-navy-jumpsuit.jpg', alt: 'Tailored navy wrap jumpsuit with chain belt', label: 'Tailored Jumpsuit' },
              { src: '/designs/g-black-suit.jpg', alt: 'Black three-piece tailored trouser suit', label: 'Three-Piece Suit' },
              { src: '/designs/g-ivory-suit.jpg', alt: 'Ivory peplum blazer and trouser suit', label: 'Ivory Peplum Suit' },
              { src: '/designs/g-black-column.jpg', alt: 'Black beaded long-sleeve column gown', label: 'Beaded Sheath Gown' },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden aspect-[3/4]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-base text-ivory">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/order-inquiry" className="btn-accent">
              Commission Your Piece
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Why ---------- */}
      <section id="why" className="bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">Why the House</p>
              <h2 className="mb-5">Talent is common.<br />Reliability is rare.</h2>
              <p className="text-ink/70">
                We built the house on the one thing the market cannot promise: your garment, done
                right, on the day.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 border-t border-l border-ink/10">
              {[
                { title: 'Certainty, in writing', desc: 'A documented pipeline and an on-time delivery guarantee stand behind every seven-day promise.' },
                { title: 'Technology that serves craft', desc: 'Live tracking and pre-production visualisation catch problems before they reach your wardrobe.' },
                { title: 'Craftsmanship at scale', desc: 'Master tailors and a disciplined workflow — every garment QC-checked against your approved design.' },
                { title: 'One-stop atelier', desc: 'A partner-stocked fabric showroom means you touch materials and start production the same day.' },
                { title: 'For the time-poor', desc: 'You cannot afford a tailor who disappoints. You pay a premium for certainty — and receive it.' },
                { title: 'Diaspora-ready', desc: 'Co-design and approve entirely online, with delivery through trusted courier partners.' },
              ].map((item, idx) => (
                <div key={idx} className="border-r border-b border-ink/10 p-8 hover:bg-bone transition-colors duration-300">
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-ink/70 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Partner Showroom ---------- */}
      <section id="showroom" className="bg-bone">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">The Showroom</p>
            <h2 className="mb-5">A wall of fabric, on consignment</h2>
            <p className="text-ink/70">
              Vetted wholesalers and brands stock their materials in our showroom — so you browse
              rare fabrics, see them rendered on your proportions, and begin production the same day.
              One visit, not a market trip.
            </p>
          </div>
          <figure className="rounded-sm border border-ink/10 bg-white p-3 md:p-6 shadow-sm">
            <img
              src="/graphics/flywheel.jpg"
              alt="The value-exchange flywheel: fabric partners provide premium inventory on consignment; Lety Antony provides foot traffic and AI visualisation; the client gains a one-stop experience"
              loading="lazy"
              className="w-full h-auto"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section className="bg-ivory">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Investment</p>
            <h2 className="mb-5">You pay for certainty, not just sewing</h2>
            <p className="text-ink/70">
              Value-based pricing, priced by the complexity of the piece. Every commission includes
              visualisation, tracking, and the seven-day guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {[
              { tier: 'Tier I — Simple', examples: 'Shirts, skirts, simple gowns', price: '₦25,000' },
              { tier: 'Tier II — Standard', examples: 'Senator wear, agbada, corporate dresses', price: '₦35,000', featured: true },
              { tier: 'Tier III — Complex', examples: 'Beaded gowns, structured jackets, bridal', price: '₦50,000' },
            ].map((tier, idx) => (
              <div
                key={idx}
                className={`p-10 flex flex-col ${tier.featured ? 'bg-ink text-ivory' : 'bg-ivory'}`}
              >
                <p className={`text-xs uppercase tracking-luxe mb-6 ${tier.featured ? 'text-gold-light' : 'text-accent'}`}>
                  {tier.tier}
                </p>
                <p className={`text-sm mb-8 ${tier.featured ? 'text-ivory/70' : 'text-ink/65'}`}>
                  {tier.examples}
                </p>
                <div className="mt-auto">
                  <p className={`text-xs uppercase tracking-luxe mb-1 ${tier.featured ? 'text-ivory/50' : 'text-ink/45'}`}>
                    From
                  </p>
                  <p className="font-display text-4xl mb-8">{tier.price}</p>
                  <Link
                    href="/order-inquiry"
                    className={tier.featured ? 'btn-accent w-full' : 'btn-secondary w-full'}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-ink/70">
            <span className="font-display text-lg text-ink">Express service</span> — 48–72 hour
            turnaround available at a 50–100% surcharge. Diaspora pricing quoted in USD on request.
          </p>
        </div>
      </section>

      {/* ---------- Who we serve ---------- */}
      <section className="bg-bone">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Clientele</p>
            <h2 className="mb-5">Who we dress</h2>
            <p className="text-ink/70">
              From Abuja&apos;s professionals to the diaspora and corporate houses — dressed with the
              same certainty.
            </p>
          </div>
          <figure className="rounded-sm border border-ink/10 bg-white p-3 md:p-6 shadow-sm">
            <img
              src="/graphics/markets.jpg"
              alt="Our markets: primary Abuja core (civil servants, diplomats, event clients), secondary diaspora ordering traditional wear, and B2B corporate uniform production"
              loading="lazy"
              className="w-full h-auto"
            />
          </figure>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-primary-900 text-ivory">
        <div className="container text-center max-w-3xl">
          <p className="eyebrow mb-6">Never be disappointed by a tailor again</p>
          <h2 className="text-ivory mb-8">
            Your next piece deserves <span className="accent-serif">certainty.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/order-inquiry" className="btn-accent">
              Begin a Commission
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="bg-bone">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Visit / Enquire</p>
              <h2 className="mb-6">Get in touch</h2>
              <p className="text-ink/70 mb-10 max-w-md">
                Tell us about the occasion and the look you have in mind. We&apos;ll take it from there.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <MapPin className="text-accent flex-shrink-0" size={20} />
                  <span className="text-ink/80">Abuja, Federal Capital Territory, Nigeria</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-accent flex-shrink-0" size={20} />
                  <a href="tel:+2348036438208" className="text-ink/80 hover:text-accent transition-colors">+234 803 643 8208</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-accent flex-shrink-0" size={20} />
                  <a href="mailto:hello@letyantonyfh.com" className="text-ink/80 hover:text-accent transition-colors">
                    hello@letyantonyfh.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <MessageCircle className="text-accent flex-shrink-0" size={20} />
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-ink/80 hover:text-accent transition-colors">
                    Message us on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <form className="bg-ivory border border-ink/10 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="c-name" className="block text-xs uppercase tracking-luxe text-ink/60 mb-2">Name</label>
                  <input
                    id="c-name"
                    type="text"
                    className="w-full px-4 py-3 bg-bone border border-ink/15 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs uppercase tracking-luxe text-ink/60 mb-2">Email</label>
                  <input
                    id="c-email"
                    type="email"
                    className="w-full px-4 py-3 bg-bone border border-ink/15 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="c-msg" className="block text-xs uppercase tracking-luxe text-ink/60 mb-2">Your Vision</label>
                <textarea
                  id="c-msg"
                  rows={5}
                  className="w-full px-4 py-3 bg-bone border border-ink/15 rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
