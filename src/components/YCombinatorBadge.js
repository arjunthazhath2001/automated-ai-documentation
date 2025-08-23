import React from 'react'

const YCombinatorBadge = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 bg-red-50 border border-red-200 rounded-full shadow-sm hover:shadow-md transition-all duration-200 ${className}`}>
      {/* Y Combinator icon */}
      <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
        <span className="text-white text-xs font-bold">Y</span>
      </div>
      
      {/* Text */}
      <span className="text-xs font-medium text-red-700">
        Soon to be backed by Y Combinator
      </span>
      
      {/* Small arrow */}
      <svg 
        className="w-3 h-3 text-red-500" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fillRule="evenodd" 
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
          clipRule="evenodd" 
        />
      </svg>
    </div>
  )
}

export default YCombinatorBadge 