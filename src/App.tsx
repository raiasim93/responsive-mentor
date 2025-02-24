import './App.css'
import Navbar from './components/partials/Navbar'
import HomeHeroSection from './components/modules/landing/HomeHeroSection'
import TestimonySection from './components/modules/pagename/TestimonySection'
import { CoverageSection } from './components/modules/pagename/CoverageSection'
function App() {
  return (
    <>
      <Navbar />
      <HomeHeroSection />
      <TestimonySection />
      <CoverageSection />
    </>
  )
}

export default App
