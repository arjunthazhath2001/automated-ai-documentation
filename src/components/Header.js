import React from 'react'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDark 
        ? 'bg-gray-900/90 backdrop-blur-md border-gray-800' 
        : 'bg-white/90 backdrop-blur-md border-gray-100'
    } border-b backdrop-blur-md`}>
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
          
          {/* Right side - Theme toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
