const areas = [
  {
    name: 'Garden West',
    filterName: 'Garden West',
    listings: '150+ Properties',
    badge: 'High Demand',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Garden East',
    filterName: 'Garden East',
    listings: '120+ Properties',
    badge: 'Residential',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Soldier Bazaar',
    filterName: 'Soldier Bazaar',
    listings: '85+ Commercial & Flats',
    badge: 'Commercial Hub',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Britto Road',
    filterName: 'Britto Road (Garden East)',
    listings: '50+ Family Apartments',
    badge: 'Prime Location',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Nishtar Road',
    filterName: 'Nishtar Road (Garden West)',
    listings: '65+ Shops & Portions',
    badge: 'Main Arterial',
    img: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=600&q=80',
  },
]

export default function PopularAreas({ onSelectArea }) {
  return (
    <section id="areas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 scroll-mt-20">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-1">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            Karachi Neighborhoods
          </div>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
            Popular Areas in Karachi
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Most sought-after localities in Garden West, Garden East, Britto Road &amp; Nishtar Road.
          </p>
        </div>
        <a 
          href="#properties" 
          className="text-sm font-semibold text-navy hover:text-gold transition-colors duration-200 flex items-center gap-1 group"
        >
          View All Karachi Listings
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {areas.map((area) => (
          <button
            key={area.name}
            type="button"
            onClick={() => onSelectArea && onSelectArea(area.filterName)}
            className="group relative rounded-2xl overflow-hidden h-44 md:h-52 block shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer border border-gray-100"
          >
            <img
              src={area.img}
              alt={area.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
            
            <span className="absolute top-2.5 right-2.5 bg-gold/90 backdrop-blur-sm text-navy-dark text-[10px] font-bold px-2 py-0.5 rounded shadow">
              {area.badge}
            </span>

            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-white font-sans font-bold text-sm md:text-base group-hover:text-gold transition-colors">
                {area.name}
              </p>
              <p className="text-gray-300 text-xs mt-0.5">{area.listings}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
