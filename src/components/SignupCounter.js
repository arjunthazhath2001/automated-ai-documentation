import React, { useState, useEffect } from 'react'

const SignupCounter = ({ className = '' }) => {
  const [count, setCount] = useState(1092)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show counter after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Simulate new signups every 3-8 seconds
    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, Math.random() * 8000 + 3000) // Random interval between 3-8 seconds

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className={`text-center ${className}`}>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-green-800">
          <span className="font-bold">{count}</span> people signed up!
        </span>
      </div>
    </div>
  )
}

export default SignupCounter 