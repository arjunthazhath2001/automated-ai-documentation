import React from 'react'
import EmailSignup from './EmailSignup'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Join Early Adopters
        </h2>
        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join early adopters shaping the future of effortless documentation.
        </p>
        
        {/* Email signup with dark variant */}
        <div className="max-w-md mx-auto mb-8">
          <EmailSignup variant="dark" />
        </div>
        
        {/* Additional benefits */}
        <div className="grid md:grid-cols-3 gap-6 text-blue-100">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🎯</span>
            </div>
            <p className="text-sm font-medium">Early Access</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">💡</span>
            </div>
            <p className="text-sm font-medium">Shape Features</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-sm font-medium">Launch First</p>
          </div>
        </div>
        
        {/* Trust message */}
        <div className="mt-12 pt-8 border-t border-blue-500 border-opacity-30">
          <p className="text-blue-200 text-sm">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTASection 