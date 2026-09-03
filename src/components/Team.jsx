const team = [
  { name: 'Muhammad Adeel', role: 'Garden West Specialist', initials: 'MA' },
  { name: 'Hassan Raza', role: 'Garden East & Britto Rd Lead', initials: 'HR' },
  { name: 'Ayesha Malik', role: 'Luxury Apartments Advisor', initials: 'AM' },
  { name: 'Bilal Ahmed', role: 'Commercial & Shops Consultant', initials: 'BA' },
  { name: 'Usman Tariq', role: 'Renovation & Construction Lead', initials: 'UT' },
]

export default function Team() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-1">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            Our On-Ground Specialists
          </div>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
            Meet Our Karachi Property Consultants
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Over 15+ years of verified market experience across Garden West, Garden East, and surrounding Karachi sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-center hover:border-gold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-navy text-gold flex items-center justify-center font-heading font-bold text-lg group-hover:bg-gold group-hover:text-navy-dark transition-all duration-300 shadow-md">
                {member.initials}
              </div>
              <p className="font-semibold text-sm text-navy mt-3">{member.name}</p>
              <p className="text-xs text-gray-500 mt-1 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
