import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const HowItWorksSection = () => {
  const { isDark } = useTheme()

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
      isDark ? 'bg-gray-900' : 'bg-gray-50'
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
            How It Works
          </h2>
          <p className={`text-xl transition-all duration-300 max-w-4xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Our AI silently captures your team's workflow, decisions, and knowledge—turning chaos into searchable, actionable documentation.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Step 1 */}
          <motion.div 
            variants={itemVariants}
            className={`text-center p-8 rounded-2xl transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 shadow-2xl border border-gray-700' 
                : 'bg-white shadow-xl'
            }`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                isDark 
                  ? 'bg-purple-600/20 text-purple-400' 
                  : 'bg-primary-100 text-primary-600'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl font-bold">1</span>
            </motion.div>
            <h3 className={`text-xl font-semibold mb-4 transition-all duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              AI Records Everything
            </h3>
            <p className={`transition-all duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our secure recorder captures code changes, decisions, and workflows as they happen—no manual input needed.
            </p>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            variants={itemVariants}
            className={`text-center p-8 rounded-2xl transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 shadow-2xl border border-gray-700' 
                : 'bg-white shadow-xl'
            }`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                isDark 
                  ? 'bg-blue-600/20 text-blue-400' 
                  : 'bg-blue-100 text-blue-600'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl font-bold">2</span>
            </motion.div>
            <h3 className={`text-xl font-semibold mb-4 transition-all duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Knowledge Gets Organized
            </h3>
            <p className={`transition-all duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              AI processes and categorizes everything into searchable documentation, incident reports, and onboarding guides.
            </p>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            variants={itemVariants}
            className={`text-center p-8 rounded-2xl transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 shadow-2xl border border-gray-700' 
                : 'bg-white shadow-xl'
            }`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                isDark 
                  ? 'bg-green-600/20 text-green-400' 
                  : 'bg-green-100 text-green-600'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl font-bold">3</span>
            </motion.div>
            <h3 className={`text-xl font-semibold mb-4 transition-all duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Team Gets Smarter
            </h3>
            <p className={`transition-all duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              New hires onboard faster, incidents get resolved quicker, and tribal knowledge stays with the company.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Key benefits */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={`inline-flex flex-wrap justify-center gap-6 p-6 rounded-2xl transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800 border border-gray-700 shadow-2xl' 
              : 'bg-white shadow-lg'
          }`}>
            <div className={`flex items-center gap-2 font-medium transition-all duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Private
            </div>
            <div className={`flex items-center gap-2 font-medium transition-all duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Secure
            </div>
            <div className={`flex items-center gap-2 font-medium transition-all duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Zero Manual Effort
            </div>
          </div>
          
          <p className={`mt-6 text-lg font-medium transition-all duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Your team's knowledge, automatically preserved and accessible.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection 