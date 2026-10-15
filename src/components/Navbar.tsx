import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { CLINIC_INFO } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'
import { LanguageToggle } from './LanguageToggle'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isTamil } = useLanguage()

  const navLinks = [
    { label: isTamil ? 'முகப்பு' : 'Home', href: '/' },
    { label: isTamil ? 'எங்களைப் பற்றி' : 'About Us', href: '/about' },
    { label: isTamil ? 'சிகிச்சைகள்' : 'Treatments', href: '/treatments' },
    { label: isTamil ? 'மருத்துவர்கள்' : 'Our Doctors', href: '/doctors' },
    { label: isTamil ? 'தொடர்புக்கு' : 'Contact & Book', href: '/contact' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7] border-b border-[#E2E5E0] transition-colors">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20 gap-4 sm:gap-6 lg:gap-8">
          {/* Brand Wordmark & Official Dental Logo (One Language Displayed at a Time) */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center gap-3.5 group focus:outline-none shrink-0"
            aria-label={isTamil ? "அரவிந்த் பல் மருத்துவமனை - முகப்பு" : "Dr. Aravinth's Dental Care - Home"}
          >
            <img
              src="/images/clinic-logo.jpg"
              alt="Dr. Aravinth's Dental Care Official Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 object-contain rounded-xl border border-[#E2E5E0] bg-white p-1 shadow-2xs group-hover:border-[#276B65]/40 transition-colors shrink-0"
              width="48"
              height="48"
            />

            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg lg:text-xl tracking-tight text-[#111827] leading-tight">
                {isTamil ? CLINIC_INFO.tamilName : CLINIC_INFO.name}
              </span>
              <span className="text-[11px] sm:text-xs text-[#374151] font-medium tracking-wide">
                {isTamil ? 'நாமக்கல், தமிழ்நாடு' : 'Dental Care · Namakkal'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - High-Contrast Dark Black Text & Generous Spacing */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `transition-all font-semibold py-2 relative tracking-tight ${
                    isActive
                      ? 'text-[#276B65] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#276B65] after:rounded-full'
                      : 'text-[#111827] hover:text-[#276B65]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Controls (Language Toggle + Call + Book CTA) */}
          <div className="hidden sm:flex items-center gap-4 xl:gap-6 shrink-0">
            {/* Language Selector */}
            <LanguageToggle />

            {/* Direct Phone Number - Crisp Dark Black Text */}
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="text-sm font-bold text-[#111827] hover:text-[#276B65] transition-colors px-2 py-1.5"
              aria-label={`Call clinic at ${CLINIC_INFO.phone}`}
            >
              <span>{CLINIC_INFO.phone}</span>
            </a>

            {/* Book Appointment CTA */}
            <Link
              to="/contact"
              className="bg-[#276B65] hover:bg-[#1E5550] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#276B65]/40 active:scale-[0.98] shrink-0"
            >
              <span>{isTamil ? 'முன்பதிவு செய்ய' : 'Book Appointment'}</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Compact Language Toggle + Hamburger (Clean, single call option at bottom) */}
          <div className="flex sm:hidden items-center gap-2.5">
            {/* Mobile Language Toggle */}
            <LanguageToggle compact />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#111827] hover:bg-[#F2F3F0] transition-colors focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Clean, focused on page links without duplicate buttons) */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E2E5E0] bg-[#FAFAF7] px-4 py-3 space-y-1 transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-base rounded-lg transition-colors block ${
                    isActive
                      ? 'bg-[#F0F6F5] text-[#276B65] font-bold'
                      : 'text-[#111827] font-semibold hover:bg-[#F2F3F0]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
