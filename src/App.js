import React, { useEffect } from 'react'
import { initGA, logPageView } from './ga'
import HeroSection from './components/HeroSection'
import PainPointsSection from './components/PainPointsSection'
import HowItWorksSection from './components/HowItWorksSection'
import WhoItsForSection from './components/WhoItsForSection'
import ValuePropsSection from './components/ValuePropsSection'
import CTASection from './components/CTASection'

function App() {
  useEffect(() => {
    initGA();
    logPageView(); // Track initial page load
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <ValuePropsSection />
      <CTASection />
    </div>
  )
}

export default App 