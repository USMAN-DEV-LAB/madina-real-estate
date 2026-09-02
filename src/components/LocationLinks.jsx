const columns = [
  {
    heading: 'Garden West',
    links: ['Block A', 'Block B', 'Block C', 'Main Boulevard', 'Canal Road Side'],
  },
  {
    heading: 'Fowara Chowk',
    links: ['Susan Road', 'Kohinoor City', 'Peoples Colony', 'Batala Colony'],
  },
  {
    heading: 'Nearby Societies',
    links: ['Eden Value Homes', 'Al Rehman Garden', 'Wapda City', 'Green City'],
  },
  {
    heading: 'Commercial Areas',
    links: ['D Ground', 'Kutchery Bazar', 'Susan Road Market', 'Main Market'],
  },
]

export default function LocationLinks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
        Properties in Popular Areas of Faisalabad
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="font-semibold text-sm text-navy border-b-2 border-gold inline-block pb-1 mb-3">
              {col.heading}
            </p>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#properties" className="text-sm text-gray-500 hover:text-gold transition-colors duration-200 inline-block hover:translate-x-0.5">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
