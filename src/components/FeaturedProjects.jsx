const featured = [
  {
    title: 'Garden Heights Residency',
    location: 'Main Boulevard, Garden West, Karachi',
    type: '3 & 4 Bed Luxury Apartments',
    status: 'Ready for Possession',
    badge: 'NEW LAUNCH',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Al Madina Commercial Tower',
    location: 'Main Nishtar Road, Garden West, Karachi',
    type: 'Executive Shops & Corporate Offices',
    status: 'Booking Open',
    badge: 'COMMERCIAL',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Britto Luxury Enclave',
    location: 'Britto Road, Garden East, Karachi',
    type: 'Ultra Modern Family Suites',
    status: 'Under Construction',
    badge: 'PRIME LOCATION',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-1">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Karachi Developments
            </div>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
              Featured Projects in Garden West &amp; East
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Handpicked new residential and commercial launches in prime Karachi sectors.
            </p>
          </div>
          <a
            href="#properties"
            className="text-sm font-semibold border border-navy text-navy px-5 py-2.5 rounded-lg hover:bg-navy hover:text-white transition-all duration-200 active:scale-95"
          >
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {featured.map((f) => (
            <div
              key={f.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-gold text-navy-dark text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                  {f.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center font-heading font-bold text-base shrink-0 shadow-inner">
                    {f.title[0]}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-navy text-base leading-snug group-hover:text-gold transition-colors">
                      {f.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">{f.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600 mt-4 pt-4 border-t border-gray-100">
                  <span>Configuration: <strong className="text-navy">{f.type}</strong></span>
                  <span className="text-brandgreen font-bold">{f.status}</span>
                </div>
                <a
                  href="#contact"
                  className="mt-4 block text-center bg-navy/5 hover:bg-navy text-navy hover:text-white text-xs font-bold py-2.5 rounded-lg border border-navy/10 transition-all duration-200"
                >
                  Request Brochure &amp; Payment Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
