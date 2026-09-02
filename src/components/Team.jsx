const team = [
  { name: 'Muhammad Adeel', role: 'Sales Consultant', initials: 'MA' },
  { name: 'Hassan Raza', role: 'Rental Specialist', initials: 'HR' },
  { name: 'Ayesha Malik', role: 'Property Advisor', initials: 'AM' },
  { name: 'Bilal Ahmed', role: 'Renovation Lead', initials: 'BA' },
  { name: 'Usman Tariq', role: 'Purchase Consultant', initials: 'UT' },
]

export default function Team() {
  return (
    <section className="bg-gray-50 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
          Meet Our Property Consultants
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Local experts serving Garden West &amp; Fowara Chowk residents.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-gold hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-navy text-white flex items-center justify-center font-heading font-semibold group-hover:bg-gold group-hover:text-navy-dark transition-colors duration-300">
                {member.initials}
              </div>
              <p className="font-semibold text-sm text-navy mt-3">{member.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
