import './App.css'
import Navbar from './components/partials/Navbar'
import HomeHeroSection from './components/modules/landing/HomeHeroSection'
import TestimonySection from './components/modules/pagename/TestimonySection'
import { CoverageSection } from './components/modules/pagename/CoverageSection'
import FeaturesSection from './components/modules/pagename/FeaturesSection'
function App() {
  return (
    <>
      <Navbar />
      <HomeHeroSection />
      <TestimonySection />
      <CoverageSection />
      <FeaturesSection />
    </>
  )
}

export default App
