import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TREATMENTS, CLINIC_INFO, type Treatment } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'

export function TreatmentsPage() {
  const { isTamil } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'preventive', label: 'Preventive Care' },
    { id: 'restorative', label: 'Restorative & Endodontics' },
    { id: 'surgical', label: 'Extractions & Surgery' },
    { id: 'orthodontic', label: 'Orthodontics & Alignment' },
  ]

  const filteredTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory)

  return (
    <div className="bg-[#FAFAF7]">
      {/* Page Header */}
      <section className="py-16 sm:py-24 bg-[#F2F3F0] border-b border-[#E2E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
            <span>Specialized Clinical Procedures</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-[#202421] tracking-tight mb-6">
            Dental Treatments & Services.
          </h1>
          <p className="text-lg text-[#6B716D] leading-relaxed max-w-2xl mx-auto">
            Comprehensive oral care delivered with precision, gentle touch, and evidence-based clinical practices in Namakkal.
          </p>
        </div>
      </section>

      {/* Category Filter Pills (Apple-style minimal) */}
      <section className="py-8 bg-[#FAFAF7] border-b border-[#E2E5E0] sticky top-20 z-30 backdrop-blur-md bg-[#FAFAF7]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#276B65] text-white shadow-xs'
                    : 'bg-[#F2F3F0] text-[#6B716D] hover:text-[#202421] hover:bg-[#E2E5E0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Catalog (Editorial Layout) */}
      <section className="py-16 sm:py-24 border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTreatments.map((treatment: Treatment, idx: number) => (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl border border-[#E2E5E0] p-8 sm:p-10 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-medium text-[#276B65] tracking-wider">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#6B716D] font-medium bg-[#F2F3F0] px-2.5 py-0.5 rounded-md">
                      {treatment.category}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#202421] mb-3">
                    {isTamil ? (treatment.tamilTitle || treatment.title) : treatment.title}
                  </h2>

                  <p className="text-sm font-medium text-[#202421] leading-relaxed mb-3">
                    {treatment.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-[#6B716D] leading-relaxed mb-8">
                    {treatment.details}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2E5E0] flex items-center justify-between">
                  <span className="text-xs text-[#6B716D]">
                    Salem Main Road, Namakkal
                  </span>
                  <Link
                    to={`/contact?treatment=${encodeURIComponent(treatment.title)}`}
                    className="inline-flex items-center text-xs font-semibold text-[#276B65] hover:text-[#1E5550]"
                  >
                    <span>Request Consultation →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Need help choosing card */}
          <div className="mt-16 p-8 rounded-2xl bg-[#F2F3F0] border border-[#E2E5E0] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="font-heading font-semibold text-lg text-[#202421]">
                Unsure which treatment is right for your symptoms?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B716D]">
                Schedule an initial oral check-up. We will evaluate your teeth, discuss all available options, and answer your questions before recommending any procedure.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-[#276B65] hover:bg-[#1E5550] text-white text-xs font-semibold px-5 py-3 rounded-lg shrink-0 transition-colors"
            >
              <span>Schedule Check-up</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Direct Phone Assistance Banner */}
      <section className="py-16 bg-[#202421] text-[#FAFAF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
            Have questions about a specific dental procedure?
          </h2>
          <p className="text-xs sm:text-sm text-[#A2A8A3] max-w-xl mx-auto">
            Our clinical desk is available Monday through Saturday to answer questions about treatment timelines and appointment availability.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center text-sm font-semibold text-white bg-[#276B65] hover:bg-[#1E5550] px-5 py-3 rounded-lg transition-colors"
            >
              <span>Call Us Directly: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
