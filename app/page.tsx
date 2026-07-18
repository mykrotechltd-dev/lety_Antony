import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Zap, Eye, Truck, Sparkles, Clock, Users, Award, MapPin, Phone, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">
                Your Style, Your Fabric, <span className="gradient-text">Seven Days</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Custom fashion that doesn't compromise on quality or timeline. We combine AI visualization with master craftsmanship to deliver your dream outfit on time, every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/order-inquiry" className="btn-primary text-center">Start Your Order</Link>
                <Link href="#services" className="btn-secondary text-center">Learn More</Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary-500">7</p>
                  <p className="text-sm text-gray-600">Working Days</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-500">100%</p>
                  <p className="text-sm text-gray-600">Custom Made</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-500">Real-Time</p>
                  <p className="text-sm text-gray-600">Tracking</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl h-96 lg:h-[540px] overflow-hidden shadow-2xl">
              <img
                src="/designs/design4.jpeg"
                alt="Navy beaded evening gown with satin cape, handcrafted by Lety Antony"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-primary-900">Handcrafted Couture</p>
                <p className="text-xs text-gray-600">Beaded cape gown · Lety Antony</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive custom fashion services tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: '7-Day Production',
                desc: 'Your custom garment, delivered within seven working days. Guaranteed.'
              },
              {
                icon: Eye,
                title: 'AI Visualization',
                desc: 'See your finished outfit before a single cut is made. Approve with confidence.'
              },
              {
                icon: Truck,
                title: 'Real-Time Tracking',
                desc: 'WhatsApp & SMS updates at every stage. Know exactly where your garment is.'
              },
              {
                icon: Users,
                title: 'Corporate Solutions',
                desc: 'Bulk orders, uniform production, and branded wear for organizations.'
              },
              {
                icon: Award,
                title: 'Premium Quality',
                desc: 'Every piece passes our documented QC checklist before delivery.'
              },
              {
                icon: Sparkles,
                title: 'Styling Consultancy',
                desc: 'Expert advice on fabrics, colors, and styles that work for you.'
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="card">
                  <Icon className="text-primary-500 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-primary-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">The 7-Day Production Pipeline</h2>
            <p className="text-xl text-gray-600">From concept to collection, tracked every step</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mb-12">
            {[
              { day: 'Day 0', stage: 'Order Intake', desc: 'Measurements captured' },
              { day: 'Day 1', stage: 'Fabric Check', desc: 'Inspection & patterns' },
              { day: 'Day 2', stage: 'Cutting', desc: 'Precision cutting' },
              { day: 'Days 3-5', stage: 'Sewing', desc: 'Assembly & construction' },
              { day: 'Day 6', stage: 'Finishing', desc: 'Hems, buttons, details' },
              { day: 'Day 7 AM', stage: 'Quality Check', desc: 'Final inspection' },
              { day: 'Day 7 PM', stage: 'Ready', desc: 'Ready for collection' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                  {idx + 1}
                </div>
                <p className="text-sm font-semibold text-primary-600">{item.day}</p>
                <h4 className="font-bold text-sm my-2">{item.stage}</h4>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 border border-primary-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-accent flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-2">The Process Tracker Guarantee</h3>
                <p className="text-gray-600">
                  Every client receives automated WhatsApp & SMS notifications at each stage. You'll always know exactly where your garment is in production. No chasing. No surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Visualization Section */}
      <section className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl h-96 lg:h-[520px] overflow-hidden shadow-2xl">
              <img
                src="/designs/design1.jpeg"
                alt="Navy beaded mermaid gown detailing by Lety Antony"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="mb-6">See It Before We Sew It</h2>
              <p className="text-lg text-gray-600 mb-6">
                The biggest source of disappointment in custom tailoring is the gap between what you imagined and what you received. We close that gap with AI.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'AI generates a photorealistic preview of your finished garment',
                  'Rendered on a model matching YOUR body proportions',
                  'In YOUR actual fabric, captured with precision',
                  'Up to 2 revision rounds before production starts',
                  'Approved render becomes the production contract'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 italic">
                "What you approve is what you collect. This is our contract."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Showcase / Atelier */}
      <section id="gallery" className="bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest text-primary-500 uppercase mb-3">
              The Atelier
            </p>
            <h2 className="mb-4">Recent Designs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse of our couture craftsmanship — hand-beaded bodices, structured tailoring,
              and finish worthy of every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured video */}
            <div className="relative rounded-xl overflow-hidden shadow-md aspect-[3/4] sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
                poster="/designs/design6.png"
              >
                <source src="/designs/design3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 bg-primary-900/80 backdrop-blur px-3 py-1.5 rounded-lg">
                <p className="text-xs font-semibold text-white uppercase tracking-wide">In Motion</p>
              </div>
            </div>

            {[
              { src: '/designs/design1.jpeg', alt: 'Navy beaded strapless mermaid gown by Lety Antony', label: 'Beaded Mermaid Gown' },
              { src: '/designs/design2.jpeg', alt: 'Wine lace-sleeve beaded evening gown by Lety Antony', label: 'Wine Lace Evening Gown' },
              { src: '/designs/design6.png', alt: 'Navy cape gown neckline detail by Lety Antony', label: 'Cape Gown — Neckline Detail' },
              { src: '/designs/design4.jpeg', alt: 'Navy beaded gown with satin cape by Lety Antony', label: 'Beaded Cape Gown' },
            ].map((item, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md aspect-[3/4]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/order-inquiry" className="btn-primary">
              Commission Your Piece
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="bg-primary-50">
        <div className="container">
          <h2 className="text-center mb-16">Why Lety Antony</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Certainty in Uncertain Times',
                desc: 'In a market known for tailor disappointment, we deliver. Your 7-day promise is backed by a documented production pipeline and on-time delivery bonus structure.'
              },
              {
                title: 'Technology That Works',
                desc: 'Real-time tracking isn\'t a luxury—it\'s how you should buy custom fashion. WhatsApp & SMS updates at every stage, plus an AI visualization that catches design issues before they happen.'
              },
              {
                title: 'Craftsmanship at Scale',
                desc: 'Master tailors + industrialized workflow. Every garment passes our QC checklist against your approved design before we send the "Ready for Collection" message.'
              },
              {
                title: 'One-Stop Experience',
                desc: 'Partner-stocked fabric showroom means you touch real materials, see them AI-rendered on your proportions, and start production immediately. No market runs.'
              },
              {
                title: 'For Time-Poor Professionals',
                desc: 'You can\'t afford a tailor who disappoints. We charge a premium (20-40% above average) because we deliver what we promise. Certainty has a price.'
              },
              {
                title: 'Diaspora-Ready',
                desc: 'Remote clients can co-design and approve outfits entirely online with AI visualization and body-measurement from photos. Delivery via trusted courier partners.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="font-bold mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Value-based pricing. You pay for certainty, not just sewing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: 'Tier 1 - Simple',
                examples: 'Shirts, skirts, simple gowns',
                price: 'From ₦25,000',
              },
              {
                tier: 'Tier 2 - Standard',
                examples: 'Senator wear, agbada, corporate dresses',
                price: 'From ₦35,000',
                featured: true,
              },
              {
                tier: 'Tier 3 - Complex',
                examples: 'Beaded gowns, structured jackets, bridal',
                price: 'From ₦50,000',
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 ${
                  tier.featured
                    ? 'bg-primary-500 text-white border-2 border-primary-500 transform scale-105'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <h3 className={`font-bold text-xl mb-2 ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                  {tier.tier}
                </h3>
                <p className={`text-sm mb-6 ${tier.featured ? 'text-primary-100' : 'text-gray-600'}`}>
                  {tier.examples}
                </p>
                <p className={`text-3xl font-bold mb-6 ${tier.featured ? 'text-white' : 'text-primary-500'}`}>
                  {tier.price}
                </p>
                <button className={tier.featured ? 'btn-accent w-full' : 'btn-secondary w-full'}>
                  Book Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 rounded-xl p-8 text-center">
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Express Service (48-72 hours)</span> available at +50-100% surcharge
            </p>
            <p className="text-sm text-gray-600">
              All prices include AI visualization, real-time tracking, and our 7-day delivery guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="bg-primary-50">
        <div className="container">
          <h2 className="text-center mb-16">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Busy Professionals',
                desc: 'Ages 25-50, mid-to-high income. You value reliability and can\'t afford to chase tailors.',
              },
              {
                title: 'Event Clients',
                desc: 'Weddings, aso-ebi groups, birthdays. You need coordinated, on-time delivery for your event.',
              },
              {
                title: 'Corporate Organizations',
                desc: 'Banks, schools, hospitality. We produce branded uniforms and wear in volume.',
              },
              {
                title: 'Diaspora Clients',
                desc: 'Nigerians abroad ordering traditional wear. Order online, approve via AI, delivery via courier.',
              },
            ].map((market, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="font-bold text-lg mb-3">{market.title}</h3>
                <p className="text-gray-600 text-sm">{market.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container text-center">
          <h2 className="text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Your style, your fabric, seven working days. Tracked every step. Guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/order-inquiry" className="btn-accent px-10 py-4 text-lg text-center">
              Start Your Order
            </Link>
            <Link href="/order-inquiry#inquiry-form" className="px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-4">Get In Touch</h2>
            <p className="text-center text-gray-600 mb-12">
              Questions? We're here to help. Reach out and let's discuss your custom fashion needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <MapPin className="text-primary-500 mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-gray-600 text-sm">Abuja, FCT<br />Nigeria</p>
              </div>
              <div className="text-center">
                <Phone className="text-primary-500 mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">+234 (0) XXX XXX XXXX</p>
              </div>
              <div className="text-center">
                <Mail className="text-primary-500 mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600 text-sm">hello@letyantonyfh.com</p>
              </div>
            </div>

            <form className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <textarea
                placeholder="Tell us about your custom fashion needs..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 mb-6"
              ></textarea>
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
