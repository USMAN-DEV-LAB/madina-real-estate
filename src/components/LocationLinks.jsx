const columns = [
  {
    heading: 'Garden West Sectors',
    links: ['Main Boulevard', 'Nishtar Road', 'Karachi Zoo Area', 'Lashari Mohalla', 'Al-Madina Street'],
  },
  {
    heading: 'Garden East & Environs',
    links: ['Britto Road', 'Garden East Main Road', 'Soldier Bazaar Link', 'Patel Para Area', 'Cincinnatus Town'],
  },
  {
    heading: 'Popular Property Types',
    links: ['2 & 3 Bed Apartments', 'Independent Ground Portions', 'Commercial Road Shops', 'Penthouses & Terraces'],
  },
  {
    heading: 'Nearby Karachi Hubs',
    links: ['Saddar Market (10 mins)', 'MA Jinnah Road', 'Tariq Road Link', 'Lyari Expressway Access'],
  },
]

export default function LocationLinks({ onSelectArea }) {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
          Properties in Popular Areas of Karachi
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Explore residential and commercial opportunities across key localities in Garden West &amp; East.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-semibold text-sm text-navy border-b-2 border-gold inline-block pb-1 mb-3">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <button
                      type="button"
                      onClick={() => onSelectArea && onSelectArea(l.includes('Garden East') ? 'Garden East' : l.includes('Britto') ? 'Britto Road (Garden East)' : l.includes('Nishtar') ? 'Nishtar Road (Garden West)' : 'Garden West')}
                      className="text-sm text-gray-600 hover:text-gold transition-colors duration-200 inline-block hover:translate-x-1 cursor-pointer text-left"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
