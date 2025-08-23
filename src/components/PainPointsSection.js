import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const PainPointsSection = () => {
  const { isDark } = useTheme()
  
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
            Built for Real Engineering Problems
          </h2>
          <p className={`text-xl transition-all duration-300 max-w-4xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            While you focus on building, our AI captures the knowledge that makes your team successful.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {painPoints.map((point, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`group p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-200 ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 hover:shadow-2xl' 
                  : 'bg-gradient-to-br from-gray-50 to-blue-50 hover:bg-white hover:shadow-xl'
              }`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-6">
                <motion.div 
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {point.icon}
                </motion.div>
                <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {point.title}
                </h3>
                <p className={`leading-relaxed mb-4 transition-all duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {point.description}
                </p>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isDark 
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                    : 'bg-primary-100 text-primary-700 border border-primary-200'
                }`}>
                  {point.benefit}
                </div>
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
              Perfect for teams that can't afford to lose knowledge, context, or onboarding time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PainPointsSection 