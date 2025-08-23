import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const WhoItsForSection = () => {
  const { isDark } = useTheme()
  
  const audiences = [
    {
      emoji: '🚀',
      title: 'Engineering Teams',
      description: 'Onboard new hires in days, not weeks. Every decision and workflow is automatically documented.',
      features: ['Instant onboarding guides', 'Workflow documentation', 'Decision trails']
    },
    {
      emoji: '🔍',
      title: 'DevOps & SRE',
      description: 'Debug incidents with searchable knowledge trails. Never lose context on what went wrong.',
      features: ['Incident documentation', 'Root cause analysis', 'Knowledge retention']
    },
    {
      emoji: '💼',
      title: 'Companies & Managers',
      description: 'Protect tribal knowledge from walking out the door. Turn chaos into organized, searchable knowledge.',
      features: ['Knowledge preservation', 'Team continuity', 'Process documentation']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className={`py-20 transition-all duration-500 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 transition-all duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Built for Teams That Can't Afford to Lose Knowledge
          </h2>
          <p className={`text-xl transition-all duration-300 max-w-4xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Whether you're scaling fast, dealing with incidents, or protecting institutional knowledge, 
            our AI ensures nothing important gets lost.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {audiences.map((audience, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`group p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-200 ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 hover:shadow-2xl' 
                  : 'bg-gray-50 hover:bg-white hover:shadow-xl'
              }`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-6">
                <motion.div 
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {audience.emoji}
                </motion.div>
                <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {audience.title}
                </h3>
                <p className={`leading-relaxed mb-4 transition-all duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {audience.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {audience.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-center gap-3 text-sm transition-all duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                    <span className={`transition-all duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional context */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={`inline-block p-6 rounded-2xl border transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30' 
              : 'bg-gradient-to-r from-primary-50 to-blue-50 border-primary-100'
          }`}>
            <p className={`text-lg font-medium transition-all duration-300 ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Perfect for teams that can't afford to lose knowledge when people leave or incidents happen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoItsForSection 