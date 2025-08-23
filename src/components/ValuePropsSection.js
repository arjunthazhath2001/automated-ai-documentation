import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ValuePropsSection = () => {
  const { isDark } = useTheme()
  
  const valueProps = [
    {
      icon: '🚀',
      title: '10x Faster Onboarding',
      description: 'New hires get up to speed in days instead of weeks with automatically generated guides and workflows.'
    },
    {
      icon: '🔍',
      title: 'Zero Lost Context',
      description: 'Every incident, decision, and workflow is preserved with full context—never lose tribal knowledge again.'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Knowledge',
      description: 'Advanced AI that understands your team\'s workflow and creates searchable, actionable documentation automatically.'
    },
    {
      icon: '💼',
      title: 'Protect Company Knowledge',
      description: 'When team members leave, their knowledge stays. Turn chaos into organized, searchable institutional memory.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20'
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
            Why Teams Choose Heidi?
          </h2>
          <p className={`text-xl transition-all duration-300 max-w-4xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We've built the most intelligent knowledge preservation solution for teams that can't afford to lose 
            tribal knowledge, incident context, or onboarding time.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`group text-center p-6 rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:shadow-2xl' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {prop.icon}
              </motion.div>
              <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {prop.title}
              </h3>
              <p className={`text-sm leading-relaxed transition-all duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {prop.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust indicator */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800 border border-gray-700 shadow-2xl' 
              : 'bg-white shadow-lg'
          }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-sm font-medium transition-all duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Trusted by engineering teams worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValuePropsSection 