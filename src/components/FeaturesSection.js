import React from 'react'
import { useTheme } from '../context/ThemeContext'

const features = [
  "Quietly records your team's work and turns it into living documentation",
  'Automatically captures undocumented fixes, unique workflows, and company-specific practices',
  'Instantly find what happened in the last 24 hours and recall past solutions',
  'Resolve issues faster without writing a single line of documentation'
]

const FeaturesSection = () => {
  const { isDark } = useTheme()
  const dotColors = isDark
    ? ['bg-purple-400', 'bg-blue-400', 'bg-green-400', 'bg-orange-400']
    : ['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-orange-500']

  return (
    <section className={`relative py-14 sm:py-16 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>What Heidi Delivers</h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mt-2`}>Crystal-clear, always up-to-date documentation</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {features.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/70 dark:bg-gray-900/60 shadow-sm ring-1 ring-black/5">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dotColors[idx % dotColors.length]}`}></div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg`}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection


