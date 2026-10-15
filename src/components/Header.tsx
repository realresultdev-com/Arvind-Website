import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CLINIC_INFO } from '../data/clinicData'

interface HeaderProps {
  onBookAppointmentClick: () => void
}

export function Header({ onBookAppointmentClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#E2E5E0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark & Official Dental Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Dr. Aravinth's Dental Care - Home"
          >
            <img
              src="/images/clinic-logo.jpg"
              alt="Dr. Aravinth's Dental Care Official Logo"
              className="w-12 h-12 object-contain rounded-xl border border-[#E2E5E0] bg-white p-1 shadow-2xs group-hover:border-[#276B65]/40 transition-colors shrink-0"
              width="48"
              height="48"
            />

            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg sm:text-xl tracking-tight text-[#202421] leading-tight">
                Dr. Aravinth's Dental Care
              </span>
              <span className="text-xs text-[#6B716D] font-normal tracking-wide">
                அரவிந்த் பல் மருத்துவமனை · Namakkal
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6B716D] hover:text-[#202421] transition-colors font-medium py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call & Book CTA (Clean Typography) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="text-sm font-semibold text-[#202421] hover:text-[#276B65] transition-colors px-3 py-2"
              aria-label={`Call clinic at ${CLINIC_INFO.phone}`}
            >
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={onBookAppointmentClick}
              className="bg-[#276B65] hover:bg-[#1E5550] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#276B65]/40 active:scale-[0.98] cursor-pointer"
            >
              <span>Book Doctor Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#276B65] bg-[#F2F3F0] hover:bg-[#E2E5E0] transition-colors"
              aria-label={`Call clinic at ${CLINIC_INFO.phone}`}
            >
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#202421] hover:bg-[#F2F3F0] transition-colors focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E2E5E0] bg-[#FAFAF7] px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 text-base font-medium text-[#202421] hover:bg-[#F2F3F0] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#E2E5E0] space-y-2.5">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center justify-center w-full py-2.5 px-4 text-sm font-semibold text-[#202421] bg-[#F2F3F0] rounded-lg"
            >
              <span>Call {CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onBookAppointmentClick()
              }}
              className="w-full flex items-center justify-center py-3 px-4 text-sm font-semibold text-white bg-[#276B65] rounded-lg shadow-sm cursor-pointer"
            >
              <span>Book Doctor Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
