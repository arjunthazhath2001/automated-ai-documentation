import React, { useEffect } from 'react'
import { initGA, logPageView } from './ga'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PainPointsSection from './components/PainPointsSection'
import HowItWorksSection from './components/HowItWorksSection'
import WhoItsForSection from './components/WhoItsForSection'
import ValuePropsSection from './components/ValuePropsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ScreenshotsSection from './components/ScreenshotsSection'
import FeaturesSection from './components/FeaturesSection'

function App() {
  useEffect(() => {
    initGA();
    logPageView(); // Track initial page load
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300">
        <Header />
        <HeroSection />
        <ScreenshotsSection />
        <FeaturesSection />
        <PainPointsSection />
        <HowItWorksSection />
        <WhoItsForSection />
        <ValuePropsSection />
        <CTASection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App 