import React from 'react'

const ValuePropsSection = () => {
  const valueProps = [
    {
      icon: '⚡',
      title: 'Instant Documentation',
      description: 'Get comprehensive docs generated in real-time as you work, with no manual effort required.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data stays private and secure. We never access or share your sensitive information.'
    },
    {
      icon: '🤖',
      title: 'Context-Aware AI',
      description: 'Advanced AI that understands your workflow and creates relevant, actionable documentation.'
    },
    {
      icon: '🌍',
      title: 'For Anyone Who Documents Work',
      description: 'Whether you\'re a developer, engineer, or professional, our solution adapts to your needs.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Choose AI Docs?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most intelligent, secure, and effortless documentation solution 
            for modern teams and professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="group text-center p-6 bg-white rounded-2xl card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {prop.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Trust indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full card-shadow">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Trusted by teams worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuePropsSection 