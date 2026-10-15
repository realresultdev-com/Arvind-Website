import { useState } from 'react'
import { Star, CheckCircle, ExternalLink, Play, Pause } from 'lucide-react'
import { GOOGLE_REVIEWS, CLINIC_INFO } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'

export function GoogleReviews() {
  const { isTamil } = useLanguage()
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [isPaused, setIsPaused] = useState<boolean>(false)

  const filterTabs = [
    { id: 'all', label: isTamil ? 'அனைத்து மதிப்புரைகள்' : 'All Reviews (270+)' },
    { id: 'rct', label: isTamil ? 'வேர் சிகிச்சை (RCT)' : 'Root Canal (RCT)' },
    { id: 'cleaning', label: isTamil ? 'பல் சுத்தம்' : 'Dental Cleaning' },
    { id: 'extraction', label: isTamil ? 'பல் எடுத்தல்' : 'Wisdom Tooth' },
    { id: 'braces', label: isTamil ? 'பல் சீரமைப்பு' : 'Braces & Alignment' },
    { id: 'pediatric', label: isTamil ? 'குழந்தைகள் சிகிச்சை' : 'Pediatric Care' },
  ]

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (selectedTag === 'all') return true
    if (selectedTag === 'rct') return rev.treatmentTag.includes('Root Canal')
    if (selectedTag === 'cleaning') return rev.treatmentTag.includes('Cleaning')
    if (selectedTag === 'extraction') return rev.treatmentTag.includes('Extraction')
    if (selectedTag === 'braces') return rev.treatmentTag.includes('Orthodontics')
    if (selectedTag === 'pediatric') return rev.treatmentTag.includes('Pediatric')
    return true
  })

  // Ensure enough items to create a seamless infinite loop with translateX(-50%)
  let baseList = filteredReviews.length > 0 ? filteredReviews : GOOGLE_REVIEWS
  while (baseList.length < 8) {
    baseList = [...baseList, ...filteredReviews]
  }
  const marqueeReviews = [...baseList, ...baseList]

  return (
    <section id="google-reviews" className="py-20 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E5E0] overflow-hidden">
      {/* Header and Aggregate Score Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Header & Trust Score Card */}
        <div className="bg-white rounded-3xl border border-[#E2E5E0] p-8 sm:p-12 mb-10 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left: Official Google Badge & Title */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F9FA] border border-[#E2E5E0] text-xs font-semibold text-[#202421]">
                {/* Google Multi-color G Icon SVG */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Google Verified Reviews</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#202421] tracking-tight">
                {isTamil ? 'நோயாளி கருத்துக்கள் & கூகுள் மதிப்பீடுகள்' : 'Patient Reviews on Google.'}
              </h2>
              <p className="text-base text-[#6B716D] max-w-xl leading-relaxed">
                {isTamil
                  ? 'நாமக்கல், அரவிந்த் பல் மருத்துவமனையில் சிகிச்சை பெற்ற நோயாளிகளின் உண்மையான கூகுள் கருத்துக்கள்.'
                  : 'Real, verified feedback from patients treated at Dr. Aravinth\'s Dental Care in Namakkal.'}
              </p>
            </div>

            {/* Right: Rating Aggregate & Direct Link to Google Maps */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 bg-[#FAFAF7] p-6 rounded-2xl border border-[#E2E5E0]">
              <div className="flex items-center gap-4">
                <div className="font-heading text-5xl font-extrabold text-[#202421] tracking-tight">
                  5.0
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#202421] block">
                    {isTamil ? '270+ கூகுள் மதிப்புரைகள்' : '270+ Google Reviews'}
                  </span>
                  <span className="text-[11px] text-[#6B716D]">
                    {isTamil ? '100% நேர்மறை கருத்துக்கள்' : '100% Positive Feedback'}
                  </span>
                </div>
              </div>

              <div className="pt-2 sm:pt-0 sm:border-l sm:border-[#E2E5E0] sm:pl-6">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#276B65] hover:bg-[#1E5550] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors"
                >
                  <span>{isTamil ? 'கூகுள் வரைபடத்தில் பார்க்க' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Treatment Filter Pills & Animation Controls */}
          <div className="pt-8 mt-8 border-t border-[#E2E5E0] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="text-xs font-semibold text-[#6B716D] mr-2">
                {isTamil ? 'வடிகட்டுக:' : 'Filter:'}
              </span>
              {filterTabs.map((tab) => {
                const isActive = selectedTag === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedTag(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#276B65] text-white shadow-2xs'
                        : 'bg-[#F2F3F0] hover:bg-[#E2E5E0] text-[#202421]'
                    }`}
                    aria-pressed={isActive}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Live Scrolling Indicator & Pause/Play Button */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#6B716D]">
                <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
                {isPaused
                  ? (isTamil ? 'இயக்கம் நிறுத்தப்பட்டது' : 'Paused')
                  : (isTamil ? 'தானியங்கி நகர்வு • படிக்க தொடவும்' : 'Auto-moving • Hover to read')}
              </span>
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F2F3F0] hover:bg-[#E2E5E0] text-[#202421] transition-colors cursor-pointer"
                title={isPaused ? 'Resume moving' : 'Pause moving'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-[#276B65] fill-[#276B65]" /> : <Pause className="w-3.5 h-3.5 text-[#276B65]" />}
                <span>{isPaused ? (isTamil ? 'தொடர' : 'Resume') : (isTamil ? 'நிறுத்த' : 'Pause')}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Single Row Continuous Moving Animation Marquee */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left and Right subtle gradient edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10" />

        {/* Moving Marquee Track */}
        <div
          className="animate-marquee-scroll flex gap-6 items-stretch pl-6"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {marqueeReviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[310px] sm:w-[350px] shrink-0 bg-white rounded-2xl border border-[#E2E5E0] hover:border-[#276B65]/50 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1 select-none"
            >
              <div>
                {/* Author Info & Avatar with Google Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs`}
                    >
                      {rev.avatarInitial}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-[#202421] leading-tight group-hover:text-[#276B65] transition-colors">
                        {isTamil ? (rev.authorNameTamil || rev.authorName) : rev.authorName}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-[#6B716D] mt-0.5">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>{isTamil ? 'உறுதிப்படுத்தப்பட்ட நோயாளி' : 'Verified Patient'}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] text-[#6B716D] shrink-0 font-medium">
                    {isTamil ? rev.timeAgoTamil : rev.timeAgo}
                  </span>
                </div>

                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-[#F59E0B] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Treatment Badge */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-semibold text-[#276B65] bg-[#F0F6F5] border border-[#276B65]/20 px-2.5 py-0.5 rounded-md">
                    {isTamil ? rev.treatmentTagTamil : rev.treatmentTag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-[#4A504C] leading-relaxed italic">
                  "{isTamil ? rev.commentTamil : rev.comment}"
                </p>
              </div>

              {/* Verified on Google Indicator */}
              <div className="pt-4 mt-5 border-t border-[#E2E5E0] flex items-center justify-between text-[11px] text-[#6B716D]">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span className="font-medium text-[#202421]">Google Review</span>
                </div>
                <span className="text-[#276B65] font-semibold">5.0 ★</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Banner Linking to Google Maps Review Form */}
        <div className="mt-8 p-6 rounded-2xl bg-[#F2F3F0] border border-[#E2E5E0] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E5E0] flex items-center justify-center shrink-0 shadow-2xs">
              <Star className="w-5 h-5 text-[#F59E0B] fill-current" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-[#202421]">
                {isTamil ? 'நீங்கள் அரவிந்த் பல் மருத்துவமனைக்கு வந்துள்ளீர்களா?' : 'Have you visited Dr. Aravinth\'s Dental Care?'}
              </strong>
              <span className="text-xs text-[#6B716D]">
                {isTamil
                  ? 'உங்கள் அனுபவத்தை கூகுள் மேப்ஸில் பகிர்ந்து மற்ற நோயாளிகளுக்கு உதவுங்கள்.'
                  : 'Share your consultation experience and review us directly on Google Maps.'}
              </span>
            </div>
          </div>

          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#FAFAF7] text-[#202421] hover:text-[#276B65] border border-[#E2E5E0] text-xs font-semibold px-5 py-2.5 rounded-xl shadow-2xs transition-colors shrink-0"
          >
            <span>{isTamil ? 'கூகுளில் மதிப்பாய்வு எழுத' : 'Write a Google Review →'}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

