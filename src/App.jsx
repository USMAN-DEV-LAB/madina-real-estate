import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularAreas from './components/PopularAreas'
import FeaturedProjects from './components/FeaturedProjects'
import ExclusiveListings from './components/ExclusiveListings'
import Team from './components/Team'
import Services from './components/Services'
import LocationLinks from './components/LocationLinks'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <div className="font-body text-gray-800">
      <Navbar />
      <Hero />
      <PopularAreas />
      <FeaturedProjects />
      <ExclusiveListings />
      <Team />
      <Services />
      <LocationLinks />
      <ContactFooter />
    </div>
  )
}
