import { DOCTORS } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'

export function Team() {
  const { isTamil } = useLanguage()
  return (
    <section id="doctors" className="py-20 sm:py-28 bg-[#FAFAF7] border-b border-[#E2E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
            <span>Clinical Leadership</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-4">
            Meet Our Dental Doctors.
          </h2>
          <p className="text-base text-[#6B716D] leading-relaxed">
            Led by qualified dental surgeons committed to gentle, evidence-based clinical practice and ethical patient care in Namakkal.
          </p>
        </div>

        {/* Doctors Grid (Clean Editorial Presentation, No Decorative Icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {DOCTORS.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-2xl border border-[#E2E5E0] p-8 sm:p-10 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-sm"
            >
              <div>
                {/* Doctor Monogram */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#F0F6F5] border border-[#276B65]/20 text-[#276B65] flex items-center justify-center font-heading font-semibold text-xl">
                    {doc.name.replace('Dr. ', '').charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#202421]">
                      {isTamil ? (doc.tamilName || doc.name) : doc.name}
                    </h3>
                    <span className="inline-block mt-1 text-xs font-semibold tracking-wide text-[#276B65] bg-[#F0F6F5] px-2.5 py-0.5 rounded-md border border-[#276B65]/20">
                      {doc.qualifications}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-[#202421] mb-2">
                    {doc.role}
                  </div>
                  <p className="text-sm text-[#6B716D] leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2E5E0] flex items-center justify-between text-xs text-[#6B716D]">
                <span className="font-medium text-[#276B65]">Registered Dental Surgeon</span>
                <span>Namakkal Clinic</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
