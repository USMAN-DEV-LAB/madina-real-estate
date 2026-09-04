import { useState } from 'react'

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Dr. Farhan Qureshi',
    role: 'Verified Apartment Buyer',
    location: 'Britto Road, Garden East',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80',
    propertyType: '3 Bed Luxury Corner Flat',
    comment:
      'Purchasing our family flat on Britto Road was remarkably smooth with Madina Real Estate. From verifying SBCA NOCs and KDA transfer records to utility clearance, their team handled everything with 100% transparency.',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Haji Muhammad Ismail',
    role: 'Verified Commercial Seller',
    location: 'Nishtar Road, Garden West',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    propertyType: 'Main Road Front Commercial Shop',
    comment:
      'I wanted to sell my commercial retail shop on Main Nishtar Road without broker hassles. Madina Real Estate found a serious buyer within 20 days at exact market rate with immediate token and safe banking transactions.',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Zubair Ahmed Lakhani',
    role: 'Verified Rental Tenant',
    location: 'Near Karachi Zoo, Garden West',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    propertyType: '120 Sq. Yds Ground Floor Portion',
    comment:
      'Finding an independent portion with sweet water line and separate electricity meter in Garden West felt impossible until I contacted Usman and his team. Keys handed over in just 48 hours with a clear legal tenancy agreement.',
    date: '3 weeks ago'
  },
  {
    id: 4,
    name: 'Engr. Tariq Mehmood',
    role: 'Property Investor',
    location: 'Garden East Main Road',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    propertyType: 'Multiple Apartment Portfolios',
    comment:
      'Their local market intelligence for Garden West and Garden East is second to none in Karachi. Outstanding rental yield advisory and trustworthy guidance on long-term capital appreciation.',
    date: '2 months ago'
  }
]

export default function Testimonials() {
  const [filterType, setFilterType] = useState('All')

  const filteredReviews =
    filterType === 'All'
      ? TESTIMONIALS_DATA
      : TESTIMONIALS_DATA.filter((t) => t.role.toLowerCase().includes(filterType.toLowerCase()))

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8f9fa] via-white to-[#f4f6f9] border-t border-gray-200/80 font-sans relative overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-gold/15 text-navy-dark border border-gold/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span className="text-amber-500 text-sm">★</span>
            Client Trust &amp; Verified Reviews
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0F2A47] tracking-tight">
            What Our Karachi Clients Say About Us
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mt-3 font-medium leading-relaxed">
            Trusted by 2,500+ satisfied families, overseas Pakistanis, and investors across{' '}
            <strong className="text-navy font-semibold">Garden West</strong> and{' '}
            <strong className="text-navy font-semibold">Garden East</strong>.
          </p>
        </div>

        {/* 4 Trust Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-10">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs hover:shadow-md transition-all text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400 text-lg mb-1">
              {'★★★★★'}
            </div>
            <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0F2A47]">4.9 / 5.0</p>
            <p className="text-xs text-gray-500 font-semibold mt-1">450+ Verified Ratings</p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs hover:shadow-md transition-all text-center">
            <div className="w-8 h-8 rounded-full bg-brandgreen/10 text-brandgreen flex items-center justify-center mx-auto mb-1 text-sm font-bold">
              ✓
            </div>
            <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0F2A47]">2,500+</p>
            <p className="text-xs text-gray-500 font-semibold mt-1">Happy Families Settled</p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs hover:shadow-md transition-all text-center">
            <div className="w-8 h-8 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto mb-1 text-sm font-bold">
              🏛
            </div>
            <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0F2A47]">15+ Years</p>
            <p className="text-xs text-gray-500 font-semibold mt-1">Garden West &amp; East Focus</p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs hover:shadow-md transition-all text-center">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-1 text-sm font-bold">
              📜
            </div>
            <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0F2A47]">100%</p>
            <p className="text-xs text-gray-500 font-semibold mt-1">Verified Documentation</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
          {['All', 'Buyer', 'Seller', 'Rental', 'Investor'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilterType(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filterType === tab
                  ? 'bg-navy text-gold shadow-sm scale-105'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab === 'All' ? 'All Reviews' : `${tab} Stories`}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredReviews.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Top Quote Icon & Rating */}
              <div>
                <div className="flex items-center justify-between">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current text-amber-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs font-bold text-gray-700 ml-1.5">5.0</span>
                  </div>

                  {/* Verification Badge */}
                  <span className="inline-flex items-center gap-1 bg-brandgreen/10 text-brandgreen-dark border border-brandgreen/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    <svg className="w-3 h-3 fill-current text-brandgreen" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t.role}
                  </span>
                </div>

                {/* Property context chip */}
                <div className="mt-3 inline-block bg-gray-50 border border-gray-200/80 rounded-lg px-2.5 py-1 text-[11px] font-semibold text-navy">
                  📍 {t.propertyType} • <span className="text-gray-500">{t.location}</span>
                </div>

                {/* Testimonial text */}
                <p className="text-sm text-gray-700 leading-relaxed mt-3.5 italic font-normal">
                  "{t.comment}"
                </p>
              </div>

              {/* Bottom Client Info */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gold/40 shadow-xs"
                  />
                  <div>
                    <p className="font-sans font-bold text-sm text-[#0F2A47] group-hover:text-gold transition-colors">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium">{t.location}</p>
                  </div>
                </div>

                <span className="text-[11px] text-gray-400 font-medium">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Card */}
        <div className="mt-12 bg-navy text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="relative z-10 text-center lg:text-left">
            <span className="bg-gold text-navy-dark text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              Trusted Karachi Real Estate Partner
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white mt-2.5">
              Ready to Buy, Sell or Rent in Garden West &amp; East?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-xl">
              Connect directly with our senior property consultants for free valuation and verified listings.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10 flex-wrap justify-center">
            <a
              href="#contact"
              className="bg-gold hover:brightness-95 text-navy-dark font-sans font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all active:scale-95"
            >
              Contact Our Consultants
            </a>
            <a
              href="https://wa.me/923000000000?text=Assalam%20o%20Alaikum,%20I%20want%20to%20consult%20regarding%20property%20in%20Garden%20West/East%20Karachi."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brandgreen hover:bg-brandgreen-dark text-white font-sans font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
