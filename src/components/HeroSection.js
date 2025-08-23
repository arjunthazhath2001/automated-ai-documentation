import React from 'react'
import EmailSignup from './EmailSignup'
import SignupCounter from './SignupCounter'
import ProductHuntBadge from './ProductHuntBadge'
import YCombinatorBadge from './YCombinatorBadge'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Credibility Badges */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <ProductHuntBadge />
            <YCombinatorBadge />
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Documentation That{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Writes Itself
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Engineers waste hours writing repetitive docs. Our AI records your workflow and auto-generates documentation for you.
          </p>
          
          {/* Email signup */}
          <div className="max-w-md mx-auto mb-6">
            <EmailSignup />
          </div>
          
          {/* Signup counter */}
          <SignupCounter className="mb-8" />
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
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
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
    </section>
  )
}

export default HeroSection 