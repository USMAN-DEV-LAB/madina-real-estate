import { useState } from 'react'
import { AREAS, PROPERTY_TYPES, PRICE_RANGES } from '../data/properties'

const tabs = ['Buy', 'Rent', 'Renovation', 'All']

const quickChips = [
  { label: '#Garden West Houses', area: 'Garden West', type: 'House / Portion', tag: 'Garden West Houses' },
  { label: '#Garden East Apartments', area: 'Garden East', type: 'Apartment', tag: 'Garden East Apartments' },
  { label: '#Shops in Garden West', area: 'Garden West', type: 'Commercial Shop', tag: 'Shops in Garden West' },
  { label: '#Britto Road Properties', area: 'Britto Road (Garden East)', type: 'Any Type', tag: 'Britto Road (Garden East)' },
  { label: '#Nishtar Road Shops', area: 'Nishtar Road (Garden West)', type: 'Any Type', tag: 'Nishtar Road' },
]

export default function Hero({ filters, setFilters, onSearch }) {
  const [city] = useState('Karachi')

  const handleTabClick = (tab) => {
    setFilters((prev) => ({ ...prev, purpose: tab }))
  }

  const handleAreaChange = (e) => {
    setFilters((prev) => ({ ...prev, area: e.target.value, selectedTag: '' }))
  }

  const handleSearchInputChange = (e) => {
    setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))
  }

  const handleTypeChange = (e) => {
    setFilters((prev) => ({ ...prev, propertyType: e.target.value }))
  }

  const handlePriceChange = (e) => {
    setFilters((prev) => ({ ...prev, priceRange: e.target.value }))
  }

  const handleBedsChange = (e) => {
    setFilters((prev) => ({ ...prev, beds: e.target.value }))
  }

  const handleChipClick = (chip) => {
    setFilters((prev) => ({
      ...prev,
      area: chip.area,
      propertyType: chip.type,
      selectedTag: chip.tag,
      searchQuery: ''
    }))
    if (onSearch) {
      onSearch()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch()
    }
  }

  return (
    <section id="home" className="relative overflow-hidden min-h-[620px] md:min-h-[660px] flex flex-col items-center justify-start gap-4 pt-8 md:pt-12 pb-10 md:pb-14 bg-navy">
      {/* Background Image */}
      <img
        src="/hero-bg.png"
        alt="Madina Real Estate Karachi"
        className="absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom origin-center"
        onError={(e) => {
          if (!e.currentTarget.src.endsWith('.jpeg')) {
            e.currentTarget.src = '/hero-bg.jpeg'
          } else if (!e.currentTarget.src.endsWith('.jpg')) {
            e.currentTarget.src = '/hero-bg.jpg'
          }
        }}
      />

      {/* 1. Header Typography */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 drop-shadow-md mt-2">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-gold/30 px-3.5 py-1 rounded-full text-gold text-xs font-semibold mb-3 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-brandgreen animate-pulse"></span>
          Karachi Prime Localities: Garden West &amp; Garden East
        </div>
        <h1 className="font-heading font-semibold text-white text-2xl sm:text-4xl md:text-5xl leading-tight">
          Find Prime Properties in <span className="text-gold">Karachi</span>
        </h1>
        <p className="text-gray-200 text-xs sm:text-base mt-2 mb-3 px-2 max-w-2xl mx-auto drop-shadow-sm font-medium">
          Specialized in verified Apartments, Houses, Portions, and Commercial Shops across Garden West, Garden East, Britto Road &amp; Nishtar Road.
        </p>
      </div>

      {/* 2. Responsive Search Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 animate-fade-in-up">
        <form onSubmit={handleSubmit} className="rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30 hover:border-gold/50 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 ring-1 ring-black/20">
          
          {/* Top Tier: Tabs + City + Area Dropdown + Location Search + FIND */}
          <div className="bg-navy-dark/90 backdrop-blur-lg px-4 sm:px-6 pt-4 pb-5">
            {/* Purpose Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tabs.map((tab) => (
                <button
                  type="button"
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 sm:px-5 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
                    filters.purpose === tab
                      ? 'bg-gold text-navy-dark shadow-md scale-105 ring-2 ring-gold/40'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab === 'All' ? 'All Listings' : tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 items-end">
              {/* City (Karachi Fixed) */}
              <div className="sm:col-span-1 md:col-span-3">
                <label className="text-[10px] tracking-wide text-gold uppercase font-semibold block mb-1">
                  City
                </label>
                <div className="flex items-center gap-1.5 bg-navy/80 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2.5 transition-all focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm text-white font-semibold">Karachi</span>
                  <span className="text-[10px] text-gray-400 ml-auto bg-white/10 px-1.5 py-0.5 rounded">Sindh</span>
                </div>
              </div>

              {/* Area Dropdown (Garden West & East) */}
              <div className="sm:col-span-1 md:col-span-4">
                <label className="text-[10px] tracking-wide text-gold uppercase font-semibold block mb-1">
                  Area / Locality
                </label>
                <div className="flex items-center gap-1.5 bg-navy/80 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2.5 transition-all focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <select 
                    value={filters.area}
                    onChange={handleAreaChange}
                    className="bg-transparent text-xs sm:text-sm text-white font-medium w-full outline-none cursor-pointer"
                  >
                    {AREAS.map((area) => (
                      <option key={area} value={area} className="text-black font-medium">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Keyword / Landmark Search */}
              <div className="sm:col-span-2 md:col-span-3">
                <label className="text-[10px] tracking-wide text-gold uppercase font-semibold block mb-1">
                  Landmark / Search
                </label>
                <div className="flex items-center gap-1.5 bg-navy/80 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2.5 transition-all focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={filters.searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="e.g. Britto, Nishtar..."
                    className="bg-transparent outline-none text-xs sm:text-sm text-white placeholder:text-gray-300 w-full"
                  />
                  {filters.searchQuery && (
                    <button
                      type="button"
                      onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                      className="text-gray-400 hover:text-white text-xs px-1"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* FIND Button */}
              <div className="sm:col-span-2 md:col-span-2">
                <button 
                  type="submit"
                  className="w-full group bg-brandgreen text-white font-bold rounded-lg px-4 py-2.5 text-xs sm:text-sm hover:bg-brandgreen-dark transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-brandgreen/40 flex items-center justify-center gap-1.5 cursor-pointer h-[42px]"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-12 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>FIND</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Tier: Light Filter Strip */}
          <div className="bg-white/95 backdrop-blur-lg px-4 sm:px-6 py-3 sm:py-3.5 border-t border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:divide-x md:divide-gray-200">
              {/* Property Type Filter */}
              <div className="hover:bg-gray-50/80 p-1.5 rounded-md transition-colors">
                <p className="text-[10px] tracking-wide text-gray-500 uppercase font-semibold flex items-center gap-1">
                  <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2l7 6v10H3V8l7-6z" />
                  </svg>
                  Property Type
                </p>
                <select 
                  value={filters.propertyType}
                  onChange={handleTypeChange}
                  className="mt-1 text-xs sm:text-sm text-navy font-semibold w-full outline-none bg-transparent cursor-pointer"
                >
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="md:pl-4 hover:bg-gray-50/80 p-1.5 rounded-md transition-colors">
                <p className="text-[10px] tracking-wide text-gray-500 uppercase font-semibold flex items-center gap-1">
                  <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Price Range
                </p>
                <select 
                  value={filters.priceRange}
                  onChange={handlePriceChange}
                  className="mt-1 text-xs sm:text-sm text-navy font-semibold w-full outline-none bg-transparent cursor-pointer"
                >
                  {PRICE_RANGES.map((pr) => (
                    <option key={pr.label} value={pr.label}>
                      {pr.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms Filter */}
              <div className="md:pl-4 hover:bg-gray-50/80 p-1.5 rounded-md transition-colors">
                <p className="text-[10px] tracking-wide text-gray-500 uppercase font-semibold flex items-center gap-1">
                  <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Bedrooms
                </p>
                <select 
                  value={filters.beds}
                  onChange={handleBedsChange}
                  className="mt-1 text-xs sm:text-sm text-navy font-semibold w-full outline-none bg-transparent cursor-pointer"
                >
                  <option value="All">All Bedrooms</option>
                  <option value="1">1 Bed</option>
                  <option value="2">2 Beds</option>
                  <option value="3">3 Beds</option>
                  <option value="4+">4+ Beds</option>
                </select>
              </div>
            </div>
          </div>
        </form>

        {/* 3. Popular Karachi Quick Filter Chips */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4 text-xs">
          <span className="text-gray-300 font-semibold uppercase tracking-wider text-[11px] shrink-0">
            Quick Karachi Filters:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickChips.map((chip) => {
              const isActive = filters.selectedTag === chip.tag
              return (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => handleChipClick(chip)}
                  className={`px-3 py-1 rounded-full border text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gold text-navy-dark border-gold font-bold shadow-md scale-105'
                      : 'bg-navy-dark/90 text-gray-200 border-white/20 hover:border-gold hover:text-gold'
                  }`}
                >
                  {chip.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
