import { useState, useMemo, useEffect } from 'react'

/**
 * Extracts YouTube video ID from various URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/shorts/VIDEO_ID
 * - Direct ID
 */
function extractYouTubeId(url) {
  if (!url) return null
  if (url.length === 11 && !url.includes('/') && !url.includes('.')) {
    return url
  }
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

export default function PropertyGallery({
  videoUrl = 'https://www.youtube.com/embed/ZOY90rxUFAg', // Default high-end Karachi property walkthrough
  images = [],
  title = 'Property Media Gallery',
  badge = 'FEATURED'
}) {
  // Normalize images into an array
  const imageList = useMemo(() => {
    if (!images) return []
    if (typeof images === 'string') return [images]
    if (Array.isArray(images) && images.length > 0) return images
    return ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80']
  }, [images])

  // Extract YouTube ID with fallback
  const videoId = useMemo(() => {
    return extractYouTubeId(videoUrl) || 'ZOY90rxUFAg'
  }, [videoUrl])

  // Top screen displays YouTube Video by default (1st Priority)
  const [activeMedia, setActiveMedia] = useState({
    type: 'video',
    id: videoId,
    index: 0
  })

  // Synchronize active media whenever a different property is loaded
  useEffect(() => {
    setActiveMedia({
      type: 'video',
      id: videoId,
      index: 0
    })
  }, [videoId])

  // Fullscreen video / image preview state
  const isVideo = activeMedia.type === 'video'
  const activeImageIndex = isVideo ? -1 : activeMedia.index

  const handleSelectVideo = () => {
    setActiveMedia({
      type: 'video',
      id: videoId,
      index: 0
    })
  }

  const handleSelectImage = (imgSrc, index) => {
    setActiveMedia({
      type: 'image',
      url: imgSrc,
      index
    })
  }

  // Next / Previous slide controls
  const handlePrev = () => {
    if (isVideo) {
      // Go to last image
      handleSelectImage(imageList[imageList.length - 1], imageList.length - 1)
    } else if (activeImageIndex === 0) {
      // Go back to video
      handleSelectVideo()
    } else {
      handleSelectImage(imageList[activeImageIndex - 1], activeImageIndex - 1)
    }
  }

  const handleNext = () => {
    if (isVideo) {
      if (imageList.length > 0) {
        handleSelectImage(imageList[0], 0)
      }
    } else if (activeImageIndex === imageList.length - 1) {
      handleSelectVideo()
    } else {
      handleSelectImage(imageList[activeImageIndex + 1], activeImageIndex + 1)
    }
  }

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden font-sans">
      {/* 1. Main Display Screen (Top 1st Priority Video Embed or Active Image) */}
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-inner group">
        {isVideo ? (
          /* YouTube Video Player Embed */
          <div className="w-full h-full relative">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={`${title} - Video Tour`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
            {/* Top Indicator Tag */}
            <div className="absolute top-3 left-3 pointer-events-none z-10 flex items-center gap-2">
              <span className="bg-red-600/90 backdrop-blur-sm text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Video Tour
              </span>
              {badge && (
                <span className="bg-gold text-navy-dark text-[11px] font-black px-2.5 py-1 rounded-md shadow tracking-wider uppercase">
                  {badge}
                </span>
              )}
            </div>
          </div>
        ) : (
          /* High-Res Property Image View */
          <div className="w-full h-full relative overflow-hidden bg-gray-900 flex items-center justify-center">
            <img
              src={activeMedia.url}
              alt={`${title} - View ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

            {/* Photo Counter Badge */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <span className="bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <circle cx="12" cy="13" r="3" strokeWidth={2} />
                </svg>
                Photo {activeImageIndex + 1} of {imageList.length}
              </span>
              {badge && (
                <span className="bg-gold text-navy-dark text-[11px] font-black px-2.5 py-1 rounded-md shadow tracking-wider uppercase">
                  {badge}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Left / Right Arrow Navigation Over Main Screen */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Media"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm opacity-80 hover:opacity-100 transition-all cursor-pointer shadow-lg z-20 hover:scale-110 active:scale-95"
        >
          <svg className="w-5 h-5 -ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Media"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm opacity-80 hover:opacity-100 transition-all cursor-pointer shadow-lg z-20 hover:scale-110 active:scale-95"
        >
          <svg className="w-5 h-5 -mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 2. Daraz-Style Combined Thumbnail Strip */}
      <div className="mt-3 pt-2">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
          {/* 1st Thumbnail: Video Button with Red Play Overlay */}
          <button
            type="button"
            onClick={handleSelectVideo}
            className={`relative shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
              isVideo
                ? 'border-red-600 ring-2 ring-red-500/30 scale-105 shadow-md'
                : 'border-gray-200 hover:border-red-500 opacity-80 hover:opacity-100'
            }`}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Play Video Tour"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Play Button Icon Overlay */}
            <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-white">
              <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-white drop-shadow mt-0.5">
                Play Video
              </span>
            </div>
            {isVideo && (
              <span className="absolute bottom-0 inset-x-0 h-1 bg-red-600" />
            )}
          </button>

          {/* Remaining Thumbnails: Property Images */}
          {imageList.map((imgSrc, idx) => {
            const isCurrent = !isVideo && activeImageIndex === idx
            return (
              <button
                key={imgSrc + idx}
                type="button"
                onClick={() => handleSelectImage(imgSrc, idx)}
                className={`relative shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
                  isCurrent
                    ? 'border-gold ring-2 ring-gold/40 scale-105 shadow-md'
                    : 'border-gray-200 hover:border-gold/60 opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-1.5 py-0.2 rounded">
                  {idx + 1}
                </span>
                {isCurrent && (
                  <span className="absolute bottom-0 inset-x-0 h-1 bg-gold" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
