import React from 'react'

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop losing time to documentation. Our secure recorder captures your work and AI generates comprehensive docs automatically.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center p-8 bg-white rounded-2xl card-shadow-lg">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Work Naturally
            </h3>
            <p className="text-gray-600">
              Continue with your daily tasks, coding, and workflows exactly as you normally would.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="text-center p-8 bg-white rounded-2xl card-shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI Observes
            </h3>
            <p className="text-gray-600">
              Our secure recorder captures your actions, code changes, and processes in the background.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="text-center p-8 bg-white rounded-2xl card-shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Docs Generated
            </h3>
            <p className="text-gray-600">
              AI automatically creates clear, organized documentation from your work patterns.
            </p>
          </div>
        </div>
        
        {/* Key benefits */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 p-6 bg-white rounded-2xl card-shadow">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Private
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Secure
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Effortless
            </div>
          </div>
          
          <p className="mt-6 text-lg text-gray-600 font-medium">
            No more stopping to write things down.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection 