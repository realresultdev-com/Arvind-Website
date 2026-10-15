import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { TreatmentsPage } from './pages/TreatmentsPage'
import { DoctorsPage } from './pages/DoctorsPage'
import { ContactPage } from './pages/ContactPage'
import { CLINIC_INFO } from './data/clinicData'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

function AppContent() {
  const { isTamil } = useLanguage()

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#202421] flex flex-col font-sans selection:bg-[#276B65]/15 selection:text-[#276B65]">
      {/* Persistent Multi-Page Navigation Bar */}
      <Navbar />

      {/* Dynamic Route View */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Mobile Floating Quick-Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAFAF7]/95 backdrop-blur-md border-t border-[#E2E5E0] p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center bg-[#202421] text-white py-2.5 px-3 rounded-lg text-xs font-semibold shadow-xs"
        >
          <span>{isTamil ? `அழைக்க: ${CLINIC_INFO.phone}` : `Call: ${CLINIC_INFO.phone}`}</span>
        </a>

        <Link
          to="/contact"
          className="flex-1 inline-flex items-center justify-center bg-[#276B65] text-white py-2.5 px-3 rounded-lg text-xs font-semibold shadow-xs"
        >
          <span>{isTamil ? 'முன்பதிவு செய்ய' : 'Book Appointment'}</span>
        </Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  )
}
