import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import EmailSignup from './EmailSignup'

const CTASection = () => {
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
    <section className={`py-20 relative overflow-hidden transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-r from-primary-600 to-blue-600'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          className={`absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
            isDark ? 'bg-white/5' : 'bg-white/5'
          }`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className={`absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl transition-all duration-700 ${
            isDark ? 'bg-white/5' : 'bg-white/5'
          }`}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Stop Losing Tribal Knowledge
        </motion.h2>
        <motion.p 
          className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join teams who are already onboarding faster, debugging incidents with full context, and protecting their institutional knowledge.
        </motion.p>
        
        {/* Email signup with dark variant */}
        <motion.div 
          className="max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <EmailSignup variant="dark" />
        </motion.div>
        
        {/* Additional benefits */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 text-blue-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🎯</span>
            </div>
            <p className="text-sm font-medium">Early Access</p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">💡</span>
            </div>
            <p className="text-sm font-medium">Shape Features</p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-sm font-medium">Launch First</p>
          </motion.div>
        </motion.div>
        
        {/* Trust message */}
        <motion.div 
          className="mt-12 pt-8 border-t border-blue-500 border-opacity-30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-200 text-sm">
            No spam, ever.     Unsubscribe at any time. 
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection 