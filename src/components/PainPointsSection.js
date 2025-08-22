import React from 'react'

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: '🚀',
      title: 'Onboarding New Hires',
      description: 'Get new team members up to speed in days, not weeks. Every workflow and decision is automatically documented.',
      benefit: '10x faster onboarding'
    },
    {
      icon: '🔍',
      title: 'Debugging Incidents',
      description: 'Never lose context on what went wrong. Searchable knowledge trails for every incident and resolution.',
      benefit: 'Zero lost context'
    },
    {
      icon: '💼',
      title: 'Tribal Knowledge Retention',
      description: 'Protect institutional knowledge when team members leave. Turn chaos into organized, searchable knowledge.',
      benefit: 'Knowledge never walks out'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Built for Real Engineering Problems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While you focus on building, our AI captures the knowledge that makes your team successful.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:bg-white hover:card-shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {point.description}
                </p>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {point.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional context */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-100">
            <p className="text-lg text-gray-700 font-medium">
              Perfect for teams that can't afford to lose knowledge, context, or onboarding time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PainPointsSection 