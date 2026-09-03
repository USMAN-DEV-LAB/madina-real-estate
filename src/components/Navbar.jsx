import { useState } from 'react'

const navItems = [
  { name: 'Home', view: 'home', filterPurpose: 'All' },
  { name: 'Buy', view: 'buy', filterPurpose: 'Buy' },
  { name: 'Rent', view: 'rent', filterPurpose: 'Rent' },
  { name: 'Agencies', view: 'home', filterPurpose: null, scrollTo: 'team' },
  { name: 'Society Maps', view: 'home', filterPurpose: null, scrollTo: 'areas' },
  { name: 'Tools', view: 'home', filterPurpose: null, scrollTo: 'services' },
  { name: 'Blogs', view: 'home', filterPurpose: null, scrollTo: 'contact' },
]

export default function Navbar({ currentView, setCurrentView, onSearchNavigate, setFilters }) {
  const [open, setOpen] = useState(false)
  const [navSearch, setNavSearch] = useState('')
  const [modalType, setModalType] = useState(null) // 'login' | 'post' | null

  const handleItemClick = (item, e) => {
    e?.preventDefault()
    
    // Switch view
    if (item.view && setCurrentView) {
      setCurrentView(item.view)
    }

    // Set filter purpose if needed
    if (item.filterPurpose && setFilters) {
      setFilters((prev) => ({
        ...prev,
        purpose: item.filterPurpose
      }))
    }

    // Scroll to section if specified
    if (item.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(item.scrollTo)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    setOpen(false)
  }

  const handleNavSearchSubmit = (e) => {
    e.preventDefault()
    if (setFilters) {
      setFilters((prev) => ({
        ...prev,
        searchQuery: navSearch
      }))
    }
    if (currentView !== 'home' && setCurrentView) {
      setCurrentView('home')
    }
    if (onSearchNavigate) {
      onSearchNavigate()
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                if (setCurrentView) setCurrentView('home')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-2 shrink-0 group cursor-pointer"
            >
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-gold group-hover:scale-105 transition-transform" fill="currentColor">
                <path d="M4 34V18l6-6 6 6v16H4z" opacity="0.85" />
                <path d="M16 34V10l4-4 4 4v24h-8z" />
                <path d="M28 34V18l4-4 4 4v16h-8z" opacity="0.85" />
                <circle cx="20" cy="8" r="2" />
              </svg>
              <div className="leading-none hidden sm:block">
                <p className="font-heading font-bold text-gold text-lg italic tracking-tight">Madina</p>
                <p className="text-[8px] tracking-widest text-navy font-extrabold uppercase -mt-0.5">
                  REAL ESTATE KARACHI
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 shrink-0">
              {navItems.map((item) => {
                const isActive = (item.view === currentView && (
                  (item.name === 'Home' && currentView === 'home') ||
                  (item.name === 'Buy' && currentView === 'buy') ||
                  (item.name === 'Rent' && currentView === 'rent')
                ))
                return (
                  <a
                    key={item.name}
                    href={`#${item.view}`}
                    onClick={(e) => handleItemClick(item, e)}
                    className={`text-sm font-semibold transition-all relative py-1 cursor-pointer ${
                      isActive
                        ? 'text-gold font-bold'
                        : 'text-navy hover:text-gold'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gold rounded-full" />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Responsive Fallback for Lg screens */}
            <nav className="hidden lg:flex xl:hidden items-center gap-4 shrink-0">
              {navItems.slice(0, 5).map((item) => {
                const isActive = (item.view === currentView && (
                  (item.name === 'Home' && currentView === 'home') ||
                  (item.name === 'Buy' && currentView === 'buy') ||
                  (item.name === 'Rent' && currentView === 'rent')
                ))
                return (
                  <a
                    key={item.name}
                    href={`#${item.view}`}
                    onClick={(e) => handleItemClick(item, e)}
                    className={`text-xs font-semibold transition-all relative py-1 cursor-pointer ${
                      isActive
                        ? 'text-gold font-bold'
                        : 'text-navy hover:text-gold'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Right Side: Search Box + Login + Post Property */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
              {/* Search ID, City or Project Input */}
              <form onSubmit={handleNavSearchSubmit} className="flex items-center bg-gray-100/90 hover:bg-gray-100 border border-gray-200/80 rounded-lg px-3 py-2 w-48 lg:w-60 focus-within:border-gold/60 focus-within:bg-white focus-within:ring-2 focus-within:ring-gold/20 transition-all">
                <svg className="w-4 h-4 text-gray-400 shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={navSearch}
                  onChange={(e) => setNavSearch(e.target.value)}
                  placeholder="Search ID, City or Project"
                  className="bg-transparent outline-none text-xs text-gray-800 placeholder:text-gray-400 w-full"
                />
              </form>

              {/* Login Link */}
              <button
                type="button"
                onClick={() => setModalType('login')}
                className="text-xs lg:text-sm font-semibold text-navy hover:text-gold px-2 py-1 transition-colors cursor-pointer"
              >
                Login
              </button>

              {/* Post Property Button */}
              <button
                type="button"
                onClick={() => setModalType('post')}
                className="bg-gold hover:brightness-95 text-navy-dark text-xs lg:text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Post Property
              </button>
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setModalType('post')}
                className="bg-gold text-navy-dark text-xs font-bold px-3 py-1.5 rounded-md"
              >
                Post Property
              </button>
              <button
                className="p-2 text-navy cursor-pointer"
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
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 animate-fade-in-up">
            <form onSubmit={handleNavSearchSubmit} className="flex items-center bg-gray-100 rounded-lg px-3 py-2 border border-gray-200">
              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                placeholder="Search ID, City or Project"
                className="bg-transparent outline-none text-xs w-full text-gray-800"
              />
              <button type="submit" className="text-xs font-bold text-navy">
                Search
              </button>
            </form>

            <div className="grid grid-cols-2 gap-2 pt-2">
              {navItems.map((item) => {
                const isActive = (item.view === currentView && (
                  (item.name === 'Home' && currentView === 'home') ||
                  (item.name === 'Buy' && currentView === 'buy') ||
                  (item.name === 'Rent' && currentView === 'rent')
                ))
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={(e) => handleItemClick(item, e)}
                    className={`block text-left text-xs font-semibold py-2 px-3 rounded-md transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-gold/15 text-gold font-bold'
                        : 'text-navy hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setModalType('login')
                  setOpen(false)
                }}
                className="text-xs font-bold text-navy py-2 cursor-pointer"
              >
                Login to Portal
              </button>
              <button
                type="button"
                onClick={() => {
                  setModalType('post')
                  setOpen(false)
                }}
                className="bg-gold text-navy-dark text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
              >
                + Post Property
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Post Property Modal */}
      {modalType === 'post' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold cursor-pointer"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gold text-navy-dark font-bold flex items-center justify-center">
                +
              </span>
              <div>
                <h3 className="font-heading font-semibold text-xl text-navy">Post Your Property</h3>
                <p className="text-xs text-gray-500">List your property in Garden West or Garden East Karachi</p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Property inquiry submitted! Our Karachi representative will contact you for verification.')
                setModalType(null)
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-xs font-semibold text-gray-700">Property Title / Type</label>
                <input
                  required
                  placeholder="e.g. 3 Bed Apartment on Britto Road"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-gold outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">Purpose</label>
                  <select className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-gold outline-none cursor-pointer">
                    <option>For Sale</option>
                    <option>For Rent</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">Area / Locality</label>
                  <select className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-gold outline-none cursor-pointer">
                    <option>Garden West</option>
                    <option>Garden East</option>
                    <option>Britto Road</option>
                    <option>Nishtar Road</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">Expected Price / Rent (PKR)</label>
                  <input
                    required
                    placeholder="e.g. 1.5 Crore or 60,000/mo"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-gold outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">Phone / WhatsApp</label>
                  <input
                    required
                    type="tel"
                    placeholder="0300-XXXXXXX"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-gold outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-dark text-white font-bold text-xs py-3 rounded-lg mt-2 transition-all cursor-pointer shadow-md"
              >
                Submit Property for Free Listing
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {modalType === 'login' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold cursor-pointer"
            >
              ✕
            </button>
            <h3 className="font-heading font-semibold text-xl text-navy mb-1">User Login</h3>
            <p className="text-xs text-gray-500 mb-4">Access saved listings and property inquiries</p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Logged in successfully!')
                setModalType(null)
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-xs font-semibold text-gray-700">Email or Mobile</label>
                <input
                  required
                  type="text"
                  placeholder="name@example.com or 03XX-XXXXXXX"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-gold outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-700">Password</label>
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-gold outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold hover:brightness-95 text-navy-dark font-bold text-xs py-2.5 rounded-lg transition-all cursor-pointer shadow-sm mt-2"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
