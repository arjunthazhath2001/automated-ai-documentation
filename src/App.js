import React from 'react'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import WhoItsForSection from './components/WhoItsForSection'
import ValuePropsSection from './components/ValuePropsSection'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <ValuePropsSection />
      <CTASection />
    </div>
  )
}

export default App 