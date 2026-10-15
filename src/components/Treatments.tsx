import { ArrowRight } from 'lucide-react'
import { TREATMENTS, type Treatment } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'

interface TreatmentsProps {
  onSelectTreatment: (treatmentTitle: string) => void
}

export function Treatments({ onSelectTreatment }: TreatmentsProps) {
  const { isTamil } = useLanguage()
  return (
    <section id="treatments" className="py-20 sm:py-28 bg-[#F2F3F0] border-b border-[#E2E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
            <span>Clinical Treatments & Services</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-4">
            Comprehensive Dental Care.
          </h2>
          <p className="text-base text-[#6B716D] leading-relaxed">
            From essential routine maintenance to specialized restorative and orthodontic consultations, all treatments are planned with meticulous clinical care.
          </p>
        </div>

        {/* Structured Editorial Grid with subtle borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E5E0] border border-[#E2E5E0] rounded-2xl overflow-hidden shadow-xs">
          {TREATMENTS.map((treatment: Treatment, idx: number) => (
            <div
              key={treatment.id}
              className="bg-[#FAFAF7] p-8 flex flex-col justify-between hover:bg-white transition-colors duration-200 group"
            >
              <div>
                <span className="text-xs font-mono font-medium text-[#276B65] block mb-4 tracking-wider">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="mb-3">
                  <h3 className="font-heading text-lg font-semibold text-[#202421] leading-snug group-hover:text-[#276B65] transition-colors">
                    {isTamil ? (treatment.tamilTitle || treatment.title) : treatment.title}
                  </h3>
                </div>

                <p className="text-sm text-[#6B716D] leading-relaxed mb-8 font-normal">
                  {treatment.summary}
                </p>
              </div>

              <button
                onClick={() => onSelectTreatment(treatment.title)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#276B65] hover:text-[#1E5550] transition-colors text-left pt-4 border-t border-[#E2E5E0] group-hover:border-[#276B65]/30 cursor-pointer"
                aria-label={`Book consultation for ${treatment.title}`}
              >
                <span>Request Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Reassuring note */}
        <div className="mt-8 text-center text-xs text-[#6B716D]">
          <span>Need guidance on a specific condition? </span>
          <a
            href="tel:9952602577"
            className="text-[#276B65] hover:underline font-medium"
          >
            Call us directly at 99526 02577
          </a>
          <span> for personalized advice before booking.</span>
        </div>
      </div>
    </section>
  )
}
