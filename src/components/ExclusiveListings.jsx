const listings = [
  {
    title: '5 Marla House for sale in Garden West',
    location: 'Garden West, Faisalabad',
    price: 'PKR 2.1 Crore',
    tag: 'For Sale',
    beds: 3,
    baths: 4,
    area: '5 Marla',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: '10 Marla Corner Plot near Fowara Chowk',
    location: 'Fowara Chowk, Faisalabad',
    price: 'On Call',
    tag: 'For Sale',
    beds: null,
    baths: null,
    area: '10 Marla',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: '3 Bed Furnished Apartment',
    location: 'Garden West, Faisalabad',
    price: 'PKR 65,000/mo',
    tag: 'For Rent',
    beds: 3,
    baths: 2,
    area: '1400 sqft',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Commercial Shop on Main Road',
    location: 'Fowara Chowk, Faisalabad',
    price: 'PKR 45,000/mo',
    tag: 'For Rent',
    beds: null,
    baths: 1,
    area: '250 sqft',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: '1 Kanal House with Lawn',
    location: 'Garden West, Faisalabad',
    price: 'PKR 4.8 Crore',
    tag: 'For Sale',
    beds: 5,
    baths: 6,
    area: '1 Kanal',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  },
]

export default function ExclusiveListings() {
  return (
    <section id="properties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
            Exclusive Listings
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Verified sale &amp; rent properties in Garden West and Fowara Chowk.
          </p>
        </div>
      </div>

      <div className="flex gap-5 mt-6 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        {listings.map((p) => (
          <div
            key={p.title}
            className="group min-w-[260px] max-w-[260px] bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shrink-0"
          >
            <div className="relative overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-2 left-2 bg-navy text-white text-[11px] font-semibold px-2 py-1 rounded">
                {p.tag}
              </span>
              <span className="absolute top-2 right-2 bg-white/95 text-navy text-[11px] font-semibold px-2 py-1 rounded">
                {p.price}
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-navy-dark/90 flex items-center justify-center gap-4 py-1.5 text-white text-[11px]">
                {p.beds && (
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M5 10V6a2 2 0 012-2h10a2 2 0 012 2v4" /></svg>
                    {p.beds}
                  </span>
                )}
                {p.baths && (
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10V6a3 3 0 016 0v1M4 10h16v2a6 6 0 01-6 6H10a6 6 0 01-6-6v-2z" /></svg>
                    {p.baths}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M4 16v4h4M20 8V4h-4M20 16v4h-4" /></svg>
                  {p.area}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm text-navy leading-snug line-clamp-2 group-hover:text-gold transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {p.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <a
          href="#contact"
          className="inline-block border border-navy text-navy text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-navy hover:text-white transition-all duration-200 active:scale-95"
        >
          Browse All Properties
        </a>
      </div>
    </section>
  )
}
