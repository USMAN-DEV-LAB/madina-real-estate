const areas = [
  {
    name: 'Garden West',
    listings: '120+ Listings',
    img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Fowara Chowk',
    listings: '85+ Listings',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Susan Road',
    listings: '40+ Listings',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'D Ground',
    listings: '55+ Listings',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Jaranwala Road',
    listings: '30+ Listings',
    img: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=600&q=80',
  },
]

export default function PopularAreas() {
  return (
    <section id="areas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
            Popular Areas
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Most sought-after localities around Garden West &amp; Fowara Chowk.
          </p>
        </div>
        <a href="#properties" className="text-sm font-medium text-navy hover:text-gold transition-colors duration-200 flex items-center gap-1">
          View All Areas
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {areas.map((area) => (
          <a
            key={area.name}
            href="#properties"
            className="group relative rounded-xl overflow-hidden h-40 md:h-48 block shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={area.img}
              alt={area.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-white font-heading font-semibold text-sm md:text-base">
                {area.name}
              </p>
              <p className="text-gray-300 text-xs">{area.listings}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
