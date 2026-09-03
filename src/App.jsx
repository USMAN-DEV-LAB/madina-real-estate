import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularAreas from './components/PopularAreas'
import FeaturedProjects from './components/FeaturedProjects'
import ExclusiveListings from './components/ExclusiveListings'
import PropertiesForSale from './components/PropertiesForSale'
import PropertiesForRent from './components/PropertiesForRent'
import Team from './components/Team'
import Services from './components/Services'
import LocationLinks from './components/LocationLinks'
import ContactFooter from './components/ContactFooter'

export default function App() {
  // Simple page view state: 'home' | 'buy' | 'rent'
  const [currentView, setCurrentView] = useState('home')

  const [filters, setFilters] = useState({
    purpose: 'Buy',
    city: 'Karachi',
    area: 'All Areas',
    searchQuery: '',
    propertyType: 'Any Type',
    priceRange: 'Any Price',
    beds: 'All',
    selectedTag: ''
  })

  const handleSearchScroll = () => {
    if (currentView !== 'home') {
      setCurrentView('home')
    }
    setTimeout(() => {
      const el = document.getElementById('properties')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }

  const handleSelectArea = (areaName) => {
    setFilters((prev) => ({
      ...prev,
      area: areaName,
      selectedTag: '',
      searchQuery: ''
    }))
    handleSearchScroll()
  }

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onSearchNavigate={handleSearchScroll}
        setFilters={setFilters}
      />

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentView === 'buy' ? (
          /* Dedicated Buy / Properties for Sale Page */
          <PropertiesForSale
            onNavigateHome={() => {
              setCurrentView('home')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        ) : currentView === 'rent' ? (
          /* Dedicated Rent / Properties for Rent Page */
          <PropertiesForRent
            onNavigateHome={() => {
              setCurrentView('home')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        ) : (
          /* Full Home Page */
          <>
            <Hero
              filters={filters}
              setFilters={setFilters}
              onSearch={handleSearchScroll}
            />
            <PopularAreas onSelectArea={handleSelectArea} />
            <FeaturedProjects />
            <ExclusiveListings
              filters={filters}
              setFilters={setFilters}
            />
            <Team />
            <Services />
            <LocationLinks onSelectArea={handleSelectArea} />
          </>
        )}
      </main>

      {/* Shared Footer */}
      <ContactFooter />
    </div>
  )
}
