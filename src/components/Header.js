import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo size="default" />
          </div>
          
          {/* Navigation (optional for future) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Add navigation items here if needed */}
          </div>
          
          {/* Right side - could add CTA button later */}
          <div className="flex items-center">
            {/* Add CTA button here if needed */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
