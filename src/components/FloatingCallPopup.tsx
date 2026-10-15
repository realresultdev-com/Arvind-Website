import { Phone } from 'lucide-react'
import { CLINIC_INFO } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'

export function FloatingCallPopup() {
  const { isTamil } = useLanguage()

  return (
    <aside
      aria-label="Direct Clinic Contact"
      className="hidden sm:block fixed bottom-6 right-6 z-50"
    >
      <a
        href={`tel:${CLINIC_INFO.phoneRaw}`}
        className="inline-flex items-center gap-2.5 bg-[#276B65] hover:bg-[#1E5550] text-white px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 text-sm font-semibold tracking-wide"
        aria-label={`Call the clinic directly at ${CLINIC_INFO.phone}`}
      >
        <Phone className="w-4 h-4" />
        <span>{isTamil ? `அழைக்க: ${CLINIC_INFO.phone}` : `Call: ${CLINIC_INFO.phone}`}</span>
      </a>
    </aside>
  )
}
