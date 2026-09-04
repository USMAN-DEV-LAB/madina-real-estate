import { useState, useMemo } from 'react'
import { PROPERTIES_DATA, AREAS, PROPERTY_TYPES, PRICE_RANGES } from '../data/properties'
import PropertyGallery from './PropertyGallery'

export default function PropertiesForSale({ onNavigateHome, onSelectProperty }) {
  // Filters state specifically for Sale page
  const [dealType, setDealType] = useState('Buy') // 'Buy' (For Sale) | 'Rent' (For Rent) | 'All'
  const [selectedType, setSelectedType] = useState('Any Type')
  const [selectedCity, setSelectedCity] = useState('Karachi')
  const [selectedArea, setSelectedArea] = useState('All Areas')
  const [priceRange, setPriceRange] = useState('Any Price')
  const [selectedBeds, setSelectedBeds] = useState('All')
  const [savedFavorites, setSavedFavorites] = useState([])
  const [selectedProperty, setSelectedProperty] = useState(null)

  const toggleFavorite = (id, e) => {
    e.stopPropagation()
    setSavedFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Filter listings based on controls
  const saleListings = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => {
      // 1. Deal Type (Default Buy for sale page)
      if (dealType !== 'All') {
        if (p.purpose.toLowerCase() !== dealType.toLowerCase()) return false
      }

      // 2. Property Type
      if (selectedType !== 'Any Type') {
        if (p.propertyType !== selectedType) return false
      }

      // 3. City
      if (selectedCity !== 'Any City') {
        if (p.city.toLowerCase() !== selectedCity.toLowerCase()) return false
      }

      // 4. Area
      if (selectedArea !== 'All Areas') {
        const matchesArea =
          p.area.toLowerCase().includes(selectedArea.toLowerCase()) ||
          p.location.toLowerCase().includes(selectedArea.toLowerCase()) ||
          p.subLocality.toLowerCase().includes(selectedArea.toLowerCase())
        if (!matchesArea) return false
      }

      // 5. Price Range
      if (priceRange !== 'Any Price') {
        const rangeObj = PRICE_RANGES.find((r) => r.label === priceRange)
        if (rangeObj) {
          if (p.priceInLakhs < rangeObj.min || p.priceInLakhs > rangeObj.max) {
            return false
          }
        }
      }

      // 6. Beds
      if (selectedBeds !== 'All') {
        if (selectedBeds === '4+') {
          if (!p.beds || p.beds < 4) return false
        } else {
          if (p.beds !== parseInt(selectedBeds, 10)) return false
        }
      }

      return true
    })
  }, [dealType, selectedType, selectedCity, selectedArea, priceRange, selectedBeds])

  const clearFilters = () => {
    setDealType('Buy')
    setSelectedType('Any Type')
    setSelectedCity('Karachi')
    setSelectedArea('All Areas')
    setPriceRange('Any Price')
    setSelectedBeds('All')
  }

  const isFiltered =
    dealType !== 'Buy' ||
    selectedType !== 'Any Type' ||
    selectedArea !== 'All Areas' ||
    priceRange !== 'Any Price' ||
    selectedBeds !== 'All'

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16">
      {/* 1. Top Filter Strip (Identical to ilaaqa.com) */}
      <div className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 items-center">
            {/* Deal Type (For Sale / For Rent) */}
            <div className="relative">
              <select
                value={dealType}
                onChange={(e) => setDealType(e.target.value)}
                className="w-full bg-[#f4f5f7] hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold text-gray-800 outline-none cursor-pointer focus:border-gold"
              >
                <option value="Buy">For Sale</option>
                <option value="Rent">For Rent</option>
                <option value="All">All Deals</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#f4f5f7] hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold text-gray-800 outline-none cursor-pointer focus:border-gold"
              >
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-[#f4f5f7] hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold text-gray-800 outline-none cursor-pointer focus:border-gold"
              >
                <option value="Karachi">Karachi</option>
                <option value="Any City">Any City</option>
              </select>
            </div>

            {/* Location */}
            <div className="relative">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full bg-[#f4f5f7] hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold text-gray-800 outline-none cursor-pointer focus:border-gold truncate"
              >
                {AREAS.map((a) => (
                  <option key={a} value={a}>
                    📍 {a}
                  </option>
                ))}
              </select>
            </div>

            {/* Price & Area */}
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-[#f4f5f7] hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold text-gray-800 outline-none cursor-pointer focus:border-gold truncate"
              >
                {PRICE_RANGES.map((pr) => (
                  <option key={pr.label} value={pr.label}>
                    {pr.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Beds */}
            <div className="relative flex items-center gap-2">
              <select
                value={selectedBeds}
                onChange={(e) => setSelectedBeds(e.target.value)}
                className="w-full bg-[#f4f5f7] hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold text-gray-800 outline-none cursor-pointer focus:border-gold"
              >
                <option value="All">Beds: All</option>
                <option value="1">1 Bed</option>
                <option value="2">2 Beds</option>
                <option value="3">3 Beds</option>
                <option value="4+">4+ Beds</option>
              </select>

              {isFiltered && (
                <button
                  type="button"
                  onClick={clearFilters}
                  title="Reset filters"
                  className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 p-2 rounded-lg text-xs font-bold shrink-0 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Page Content & Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-3">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-gold transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>&gt;</span>
          <span className="text-gray-600">Pakistan</span>
          <span>&gt;</span>
          <span className="text-gray-600">Karachi</span>
          <span>&gt;</span>
          <span className="text-navy font-semibold">Properties for Sale</span>
        </nav>

        {/* Page Title & Count (Matching ilaaqa.com header) */}
        <div className="mb-6">
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F2A47]">
            Find Properties for Sale in {selectedArea !== 'All Areas' ? `${selectedArea}, Karachi` : 'Pakistan'}
          </h1>
          <p className="text-sm font-semibold text-gray-500 mt-1">
            <strong className="text-navy font-bold">{saleListings.length}</strong> Properties Found
          </p>
        </div>

        {/* 3. Horizontal Properties List (ilaaqa.com card layout) */}
        {saleListings.length > 0 ? (
          <div className="space-y-5">
            {saleListings.map((p) => {
              const isFav = savedFavorites.includes(p.id)
              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row group"
                >
                  {/* Left: Big Property Image with Overlay Banner */}
                  <div className="relative md:w-80 lg:w-96 h-60 md:h-auto shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                      <span className="bg-[#EAB308] text-navy-dark text-[11px] font-black px-2.5 py-0.5 rounded shadow-sm tracking-wider uppercase">
                        {p.badge || 'HOT'}
                      </span>
                      <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <circle cx="12" cy="13" r="3" strokeWidth={2} />
                        </svg>
                        1
                      </span>
                    </div>

                    {/* Dark Gradient Overlay with Title on Image (ilaaqa style) */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3.5 text-center">
                      <div className="inline-block bg-black/40 backdrop-blur-xs px-3 py-1 rounded">
                        <p className="text-white font-sans font-bold text-sm tracking-wide drop-shadow">
                          {p.areaTitle || p.area}
                        </p>
                        <p className="text-gold font-sans font-bold text-xs tracking-wider uppercase mt-0.5">
                          {p.size} {p.propertyType} For Sale
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Property Details & Meta */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Price Header & Favorite Heart Icon */}
                      <div className="flex items-center justify-between">
                        <h2 className="font-sans font-extrabold text-2xl text-[#0F2A47] tracking-tight">
                          PKR {p.priceLakhText || p.price}
                        </h2>

                        <button
                          type="button"
                          onClick={(e) => toggleFavorite(p.id, e)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
                          aria-label="Save property"
                        >
                          <svg
                            className={`w-6 h-6 transition-transform active:scale-125 ${
                              isFav ? 'text-red-500 fill-current' : 'fill-none stroke-current'
                            }`}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.8}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Pill Tag */}
                      <div className="mt-1">
                        <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                          {p.purpose === 'Buy' ? 'FOR SALE' : 'FOR RENT'}
                        </span>
                      </div>

                      {/* Main Title Link */}
                      <h4
                        onClick={() => setSelectedProperty(p)}
                        className="font-sans font-bold text-base sm:text-lg text-[#16345A] hover:text-gold mt-2 cursor-pointer transition-colors leading-snug"
                      >
                        {p.title} - (ID-{p.id})
                      </h4>

                      {/* Location with Pin */}
                      <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {p.location}
                      </p>

                      {/* Specs Row (Beds, Baths, Area) */}
                      <div className="flex items-center gap-6 mt-3.5 text-xs text-gray-800 font-bold flex-wrap">
                        {p.beds && (
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M5 10V6a2 2 0 012-2h10a2 2 0 012 2v4" />
                            </svg>
                            <span className="text-base font-extrabold">{p.beds}</span>
                            <span className="text-gray-500 font-medium text-[11px]">BEDS</span>
                          </span>
                        )}

                        {p.baths && (
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10V6a3 3 0 016 0v1M4 10h16v2a6 6 0 01-6 6H10a6 6 0 01-6-6v-2z" />
                            </svg>
                            <span className="text-base font-extrabold">{p.baths}</span>
                            <span className="text-gray-500 font-medium text-[11px]">BATHS</span>
                          </span>
                        )}

                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M4 16v4h4M20 8V4h-4M20 16v4h-4" />
                          </svg>
                          <span className="text-base font-extrabold">{p.size}</span>
                          <span className="text-gray-500 font-medium text-[11px]">AREA</span>
                        </span>
                      </div>

                      {/* Possession & Highlights Note */}
                      <p className="text-xs text-gray-500 mt-2.5 line-clamp-1 italic">
                        {p.possessionNote || 'possession available all dues cleared, sweet water connection'}
                      </p>
                    </div>

                    {/* Bottom Agent Bar & Actions */}
                    <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-gray-100 flex-wrap gap-3">
                      {/* Agent Info */}
                      <div className="flex items-center gap-2.5">
                        <img
                          src={
                            p.agent?.avatar ||
                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
                          }
                          alt={p.agent?.name || 'Agent'}
                          className="w-9 h-9 rounded-full object-cover border-2 border-gold/40 shadow-xs"
                        />
                        <div>
                          <p className="text-xs font-bold text-[#0F2A47]">{p.agent?.name || 'Muhammad Hassan'}</p>
                          <p className="text-[10px] text-gray-400 font-medium">
                            {p.agent?.refreshed || 'Refreshed 1 hour ago'}
                          </p>
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedProperty(p)}
                          className="bg-gray-100 hover:bg-gray-200 text-navy font-bold text-xs px-4 py-2 rounded-lg transition-all cursor-pointer"
                        >
                          View Details
                        </button>

                        <a
                          href={`tel:+923000000000`}
                          className="bg-navy hover:bg-navy-dark text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-xs"
                        >
                          <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call
                        </a>

                        <a
                          href={`https://wa.me/923000000000?text=${encodeURIComponent(
                            `Assalam o Alaikum, I am interested in property [${p.id}]: ${p.title} (${p.price}) located at ${p.location}. Please share terms and visit schedule.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-brandgreen hover:bg-brandgreen-dark text-white font-bold text-xs px-4 py-2 rounded-lg transition-all shadow-xs flex items-center gap-1.5"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center max-w-lg mx-auto mt-8">
            <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-navy">No Properties Match Your Filters</h3>
            <p className="text-xs text-gray-500 mt-1">
              Try choosing another area or clearing some filter options.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 bg-gold text-navy-dark font-bold text-xs px-5 py-2 rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-navy-dark/80 text-white flex items-center justify-center hover:bg-navy transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Daraz-Style Media Gallery (YouTube Video Embed 1st priority + Image Strip) */}
            <div className="p-4 sm:p-5 pb-0">
              <PropertyGallery
                videoUrl={selectedProperty.videoUrl}
                images={selectedProperty.images || [selectedProperty.img]}
                title={selectedProperty.title}
                badge={selectedProperty.badge || 'FOR SALE'}
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-1">
                <span className="text-gold uppercase tracking-wider">{selectedProperty.propertyType}</span>
                <span>Ref: {selectedProperty.id}</span>
              </div>

              <h2 className="font-heading font-semibold text-xl md:text-2xl text-navy">
                {selectedProperty.title}
              </h2>

              <p className="text-sm text-gray-600 mt-2 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {selectedProperty.location}
              </p>

              <div className="grid grid-cols-3 gap-3 my-5 bg-gray-50 p-4 rounded-xl text-center border border-gray-200">
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-medium">Bedrooms</p>
                  <p className="font-heading font-semibold text-base text-navy mt-0.5">
                    {selectedProperty.beds || 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-medium">Bathrooms</p>
                  <p className="font-heading font-semibold text-base text-navy mt-0.5">
                    {selectedProperty.baths || 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-medium">Covered Area</p>
                  <p className="font-heading font-semibold text-base text-navy mt-0.5">
                    {selectedProperty.size}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-navy mb-1.5">Overview</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedProperty.description}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">Key Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProperty.tags.map((t) => (
                    <span key={t} className="bg-navy/5 text-navy border border-navy/10 text-xs px-2.5 py-1 rounded-md font-medium">
                      ✓ {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 grid sm:grid-cols-2 gap-3">
                <a
                  href={`tel:+923000000000`}
                  className="bg-navy hover:bg-navy-dark text-white font-semibold text-sm py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Consultant
                </a>
                <a
                  href={`https://wa.me/923000000000?text=${encodeURIComponent(
                    `Assalam o Alaikum, I am interested in property [${selectedProperty.id}]: ${selectedProperty.title} (${selectedProperty.price}) located at ${selectedProperty.location}. Please share terms and visit schedule.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brandgreen hover:bg-brandgreen-dark text-white font-semibold text-sm py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
                >
                  Schedule Visit on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
