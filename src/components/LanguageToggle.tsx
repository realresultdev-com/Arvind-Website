import { useLanguage } from '../context/LanguageContext'
import { Languages } from 'lucide-react'

interface LanguageToggleProps {
  className?: string
  compact?: boolean
}

export function LanguageToggle({ className = '', compact = false }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-0.5 rounded-xl bg-[#F2F3F0] border border-[#E2E5E0] shadow-2xs ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-white text-[#276B65] shadow-xs'
            : 'text-[#111827] hover:text-[#276B65]'
        }`}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        {!compact && <Languages className="w-3.5 h-3.5 opacity-70" />}
        <span>EN</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('ta')}
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
          language === 'ta'
            ? 'bg-[#276B65] text-white shadow-xs'
            : 'text-[#111827] hover:text-[#276B65]'
        }`}
        aria-pressed={language === 'ta'}
        aria-label="Switch to Tamil"
      >
        <span>தமிழ்</span>
      </button>
    </div>
  )
}
