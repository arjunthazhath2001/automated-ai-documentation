import React from 'react'
import { useTheme } from '../context/ThemeContext'
import EmailSignup from './EmailSignup'
import SignupCounter from './SignupCounter'
import ProductHuntBadge from './ProductHuntBadge'
import YCombinatorBadge from './YCombinatorBadge'

const HeroSection = () => {
  const { isDark } = useTheme()

  return (
    <section className={`relative overflow-hidden transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30'
    } pt-24`}>
      {/* Premium background gradients */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10'
          : 'bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20'
      }`}></div>
      
      {/* Animated gradient orbs */}
      <div className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
        isDark 
          ? 'bg-purple-600/20 animate-pulse' 
          : 'bg-blue-400/20 animate-pulse'
      }`}></div>
      <div className={`absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl transition-all duration-700 ${
        isDark 
          ? 'bg-blue-600/20 animate-pulse' 
          : 'bg-purple-400/20 animate-pulse'
      }`}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Credibility Badges */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <ProductHuntBadge />
            <YCombinatorBadge />
          </div>
          
          {/* Main headline */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-300 ${
            isDark 
              ? 'text-white' 
              : 'text-gray-900'
          }`}>
            Documentation That{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Writes Itself
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className={`text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-300 ${
            isDark 
              ? 'text-gray-300' 
              : 'text-gray-600'
          }`}>
            Engineers waste hours writing repetitive docs. Our AI records your workflow and auto-generates documentation for you.
          </p>
          
          {/* Email signup */}
          <div className="max-w-md mx-auto mb-6">
            <EmailSignup />
          </div>
          
          {/* Signup counter */}
          <SignupCounter className="mb-8" />
          
          {/* Trust indicators */}
          <div className={`mt-12 flex flex-wrap justify-center items-center gap-8 text-sm transition-all duration-300 ${
            isDark 
              ? 'text-gray-400' 
              : 'text-gray-500'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Effortless</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 