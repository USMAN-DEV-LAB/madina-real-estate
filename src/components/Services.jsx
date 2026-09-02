const services = [
  {
    title: 'Sale',
    desc: 'Apni property behtareen market rate par, bharosemand tareeqe se bechwayein.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 14l6-6m0 0h-4m4 0v4M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Purchase',
    desc: 'Apki zaroorat aur budget ke mutabiq sahi property dhoondne mein madad.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
    ),
  },
  {
    title: 'Rent',
    desc: 'Ghar, dukaan ya office rent par lena ho ya dena &mdash; hum aasan banate hain.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v8m-4-4h8m5 8H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1z" />
    ),
  },
  {
    title: 'Renovation',
    desc: 'Property ki repair, maintenance aur renovation ke liye trusted contractors.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4.5l-7 7 2 2 7-7-2-2zm7 7l-7 7 2 2 7-7-2-2zM7.5 16.5L4 20m9-15.5L20 12" />
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
        Har Property Zaroorat Ka Aik Hal
      </h2>
      <p className="text-sm text-gray-500 mt-1">Sale, Purchase, Rent aur Renovation &mdash; sab kuch aik hi jaga.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {s.icon}
              </svg>
            </div>
            <h3 className="font-heading font-semibold text-lg text-navy mt-4 group-hover:text-gold transition-colors">
              {s.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
