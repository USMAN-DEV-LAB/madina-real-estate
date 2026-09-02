export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
              Aapki Property, Hamari Zimmedari
            </h2>
            <p className="text-sm text-gray-500 mt-4 max-w-md leading-relaxed">
              Sale, purchase, rent ya renovation &mdash; kisi bhi zaroorat ke liye
              hamari team se raabta karein.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-gold">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Garden West, Near Fowara Chowk, Faisalabad
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-gold">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                +92 300 0000000
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-gold">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                info@madinarealestate.com
              </div>
            </div>
          </div>

          <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-600">Naam</label>
              <input
                type="text"
                placeholder="Apka naam"
                className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">Phone Number</label>
              <input
                type="tel"
                placeholder="03XX-XXXXXXX"
                className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">Zaroorat</label>
              <select className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all">
                <option>Property Sale Karni Hai</option>
                <option>Property Kharidni Hai</option>
                <option>Rent Par Lena / Dena Hai</option>
                <option>Renovation Karwani Hai</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">Message</label>
              <textarea
                rows={3}
                placeholder="Apni zaroorat ke baray mein likhein..."
                className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
              />
            </div>
            <button
              type="button"
              className="w-full bg-navy text-white font-medium text-sm py-3 rounded-lg hover:bg-navy-dark hover:shadow-md transition-all duration-200 active:scale-95"
            >
              Message Bhejein
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-navy-dark text-gray-300 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 40 40" className="w-8 h-8 text-gold" fill="currentColor">
                  <path d="M4 34V18l6-6 6 6v16H4z" opacity="0.85" />
                  <path d="M16 34V10l4-4 4 4v24h-8z" />
                  <path d="M28 34V18l4-4 4 4v16h-8z" opacity="0.85" />
                </svg>
                <p className="font-heading font-semibold text-white">Madina Real Estate</p>
              </div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Trusted local experts for sale, purchase, rent &amp; renovation
                in Garden West and Fowara Chowk.
              </p>
            </div>

            <div>
              <p className="text-white font-medium text-sm mb-3">Services</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-gold">Sale</a></li>
                <li><a href="#services" className="hover:text-gold">Purchase</a></li>
                <li><a href="#services" className="hover:text-gold">Rent</a></li>
                <li><a href="#services" className="hover:text-gold">Renovation</a></li>
              </ul>
            </div>

            <div>
              <p className="text-white font-medium text-sm mb-3">Explore</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#properties" className="hover:text-gold">Properties</a></li>
                <li><a href="#areas" className="hover:text-gold">Areas</a></li>
                <li><a href="#contact" className="hover:text-gold">Contact</a></li>
              </ul>
            </div>

            <div>
              <p className="text-white font-medium text-sm mb-3">Newsletter</p>
              <p className="text-sm text-gray-400 mb-3">Stay updated with the latest listings.</p>
              <div className="flex">
                <input
                  placeholder="Your email"
                  className="bg-navy border border-white/10 rounded-l-lg px-3 py-2 text-xs text-white placeholder:text-gray-500 focus:outline-none w-full"
                />
                <button className="bg-gold text-navy-dark text-xs font-semibold px-3 rounded-r-lg">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p>&copy; {new Date().getFullYear()} Madina Real Estate Marketing. All rights reserved.</p>
            <p>Garden West &middot; Fowara Chowk, Faisalabad</p>
          </div>
        </div>
      </footer>
    </>
  )
}
