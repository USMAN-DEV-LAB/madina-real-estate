import { useState } from 'react'

const links = ['Home', 'Buy', 'Rent', 'Renovation', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <svg viewBox="0 0 40 40" className="w-9 h-9 text-gold" fill="currentColor">
              <path d="M4 34V18l6-6 6 6v16H4z" opacity="0.85" />
              <path d="M16 34V10l4-4 4 4v24h-8z" />
              <path d="M28 34V18l4-4 4 4v16h-8z" opacity="0.85" />
              <circle cx="20" cy="8" r="2" />
            </svg>
            <div className="leading-none">
              <p className="font-heading font-semibold text-gold text-lg italic">Madina</p>
              <p className="text-[10px] tracking-widest text-navy font-bold -mt-0.5">
                REAL ESTATE MKT.
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7 shrink-0">
            {links.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                  i === 0
                    ? 'text-navy border-gold'
                    : 'text-gray-600 border-transparent hover:text-navy'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Search box */}
          <div className="hidden md:flex items-center flex-1 max-w-xs bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              placeholder="Search Area or Property ID"
              className="bg-transparent outline-none text-sm px-2 w-full placeholder:text-gray-400"
            />
          </div>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a href="tel:+923000000000" className="text-sm font-medium text-navy hover:text-gold">
              Login
            </a>
            <a
              href="#contact"
              className="bg-gold text-navy-dark text-sm font-semibold px-5 py-2.5 rounded-lg hover:brightness-95 transition-colors"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-navy shrink-0"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-navy"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-gold text-navy-dark text-sm font-semibold px-5 py-2.5 rounded-lg"
          >
            Get Free Quote
          </a>
        </div>
      )}
    </header>
  )
}
