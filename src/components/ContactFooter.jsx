import { useState } from 'react'

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: 'Garden West',
    service: 'Property Kharidni Hai (Buy)',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <>
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-1">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Karachi Advisory Desk
            </div>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl lg:text-4xl text-navy">
              Aapki Property, Hamari Zimmedari
            </h2>
            <p className="text-sm text-gray-600 mt-4 max-w-md leading-relaxed">
              Garden West, Garden East, Britto Road ya Nishtar Road mein Sale, Purchase, Rent ya Renovation &mdash; kisi bhi mashware ke liye hamari on-ground team se raabta karein.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3.5 text-gray-700">
                <span className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-gold shrink-0 shadow-md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-navy">Main Office</p>
                  <p className="text-xs text-gray-500">Main Boulevard, Garden West, Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-gray-700">
                <span className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-gold shrink-0 shadow-md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-navy">Call &amp; WhatsApp</p>
                  <p className="text-xs text-gray-500">+92 300 0000000 / +92 21 32200000</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-gray-700">
                <span className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-gold shrink-0 shadow-md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-navy">Email Inquiries</p>
                  <p className="text-xs text-gray-500">karachi@madinarealestate.com</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-8 space-y-4">
            <h3 className="font-heading font-semibold text-xl text-navy">
              Book a Free Karachi Property Consultation
            </h3>

            {submitted && (
              <div className="bg-brandgreen/10 border border-brandgreen text-brandgreen-dark text-xs p-3 rounded-lg font-semibold animate-fade-in-up">
                ✓ Shukriya! Hamare Karachi property consultant jald aap se rabta karenge.
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-gray-700">Aapka Naam</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Muhammad Ali..."
                className="mt-1 w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700">WhatsApp / Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0300-1234567"
                className="mt-1 w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-700">Preferred Area</label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all cursor-pointer"
                >
                  <option>Garden West</option>
                  <option>Garden East</option>
                  <option>Britto Road</option>
                  <option>Nishtar Road</option>
                  <option>Soldier Bazaar</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700">Zaroorat (Service)</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all cursor-pointer"
                >
                  <option>Property Kharidni Hai (Buy)</option>
                  <option>Property Sale Karni Hai</option>
                  <option>Rent Par Flat / Shop Chahiye</option>
                  <option>Renovation &amp; Construction</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700">Message / Property Details</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Budget, bedroom requirements, ya location specific requirement..."
                className="mt-1 w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-navy text-white font-bold text-sm py-3 rounded-lg hover:bg-navy-dark hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer shadow-md"
            >
              Rabta Karein (Send Message)
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark text-gray-300 pt-12 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 40 40" className="w-8 h-8 text-gold" fill="currentColor">
                  <path d="M4 34V18l6-6 6 6v16H4z" opacity="0.85" />
                  <path d="M16 34V10l4-4 4 4v24h-8z" />
                  <path d="M28 34V18l4-4 4 4v16h-8z" opacity="0.85" />
                </svg>
                <p className="font-heading font-bold text-white text-lg">Madina Real Estate</p>
              </div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Trusted Karachi property consultants specializing in sale, purchase, rent &amp; luxury renovation across Garden West, Garden East &amp; Britto Road.
              </p>
            </div>

            <div>
              <p className="text-white font-semibold text-sm mb-3">Core Services</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-gold transition-colors">Garden West Property Sales</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Garden East Rental Portfolios</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Commercial Shops &amp; Showrooms</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Full Flat &amp; Portion Renovation</a></li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold text-sm mb-3">Quick Navigation</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-gold transition-colors">Home Search</a></li>
                <li><a href="#properties" className="hover:text-gold transition-colors">Karachi Property Listings</a></li>
                <li><a href="#areas" className="hover:text-gold transition-colors">Garden West &amp; East Areas</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact Our Consultants</a></li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold text-sm mb-3">Karachi Property Alerts</p>
              <p className="text-sm text-gray-400 mb-3">Get instant alerts for new Garden West &amp; East deals.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email / phone"
                  className="bg-navy border border-white/20 rounded-l-lg px-3 py-2 text-xs text-white placeholder:text-gray-400 focus:outline-none w-full"
                />
                <button className="bg-gold text-navy-dark text-xs font-bold px-3.5 rounded-r-lg hover:brightness-95 transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Madina Real Estate Marketing Karachi. All rights reserved.</p>
            <p>Garden West &middot; Garden East &middot; Britto Road &middot; Nishtar Road &middot; Karachi</p>
          </div>
        </div>
      </footer>
    </>
  )
}
