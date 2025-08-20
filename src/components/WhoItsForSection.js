import React from 'react'

const WhoItsForSection = () => {
  const audiences = [
    {
      emoji: '👨‍💻',
      title: 'Developers',
      description: 'Capture code changes, deployments, and workflows automatically.',
      features: ['Code documentation', 'Deployment logs', 'Workflow automation']
    },
    {
      emoji: '⚙️',
      title: 'DevOps Engineers',
      description: 'Turn daily ops, configs, and fixes into living docs.',
      features: ['Infrastructure docs', 'Config management', 'Incident reports']
    },
    {
      emoji: '🏢',
      title: 'Teams & Professionals',
      description: 'Document processes, tasks, and knowledge without effort.',
      features: ['Process documentation', 'Knowledge base', 'Team onboarding']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Who It's For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're writing code, managing infrastructure, or documenting processes, 
            our AI adapts to your workflow and creates the documentation you need.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:card-shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {audience.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {audience.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional context */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-100">
            <p className="text-lg text-gray-700 font-medium">
              Perfect for anyone who needs to document their work but doesn't want to 
              <span className="text-primary-600 font-semibold"> stop working</span> to do it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoItsForSection 