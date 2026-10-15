import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function Hero() {
  const { isTamil } = useLanguage()
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#FAFAF7]"
      aria-label="Clinic Introduction & Highlights"
    >
      {/* Edge-to-Edge Banner Container with Dental Smile Waves & Enamel Contours */}
      <div
        className="relative w-full overflow-hidden transition-all"
        style={{
          backgroundColor: '#86e4cf',
          backgroundImage: `
            linear-gradient(
              90deg,
              #4be2c4 0%,
              #6de8d1 16%,
              #95eedb 34%,
              #bff4e6 50%,
              #def8df 66%,
              #f5fae0 80%,
              #fef4be 92%,
              #fdeca0 100%
            )
          `
        }}
      >
        {/* Flowing Dental Smile Waves, Contours & Enamel Flow (Unique to Dental Care) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Smile Wave Gradient Fill 1 */}
            <linearGradient id="dentalWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="85%" stopColor="#ffffff" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>

            {/* Smile Wave Gradient Fill 2 */}
            <linearGradient id="dentalWaveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0.22" />
            </linearGradient>

            {/* Soft Radial Ambient Behind Mascot */}
            <radialGradient id="mascotBackdropGlow" cx="72%" cy="48%" r="42%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Soft Radial Ambient Behind Mascot */}
          <rect width="1440" height="600" fill="url(#mascotBackdropGlow)" />

          {/* Translucent Smile Ribbon Wave 1 */}
          <path
            d="M-60,160 C260,90 580,260 920,170 C1180,105 1350,180 1500,140 L1500,380 C1360,320 1160,420 900,350 C580,265 280,395 -60,305 Z"
            fill="url(#dentalWaveGrad1)"
          />

          {/* Translucent Bottom Wave 2 */}
          <path
            d="M-60,350 C280,450 620,310 940,400 C1180,470 1350,370 1500,350 L1500,600 L-60,600 Z"
            fill="url(#dentalWaveGrad2)"
          />

          {/* Dental Smile Wave Contour Lines */}
          {/* Wave Line 1 - Primary Smile Crest */}
          <path
            d="M-50,155 C260,85 580,255 920,165 C1180,100 1350,175 1490,135"
            stroke="rgba(255, 255, 255, 0.55)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Wave Line 2 - Echo Harmonic Line */}
          <path
            d="M-50,195 C275,120 600,295 935,205 C1195,140 1360,215 1490,175"
            stroke="rgba(255, 255, 255, 0.38)"
            strokeWidth="1.75"
            strokeLinecap="round"
          />

          {/* Wave Line 3 - Enamel Flow Dash Contour */}
          <path
            d="M-50,235 C290,155 615,335 950,245 C1210,175 1370,250 1490,215"
            stroke="rgba(255, 255, 255, 0.28)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />

          {/* Wave Line 4 - Broad Lower Smile Curve */}
          <path
            d="M-50,315 C240,410 570,260 890,360 C1150,430 1330,330 1490,310"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="2.25"
            strokeLinecap="round"
          />

          {/* Wave Line 5 - Lower Harmonic Line */}
          <path
            d="M-50,355 C255,450 585,300 905,400 C1165,470 1345,370 1490,350"
            stroke="rgba(255, 255, 255, 0.32)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Wave Line 6 - Deep Sub-Contour */}
          <path
            d="M-50,395 C270,490 600,340 920,440 C1180,510 1360,410 1490,390"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.25"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />

          {/* Dental Sparkle Accents (Subtle 4-point clean hygiene stars) */}
          <g transform="translate(180, 75) scale(0.9)" opacity="0.65">
            <path d="M0,-12 Q0,0 12,0 Q0,0 0,12 Q0,0 -12,0 Q0,0 0,-12" fill="white" />
            <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
          </g>

          <g transform="translate(620, 110) scale(0.75)" opacity="0.55">
            <path d="M0,-12 Q0,0 12,0 Q0,0 0,12 Q0,0 -12,0 Q0,0 0,-12" fill="white" />
            <circle cx="0" cy="0" r="2" fill="#ffffff" />
          </g>

          <g transform="translate(1290, 85) scale(0.85)" opacity="0.6">
            <path d="M0,-12 Q0,0 12,0 Q0,0 0,12 Q0,0 -12,0 Q0,0 0,-12" fill="white" />
            <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
          </g>
        </svg>

        {/* Restored Grand Hero Slider Height: Full-Scale Presence, Perfectly Centered */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 lg:py-20 xl:py-24 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px]">
          
          {/* Centered Left Column: Headline, Mantra & CTA */}
          <div className="flex-1 w-full max-w-2xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Responsive Grand Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.85rem] font-bold text-[#18211E] tracking-tight mb-3 sm:mb-5 leading-[1.12]">
              {isTamil ? 'ஆரோக்கியமான புன்னகை இங்கே தொடங்குகிறது.' : 'A Healthier Smile Starts Here.'}
            </h1>

            {/* Catchy Clinic Mantra */}
            <p className="text-[15px] sm:text-lg md:text-xl lg:text-[1.28rem] font-medium text-[#2B413B] leading-snug mb-6 sm:mb-9 max-w-xl tracking-tight">
              {isTamil
                ? 'ஒவ்வொரு வருகையிலும் ஆறுதல். ஒவ்வொரு புன்னகையிலும் நம்பிக்கை.'
                : 'Comfort in every visit. Confidence in every smile.'}
            </p>

            {/* Primary CTA Button */}
            <div className="flex justify-center lg:justify-start w-full">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#276B65] hover:bg-[#1E5550] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-8 sm:px-9 py-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
              >
                <span>{isTamil ? 'முன்பதிவு செய்ய' : 'Book an Appointment'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Centered Right Column: 3D Tooth Mascot with Full-Scale Glowing Halo Discs */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl flex items-center justify-center relative">
            
            {/* Luminous Circular Outer Halo Disc (Restored Original Full Scale) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] rounded-full bg-white/45 backdrop-blur-xs border border-white/60 shadow-sm pointer-events-none"
              aria-hidden="true"
            />

            {/* Secondary Soft Inner Glow Ring */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-full bg-gradient-to-tr from-white/65 via-white/35 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* 3D Smiling Tooth Mascot Cutout (Restored Bold Full Scale) */}
            <div className="relative z-10 w-full max-w-[220px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[430px] xl:max-w-[480px] flex items-center justify-center">
              <img
                src="/images/tooth-mascot.png"
                alt="Dr. Aravinth's Dental Care - Healthy Smiling Teeth Mascot"
                className="w-full h-auto object-contain drop-shadow-[0_16px_32px_rgba(39,107,101,0.18)] select-none pointer-events-none transform transition-transform hover:scale-[1.03] duration-500"
                loading="eager"
                width="800"
                height="800"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
