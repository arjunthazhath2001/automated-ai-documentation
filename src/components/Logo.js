import React from 'react'

const Logo = ({ size = 'default', className = '' }) => {
  const sizeClasses = {
    small: 'text-xl font-black',
    default: 'text-2xl font-black',
    large: 'text-4xl font-black',
    huge: 'text-6xl font-black'
  }

  return (
    <div className={`font-integral ${sizeClasses[size]} ${className}`}>
      <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
        Heidi
      </span>
    </div>
  )
}

export default Logo
