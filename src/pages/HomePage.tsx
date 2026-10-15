import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Hero } from '../components/Hero'
import { GoogleReviews } from '../components/GoogleReviews'
import { ClinicTourGallery } from '../components/ClinicTourGallery'
import { TREATMENTS, WHY_CHOOSE_US, DOCTORS, CLINIC_INFO } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'

export function HomePage() {
  const { isTamil } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    {
      id: 'all',
      label: isTamil ? 'அனைத்து சிகிச்சைகள்' : 'All Treatments',
    },
    {
      id: 'preventive',
      label: isTamil ? 'பல் சுத்தம் & பாதுகாப்பு' : 'Teeth Cleaning',
    },
    {
      id: 'restorative',
      label: isTamil ? 'வேர் சிகிச்சை & அடைத்தல்' : 'Filling & Root Canal',
    },
    {
      id: 'crowns',
      label: isTamil ? 'பல் தொப்பி & பாலங்கள்' : 'Tooth Cap & Bridges',
    },
    {
      id: 'orthodontic',
      label: isTamil ? 'பல் சீரமைப்பு (கிளிப்)' : 'Teeth Clip (Straightening)',
    },
    {
      id: 'surgical',
      label: isTamil ? 'பல் எடுத்தல் & ஞானப்பல்' : 'Painless Tooth Removal',
    },
  ]

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS
    : activeCategory === 'crowns'
    ? TREATMENTS.filter(t => t.id === 'crowns-bridges')
    : activeCategory === 'restorative'
    ? TREATMENTS.filter(t => t.id === 'fillings' || t.id === 'root-canal')
    : TREATMENTS.filter(t => t.category === activeCategory)

  return (
    <div>
      {/* Editorial Hero */}
      <Hero />

      {/* Our Treatment Grid Section directly after Hero (matching user screenshot) */}
      <section id="treatment-grid" className="py-20 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading matching user screenshot */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-2.5">
              <span>{isTamil ? 'மருத்துவ சேவைகள்' : 'Dental Services'}</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#18211E] tracking-tight">
              {isTamil ? 'எங்கள் சிகிச்சை கட்டமைப்பு' : 'Treatments We Provide'}
            </h2>
            <p className="text-base sm:text-lg text-[#6B716D] mt-3 max-w-2xl mx-auto leading-relaxed">
              {isTamil
                ? 'நவீன உபகரணங்கள் மற்றும் மருத்துவ ஒழுங்குடன் திட்டமிடப்பட்ட முழுமையான பல் சிகிச்சைகள்.'
                : 'Complete dental treatments for tooth pain, yellow dirt, holes, caps, and clips with gentle care.'}
            </p>
          </div>

          {/* Interactive Filter Pills Bar matching user screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8 sm:mt-10 mb-12 sm:mb-16">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#4be2c4] text-[#18211E] shadow-sm scale-[1.02]'
                      : 'bg-[#EEF2F6] hover:bg-[#E2E8F0] text-[#202421]'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Dynamic Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTreatments.map((treatment, idx) => (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl border border-[#E2E5E0] hover:border-[#276B65]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-[#276B65]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#276B65] bg-[#F0F6F5] px-2.5 py-0.5 rounded-md border border-[#276B65]/20">
                      {treatment.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#202421] group-hover:text-[#276B65] transition-colors mb-2.5 leading-snug">
                    {isTamil ? (treatment.tamilTitle || treatment.title) : treatment.title}
                  </h3>

                  <p className="text-sm text-[#6B716D] leading-relaxed mb-6 font-normal">
                    {treatment.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E5E0] flex items-center justify-between">
                  <Link
                    to={`/contact?treatment=${encodeURIComponent(treatment.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#276B65] group-hover:text-[#1E5550] transition-colors"
                  >
                    <span>{isTamil ? 'முன்பதிவு செய்ய' : 'Book Appointment'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/treatments"
                    className="text-[11px] font-medium text-[#6B716D] hover:text-[#202421] transition-colors"
                  >
                    {isTamil ? 'விவரங்கள் →' : 'Details →'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Bottom Bar */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#F2F3F0] border border-[#E2E5E0] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <strong className="block text-sm sm:text-base font-semibold text-[#202421]">
                {isTamil ? 'தனிப்பயனாக்கப்பட்ட ஆலோசனை தேவையா?' : 'Have tooth pain or doubts about treatment?'}
              </strong>
              <span className="text-xs sm:text-sm text-[#6B716D] mt-0.5 block">
                {isTamil
                  ? `எங்கள் மருத்துவரை நேரடியாக அழைக்கவும் (${CLINIC_INFO.phone}) அல்லது ஆன்லைனில் முன்பதிவு செய்யவும்.`
                  : `Call our clinic directly at +91 ${CLINIC_INFO.phone} or book your appointment online.`}
              </span>
            </div>
            <Link
              to="/contact"
              className="bg-[#276B65] hover:bg-[#1E5550] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xs transition-colors shrink-0"
            >
              <span>{isTamil ? 'நேரடி முன்பதிவு' : 'Book Appointment'}</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Brief Clinic Overview with Link to About */}
      <section className="py-20 sm:py-24 bg-[#F2F3F0] border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-[#E2E5E0] shadow-sm bg-[#FAFAF7] group">
                <img
                  src="/images/clinic-treatment-action.jpg"
                  alt="Dr. Aravinth providing attentive patient treatment at Dr. Aravinth's Dental Care, Namakkal"
                  className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
                <span>{isTamil ? 'எங்கள் நடைமுறை' : 'About Our Clinic'}</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-6">
                {isTamil ? 'உங்களுக்கு முன்னுரிமை அளிக்கும் சிகிச்சை.' : 'Friendly Tooth Care You Can Trust.'}
              </h2>
              <p className="text-base text-[#6B716D] leading-relaxed mb-6">
                {isTamil
                  ? 'நாமக்கல், சேலம் மெயின் ரோட்டில் அமைந்துள்ள அரவிந்த் பல் மருத்துவமனை, அமைதியான மற்றும் நம்பகமான மருத்துவ சூழலில் அனைத்து வயதினருக்கும் சிறப்பான சிகிச்சையை வழங்குகிறது.'
                  : "Located on Salem Main Road in Namakkal (opposite Sanu Hotel), Dr. Aravinth's Dental Care provides gentle, pain-free dental treatments in a neat and clean environment."}
              </p>
              <p className="text-base text-[#6B716D] leading-relaxed mb-8">
                {isTamil
                  ? 'கனிவான அணுகுமுறை, நோயாளி ஆறுதல், வெளிப்படையான மருத்துவ வழிகாட்டுதல் மற்றும் இயற்கையான பற்களை பாதுகாக்கும் சிகிச்சைகளுக்கு முன்னுரிமை அளிக்கிறோம்.'
                  : 'We listen patiently, treat with gentle hands, explain problems in simple words, and always try to save your natural teeth.'}
              </p>
              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#276B65] hover:text-[#1E5550] transition-colors"
                >
                  <span>{isTamil ? 'எங்கள் அணுகுமுறை பற்றி மேலும் அறிய' : 'More About Our Clinic'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Principles */}
      <section className="py-20 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
                <span>Why Choose Us</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-6">
                Gentle Care, No Fear & Fair Fees.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <div key={item.title}>
                    <span className="text-xs font-mono font-medium text-[#276B65] mb-2 block tracking-wider">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-[#202421] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B716D] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[#E2E5E0] shadow-sm bg-[#F2F3F0] group">
                <img
                  src="/images/clinic-operatory-chair.jpg"
                  alt="Our sanitized dental operatory setup at Dr. Aravinth's Dental Care, Namakkal"
                  className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  width="1000"
                  height="750"
                />
              </div>
              <div className="mt-3.5 p-4 rounded-xl bg-white border border-[#E2E5E0]">
                <span className="text-xs font-semibold text-[#202421] block mb-1">
                  {isTamil ? 'உயர் தர கிருமி நீக்கம் & பாதுகாப்பு' : '100% Machine Cleaned Tools (Zero Germs)'}
                </span>
                <p className="text-xs text-[#6B716D] leading-relaxed">
                  {isTamil
                    ? 'ஒவ்வொரு சிகிச்சைக்கும் முன்பாக அனைத்து கருவிகளும் கடுமையான ஆட்டோகிளேவ் மூலம் கிருமி நீக்கம் செய்யப்படுகின்றன.'
                    : 'Every tool is washed and sterilized with boiling hot steam machine before treating each patient.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Clinic Tour Gallery Featuring All 5 Authentic Clinic Photos */}
      <ClinicTourGallery />

      {/* Doctors Preview */}
      <section className="py-20 sm:py-24 bg-[#F2F3F0] border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
                <span>Our Doctors</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight">
                Meet Our Dental Doctors in Namakkal.
              </h2>
            </div>
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#276B65] hover:text-[#1E5550] shrink-0"
            >
              <span>More About Our Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DOCTORS.map((doc) => (
              <div
                key={doc.name}
                className="bg-white rounded-2xl border border-[#E2E5E0] p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F6F5] border border-[#276B65]/20 text-[#276B65] flex items-center justify-center font-heading font-semibold text-lg">
                      {doc.name.replace('Dr. ', '').charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-[#202421]">
                        {isTamil ? (doc.tamilName || doc.name) : doc.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#276B65]">
                        {doc.qualifications}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#202421] mb-2">{doc.role}</p>
                  <p className="text-sm text-[#6B716D] leading-relaxed mb-6">
                    {doc.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2E5E0] text-xs text-[#6B716D] flex justify-between">
                  <span className="text-[#276B65] font-medium">Certified Dental Doctor</span>
                  <span>Namakkal Clinic</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section (Bottom Area) */}
      <GoogleReviews />

      {/* Appointment CTA Banner */}
      <section className="py-20 bg-[#276B65] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Have Tooth Pain? Visit Our Clinic Today
          </h2>
          <p className="text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            Call our reception directly or message on WhatsApp for immediate relief and gentle tooth care on Salem Main Road, Namakkal.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#276B65] hover:bg-[#FAFAF7] font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-colors"
            >
              <span>Book Appointment on WhatsApp</span>
            </Link>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="bg-[#1E5550] hover:bg-[#184440] text-white border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors"
            >
              <span>Call Us: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
