import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SignupCounter = ({ className = '' }) => {
  const [count, setCount] = useState(1092)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show counter after a short delay with smooth animation
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Simulate new signups every 3-8 seconds
    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, Math.random() * 5000 + 3000) // Random interval between 3-8 seconds

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={`text-center ${className}`}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full shadow-sm"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.span 
              className="text-sm font-medium text-green-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <span className="font-bold">{count}</span> people signed up!
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SignupCounter 