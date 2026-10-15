import { Link } from 'react-router-dom'
import { CLINIC_INFO } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { isTamil } = useLanguage()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#202421] text-[#FAFAF7] pt-16 pb-12 border-t border-[#333834]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#333834]">
          {/* Clinic Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/clinic-logo.jpg"
                alt="Dr. Aravinth's Dental Care Official Logo"
                className="w-12 h-12 object-contain rounded-xl border border-[#3A403B] bg-white p-1 shrink-0"
                width="48"
                height="48"
              />
              <div>
                <span className="font-heading font-semibold text-lg text-white block group-hover:text-[#3DA59C] transition-colors">
                  {isTamil ? CLINIC_INFO.tamilName : CLINIC_INFO.name}
                </span>
                <span className="text-xs text-[#A2A8A3] block">
                  {isTamil ? 'நாமக்கல், தமிழ்நாடு' : 'Dental Care · Namakkal'}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#A2A8A3] leading-relaxed max-w-sm">
              Gentle, pain-free dental care in Namakkal. We treat tooth pain, cavities, and all teeth problems with 100% clean tools and friendly doctors.
            </p>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-[#A2A8A3] hover:text-white bg-[#2A2F2B] hover:bg-[#333834] px-3.5 py-2 rounded-lg border border-[#3A403B] transition-colors"
                aria-label="Visit Instagram profile"
              >
                <span>Instagram: @dr.aravinthdentalcare →</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A2A8A3]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Clinic
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-white transition-colors">
                  Tooth Treatments
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-white transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Book Doctor Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Clinic Contact & Hours
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#A2A8A3]">
              <p className="leading-relaxed">
                {isTamil ? CLINIC_INFO.addressTamil : CLINIC_INFO.addressEnglish}
              </p>

              <div>
                <span className="text-xs text-[#7E8580] block">Phone:</span>
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-white transition-colors font-medium">
                  +91 {CLINIC_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-xs text-[#7E8580] block">Email:</span>
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-[#3DA59C] hover:underline"
              >
                <span>Google Maps Directions →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E8580]">
          <div>
            © {currentYear} {isTamil ? CLINIC_INFO.tamilName : CLINIC_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Namakkal · Tamil Nadu · 637001</span>
            <button
              onClick={scrollToTop}
              className="text-[#A2A8A3] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to top ↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
