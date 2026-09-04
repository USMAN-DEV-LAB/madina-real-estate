import { useState, useMemo } from 'react'
import { PROPERTIES_DATA, AREAS, PROPERTY_TYPES, PRICE_RANGES } from '../data/properties'
import PropertyGallery from './PropertyGallery'

export default function ExclusiveListings({ filters, setFilters }) {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [sortBy, setSortBy] = useState('default')
  const [activeAreaFilter, setActiveAreaFilter] = useState('All')

  // Filter logic
  const filteredListings = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => {
      // 1. Purpose filter
      if (filters.purpose && filters.purpose !== 'All') {
        if (p.purpose.toLowerCase() !== filters.purpose.toLowerCase()) {
          return false
        }
      }

      // 2. Area dropdown filter from Hero or Local filter
      const currentArea = activeAreaFilter !== 'All' ? activeAreaFilter : filters.area
      if (currentArea && currentArea !== 'All Areas' && currentArea !== 'All') {
        const matchesArea = 
          p.area.toLowerCase().includes(currentArea.toLowerCase()) ||
          p.subLocality.toLowerCase().includes(currentArea.toLowerCase()) ||
          p.location.toLowerCase().includes(currentArea.toLowerCase())
        if (!matchesArea) return false
      }

      // 3. Property type filter
      if (filters.propertyType && filters.propertyType !== 'Any Type') {
        if (p.propertyType !== filters.propertyType) {
          return false
        }
      }

      // 4. Keyword / Search Query
      if (filters.searchQuery && filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase().trim()
        const matchTitle = p.title.toLowerCase().includes(query)
        const matchLoc = p.location.toLowerCase().includes(query)
        const matchDesc = p.description.toLowerCase().includes(query)
        const matchTags = p.tags.some((t) => t.toLowerCase().includes(query))
        if (!matchTitle && !matchLoc && !matchDesc && !matchTags) {
          return false
        }
      }

      // 5. Selected Tag / Chip filter
      if (filters.selectedTag && filters.selectedTag !== '') {
        const tagQuery = filters.selectedTag.toLowerCase()
        const hasTag = p.tags.some((t) => t.toLowerCase().includes(tagQuery))
        const inTitle = p.title.toLowerCase().includes(tagQuery)
        const inLoc = p.location.toLowerCase().includes(tagQuery)
        if (!hasTag && !inTitle && !inLoc) {
          return false
        }
      }

      // 6. Price Range filter
      if (filters.priceRange && filters.priceRange !== 'Any Price' && filters.priceRange !== 'Any') {
        const rangeObj = PRICE_RANGES.find((r) => r.label === filters.priceRange)
        if (rangeObj) {
          if (p.priceInLakhs < rangeObj.min || p.priceInLakhs > rangeObj.max) {
            return false
          }
        }
      }

      // 7. Bedrooms filter
      if (filters.beds && filters.beds !== 'All') {
        if (filters.beds === '4+') {
          if (!p.beds || p.beds < 4) return false
        } else {
          if (p.beds !== parseInt(filters.beds, 10)) return false
        }
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceInLakhs - b.priceInLakhs
      if (sortBy === 'price-desc') return b.priceInLakhs - a.priceInLakhs
      return 0
    })
  }, [filters, activeAreaFilter, sortBy])

  const clearAllFilters = () => {
    setFilters({
      purpose: 'All',
      city: 'Karachi',
      area: 'All Areas',
      searchQuery: '',
      propertyType: 'Any Type',
      priceRange: 'Any Price',
      beds: 'All',
      selectedTag: ''
    })
    setActiveAreaFilter('All')
  }

  const isFiltered =
    filters.purpose !== 'All' ||
    filters.area !== 'All Areas' ||
    filters.propertyType !== 'Any Type' ||
    filters.searchQuery !== '' ||
    filters.selectedTag !== '' ||
    filters.beds !== 'All' ||
    activeAreaFilter !== 'All'

  return (
    <section id="properties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20">
      {/* Header & Section Title */}
      <div className="flex items-end justify-between flex-wrap gap-4 pb-6 border-b border-gray-200">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-1">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            Karachi Verified Portfolio
          </div>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl lg:text-4xl text-navy">
            Garden West &amp; Garden East Listings
          </h2>
          <p className="text-sm text-gray-500 mt-1 max-w-2xl">
            Authentic commercial shops, luxury apartments, and independent portions available for Sale and Rent in Karachi.
          </p>
        </div>

        {/* Sorting & Filter Reset */}
        <div className="flex items-center gap-3 flex-wrap">
          {isFiltered && (
            <button
              onClick={clearAllFilters}
              className="text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear All Filters
            </button>
          )}

          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium">
            <span className="text-gray-500">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-semibold text-navy outline-none cursor-pointer"
            >
              <option value="default">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Secondary Category / Quick Area Filter Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 mt-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {['All', 'Garden West', 'Garden East', 'Britto Road', 'Nishtar Road'].map((areaName) => {
            const isActive = activeAreaFilter === areaName
            return (
              <button
                key={areaName}
                onClick={() => {
                  setActiveAreaFilter(areaName)
                  if (areaName !== 'All') {
                    setFilters((prev) => ({ ...prev, area: areaName }))
                  } else {
                    setFilters((prev) => ({ ...prev, area: 'All Areas' }))
                  }
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-navy text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-navy'
                }`}
              >
                {areaName === 'All' ? '📍 All Localities' : `📍 ${areaName}`}
              </button>
            )
          })}
        </div>

        <p className="text-xs font-medium text-gray-500">
          Showing <span className="font-bold text-navy">{filteredListings.length}</span> properties in Karachi
        </p>
      </div>

      {/* Active Filter Tags Indicator */}
      {isFiltered && (
        <div className="flex items-center gap-2 flex-wrap mt-3 bg-gold/10 border border-gold/30 rounded-lg px-4 py-2 text-xs">
          <span className="font-semibold text-navy-dark">Active Filters:</span>
          {filters.purpose !== 'All' && (
            <span className="bg-white px-2 py-0.5 rounded border border-gold/40 text-navy font-medium">
              Purpose: {filters.purpose}
            </span>
          )}
          {filters.area !== 'All Areas' && (
            <span className="bg-white px-2 py-0.5 rounded border border-gold/40 text-navy font-medium">
              Area: {filters.area}
            </span>
          )}
          {filters.propertyType !== 'Any Type' && (
            <span className="bg-white px-2 py-0.5 rounded border border-gold/40 text-navy font-medium">
              Type: {filters.propertyType}
            </span>
          )}
          {filters.selectedTag && (
            <span className="bg-white px-2 py-0.5 rounded border border-gold/40 text-navy font-medium">
              Tag: {filters.selectedTag}
            </span>
          )}
          {filters.searchQuery && (
            <span className="bg-white px-2 py-0.5 rounded border border-gold/40 text-navy font-medium">
              Keyword: "{filters.searchQuery}"
            </span>
          )}
        </div>
      )}

      {/* Property Cards Grid */}
      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredListings.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="bg-navy-dark/95 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                      {p.purpose === 'Buy' ? 'For Sale' : 'For Rent'}
                    </span>
                    {p.badge && (
                      <span className={`${p.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded shadow`}>
                        {p.badge}
                      </span>
                    )}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-navy-dark font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-lg border border-gold/30">
                    {p.price}
                  </div>

                  {/* Property Specs Overlay Strip */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-dark via-navy-dark/90 to-transparent pt-6 pb-2.5 px-3 flex items-center justify-around text-white text-[11px] font-medium">
                    {p.beds && (
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M5 10V6a2 2 0 012-2h10a2 2 0 012 2v4" />
                        </svg>
                        {p.beds} Beds
                      </span>
                    )}
                    {p.baths && (
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10V6a3 3 0 016 0v1M4 10h16v2a6 6 0 01-6 6H10a6 6 0 01-6-6v-2z" />
                        </svg>
                        {p.baths} Baths
                      </span>
                    )}
                    <span className="flex items-center gap-1 font-semibold">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M4 16v4h4M20 8V4h-4M20 16v4h-4" />
                      </svg>
                      {p.size}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  {/* Property Type & ID */}
                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-semibold mb-1">
                    <span className="text-gold uppercase tracking-wider">{p.propertyType}</span>
                    <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">ID: {p.id}</span>
                  </div>

                  {/* Title */}
                  <h4 className="font-sans font-semibold text-sm md:text-base text-navy leading-snug line-clamp-2 group-hover:text-gold transition-colors duration-200">
                    {p.title}
                  </h4>

                  {/* Location with Pin */}
                  <p className="text-xs text-gray-600 mt-2 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">{p.location}</span>
                  </p>

                  {/* Custom Karachi Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                    {p.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 hover:bg-gold/20 text-gray-700 hover:text-navy text-[10px] font-medium px-2 py-0.5 rounded-full transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProperty(p)}
                  className="w-full bg-navy hover:bg-navy-dark text-white text-xs font-semibold py-2 rounded-lg transition-all duration-200 active:scale-95 text-center cursor-pointer"
                >
                  Details
                </button>
                <a
                  href={`https://wa.me/923000000000?text=${encodeURIComponent(`Assalam o Alaikum, I am interested in property [${p.id}]: ${p.title} located at ${p.location} (${p.price}). Please share more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brandgreen hover:bg-brandgreen-dark text-white text-xs font-semibold py-2 rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-1 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="mt-10 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-8 md:p-12 text-center max-w-xl mx-auto">
          <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="font-heading font-semibold text-lg md:text-xl text-navy">
            No matching properties found in Karachi
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Try adjusting your search criteria, switching between Garden West &amp; Garden East, or reset the filters to see all available listings.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-5 bg-gold text-navy-dark font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg shadow-md hover:brightness-95 transition-all cursor-pointer"
          >
            Show All Karachi Listings
          </button>
        </div>
      )}

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Close Button */}
            <button
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
                badge={selectedProperty.purpose === 'Buy' ? 'FOR SALE' : 'FOR RENT'}
              />
            </div>

            {/* Modal Content */}
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

              {/* Specs Grid */}
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

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-navy mb-1.5">Overview</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedProperty.description}
                </p>
              </div>

              {/* Tags */}
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

              {/* Direct Actions in Modal */}
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
                  href={`https://wa.me/923000000000?text=${encodeURIComponent(`Assalam o Alaikum, I am interested in property [${selectedProperty.id}]: ${selectedProperty.title} (${selectedProperty.price}) located at ${selectedProperty.location}. Please share visit schedule and terms.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brandgreen hover:bg-brandgreen-dark text-white font-semibold text-sm py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
                >
                  Schedule Site Visit on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
