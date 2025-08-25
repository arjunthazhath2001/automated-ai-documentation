import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const images = [
  '/WhatsApp Image 2025-08-24 at 11.50.25 PM.jpeg',
  '/WhatsApp Image 2025-08-24 at 11.50.26 PM.jpeg',
  '/WhatsApp Image 2025-08-25 at 12.02.42 AM.jpeg'
]

const ScreenshotsSection = () => {
  const { isDark } = useTheme()
  const [activeImage, setActiveImage] = useState(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const total = images.length

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveImage(null)
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    if (activeImage) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [activeImage])

  const openAtIndex = (index) => {
    setActiveIndex(index)
    setActiveImage(images[index])
  }

  const goNext = () => {
    if (activeIndex === -1) return
    const next = (activeIndex + 1) % total
    setActiveIndex(next)
    setActiveImage(images[next])
  }

  const goPrev = () => {
    if (activeIndex === -1) return
    const prev = (activeIndex - 1 + total) % total
    setActiveIndex(prev)
    setActiveImage(images[prev])
  }

  return (
    <section className={`relative py-16 sm:py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Grainy gradient background (section-only) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(1200px 600px at 10% 0%, rgba(147, 112, 219, 0.10), transparent 55%), radial-gradient(1200px 600px at 90% 100%, rgba(96, 165, 250, 0.10), transparent 55%), linear-gradient(180deg, rgba(17, 24, 39, 0.92), rgba(17, 24, 39, 0.92))'
              : 'radial-gradient(1000px 500px at 12% 0%, rgba(196, 181, 253, 0.12), transparent 55%), radial-gradient(1000px 500px at 88% 100%, rgba(191, 219, 254, 0.12), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.98))',
          }}
        />
        {/* SVG noise overlay for grain */}
        <svg className="absolute inset-0 w-full h-full opacity-15 mix-blend-overlay pointer-events-none" aria-hidden="true">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" fill={isDark ? '#0b0b0b' : '#ffffff'} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>See Heidi in action</h2>
          <p className={`mt-3 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>A glimpse of the product experience</p>
        </div>

        {/* Aesthetic staggered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="sm:col-span-1 lg:col-span-1 flex items-center">
            <button
              type="button"
              onClick={() => openAtIndex(0)}
              className="w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <img src={images[0]} alt="Heidi screenshot 1" className="w-full h-auto object-cover cursor-zoom-in" loading="lazy" />
            </button>
          </div>
          <div className="sm:col-span-1 lg:col-span-1 lg:translate-y-8">
            <button
              type="button"
              onClick={() => openAtIndex(1)}
              className="w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <img src={images[1]} alt="Heidi screenshot 2" className="w-full h-auto object-cover cursor-zoom-in" loading="lazy" />
            </button>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 lg:-translate-y-4">
            <button
              type="button"
              onClick={() => openAtIndex(2)}
              className="w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <img src={images[2]} alt="Heidi screenshot 3" className="w-full h-auto object-cover cursor-zoom-in" loading="lazy" />
            </button>
          </div>
        </div>

        
      </div>
      {/* Lightbox modal */}
      {activeImage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-black/80' : 'bg-black/70'}`}
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div className="absolute inset-0" />
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close"
              className="absolute -top-10 right-0 text-white/90 hover:text-white focus:outline-none"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>
            <div
              className="relative"
              onTouchStart={(e) => {
                const touch = e.changedTouches[0]
                e.currentTarget.dataset.swipeStartX = touch.screenX
              }}
              onTouchEnd={(e) => {
                const startX = Number(e.currentTarget.dataset.swipeStartX || 0)
                const endX = e.changedTouches[0].screenX
                const deltaX = endX - startX
                const threshold = 40
                if (Math.abs(deltaX) > threshold) {
                  if (deltaX < 0) {
                    goNext()
                  } else {
                    goPrev()
                  }
                }
                delete e.currentTarget.dataset.swipeStartX
              }}
            >
              <img src={activeImage} alt="Heidi screenshot enlarged" className="w-full h-auto rounded-xl shadow-2xl select-none" draggable="false" />
              {/* Prev/Next buttons */}
              <button
                type="button"
                aria-label="Previous screenshot"
                className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/60 focus:outline-none"
                onClick={goPrev}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next screenshot"
                className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/60 focus:outline-none"
                onClick={goNext}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ScreenshotsSection


