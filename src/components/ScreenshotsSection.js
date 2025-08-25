import React from 'react'
import { useTheme } from '../context/ThemeContext'

const images = [
  '/WhatsApp Image 2025-08-24 at 11.50.25 PM.jpeg',
  '/WhatsApp Image 2025-08-24 at 11.50.26 PM.jpeg',
  '/WhatsApp Image 2025-08-25 at 12.02.42 AM.jpeg'
]

const ScreenshotsSection = () => {
  const { isDark } = useTheme()

  return (
    <section className={`relative py-16 sm:py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>See Heidi in action</h2>
          <p className={`mt-3 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>A glimpse of the product experience</p>
        </div>

        {/* Aesthetic staggered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="sm:col-span-1 lg:col-span-1 flex items-center">
            <div className="w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-white dark:bg-gray-900">
              <img src={images[0]} alt="Heidi screenshot 1" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-1 lg:translate-y-8">
            <div className="w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-white dark:bg-gray-900">
              <img src={images[1]} alt="Heidi screenshot 2" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 lg:-translate-y-4">
            <div className="w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-white dark:bg-gray-900">
              <img src={images[2]} alt="Heidi screenshot 3" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Subtle gradient background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className={`absolute -top-10 left-10 h-64 w-64 rounded-full blur-3xl ${isDark ? 'bg-purple-600/10' : 'bg-purple-400/10'}`}></div>
          <div className={`absolute -bottom-16 right-10 h-72 w-72 rounded-full blur-3xl ${isDark ? 'bg-blue-600/10' : 'bg-blue-400/10'}`}></div>
        </div>
      </div>
    </section>
  )
}

export default ScreenshotsSection


