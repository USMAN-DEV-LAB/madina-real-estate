const featured = [
  {
    title: '3 Marla Modern Home',
    location: 'Garden West, Faisalabad',
    type: 'Double Storey House',
    status: 'For Sale',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Al Madina Residency',
    location: 'Near Fowara Chowk',
    type: 'Apartments & Shops',
    status: 'New Launch',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Garden Heights Plaza',
    location: 'Garden West, Faisalabad',
    type: 'Commercial Plaza',
    status: 'Pre-Launch',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
              Featured Projects
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Handpicked new developments in Garden West &amp; Fowara Chowk.
            </p>
          </div>
          <a href="#properties" className="text-sm font-medium border border-navy text-navy px-4 py-2 rounded-lg hover:bg-navy hover:text-white transition-all duration-200 active:scale-95">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {featured.map((f) => (
            <div key={f.title} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-gold text-navy-dark text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                  FEATURED
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-heading font-semibold text-sm shrink-0">
                    {f.title[0]}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-base leading-snug group-hover:text-gold transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-xs text-gray-500">{f.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
                  <span>Type <span className="text-gray-700 font-medium">{f.type}</span></span>
                  <span className="text-gold font-medium">{f.status}</span>
                </div>
                <a
                  href="#contact"
                  className="mt-4 block text-center border border-gray-200 text-navy text-sm font-medium py-2.5 rounded-lg hover:border-navy hover:bg-navy hover:text-white transition-all duration-200"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
