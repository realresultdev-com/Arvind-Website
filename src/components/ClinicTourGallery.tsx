import { useState } from 'react'
import { CLINIC_FACILITY_IMAGES, type FacilityImage } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'

export function ClinicTourGallery() {
  const { isTamil } = useLanguage()
  const [activeImage, setActiveImage] = useState<FacilityImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (img: FacilityImage, index: number) => {
    setActiveImage(img)
    setCurrentIndex(index)
  }

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % CLINIC_FACILITY_IMAGES.length
    setCurrentIndex(nextIdx)
    setActiveImage(CLINIC_FACILITY_IMAGES[nextIdx])
  }

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + CLINIC_FACILITY_IMAGES.length) % CLINIC_FACILITY_IMAGES.length
    setCurrentIndex(prevIdx)
    setActiveImage(CLINIC_FACILITY_IMAGES[prevIdx])
  }

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E5E0]" aria-label="Clinic Facilities Tour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-4">
            {isTamil ? 'நமது மருத்துவமனை வசதிகள் & சிகிச்சை சூழல்.' : 'Take a Look Inside Our Namakkal Clinic.'}
          </h2>
          <p className="text-base sm:text-lg text-[#6B716D] leading-relaxed">
            {isTamil
              ? 'சேலம் மெயின் ரோட்டில் அமைந்துள்ள எங்களது தூய்மையான சிகிச்சை கூடம், நவீன பல் மருத்துவ நாற்காலி மற்றும் நோயாளி காத்திருப்பு கூடம்.'
              : 'Located on Salem Main Road, opposite Sanu Hotel. Explore our actual sterilized operatory, modern treatment chairs, consultation suite, and welcoming reception.'}
          </p>
        </div>

        {/* Featured 2-Column Top Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Main Action Photo (7 cols) */}
          <div 
            onClick={() => openLightbox(CLINIC_FACILITY_IMAGES[0], 0)}
            className="lg:col-span-7 group cursor-pointer bg-white rounded-2xl border border-[#E2E5E0] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F3F0]">
              <img
                src={CLINIC_FACILITY_IMAGES[0].src}
                alt={CLINIC_FACILITY_IMAGES[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
                width="1024"
                height="640"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/95 text-[#202421] text-xs font-bold px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#276B65]" />
                  <span>{isTamil ? 'பெரிதாக்கி பார்க்க' : 'View Full Image'}</span>
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#202421] mb-2 group-hover:text-[#276B65] transition-colors">
                  {isTamil ? CLINIC_FACILITY_IMAGES[0].tamilTitle : CLINIC_FACILITY_IMAGES[0].title}
                </h3>
                <p className="text-sm text-[#6B716D] leading-relaxed">
                  {isTamil ? CLINIC_FACILITY_IMAGES[0].tamilDescription : CLINIC_FACILITY_IMAGES[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Operatory Chair Photo (5 cols) */}
          <div 
            onClick={() => openLightbox(CLINIC_FACILITY_IMAGES[1], 1)}
            className="lg:col-span-5 group cursor-pointer bg-white rounded-2xl border border-[#E2E5E0] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F3F0]">
              <img
                src={CLINIC_FACILITY_IMAGES[1].src}
                alt={CLINIC_FACILITY_IMAGES[1].title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
                width="1024"
                height="640"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/95 text-[#202421] text-xs font-bold px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#276B65]" />
                  <span>{isTamil ? 'பெரிதாக்கி பார்க்க' : 'View Full Image'}</span>
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#202421] mb-2 group-hover:text-[#276B65] transition-colors">
                  {isTamil ? CLINIC_FACILITY_IMAGES[1].tamilTitle : CLINIC_FACILITY_IMAGES[1].title}
                </h3>
                <p className="text-sm text-[#6B716D] leading-relaxed">
                  {isTamil ? CLINIC_FACILITY_IMAGES[1].tamilDescription : CLINIC_FACILITY_IMAGES[1].description}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CLINIC_FACILITY_IMAGES.slice(2).map((img, idx) => {
            const actualIndex = idx + 2
            return (
              <div
                key={img.id}
                onClick={() => openLightbox(img, actualIndex)}
                className="group cursor-pointer bg-white rounded-2xl border border-[#E2E5E0] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F3F0]">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#202421] text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#276B65]" />
                      <span>{isTamil ? 'பெரிதாக்கி பார்க்க' : 'View'}</span>
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-base font-semibold text-[#202421] mb-1.5 group-hover:text-[#276B65] transition-colors">
                      {isTamil ? img.tamilTitle : img.title}
                    </h3>
                    <p className="text-xs text-[#6B716D] leading-relaxed">
                      {isTamil ? img.tamilDescription : img.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-4xl w-full bg-[#18211E] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/30 text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#276B65] text-white">
                  {isTamil ? activeImage.tamilTag : activeImage.tag}
                </span>
                <h4 className="font-heading text-sm sm:text-base font-semibold text-white truncate max-w-md">
                  {isTamil ? activeImage.tamilTitle : activeImage.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Details */}
            <div className="p-4 sm:p-5 bg-[#18211E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <p className="text-white/80">
                {isTamil ? activeImage.tamilDescription : activeImage.description}
              </p>
              <span className="text-white/50 text-xs shrink-0 font-mono">
                {currentIndex + 1} / {CLINIC_FACILITY_IMAGES.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
