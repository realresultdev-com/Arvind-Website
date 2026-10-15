import { WHY_CHOOSE_US } from '../data/clinicData'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAFAF7] border-b border-[#E2E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Strengths Editorial Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
              <span>Our Practice Principles</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-6">
              A Thoughtful Dental Experience.
            </h2>

            <p className="text-base text-[#6B716D] leading-relaxed mb-10 max-w-2xl">
              We focus on building lasting relationships with our patients through honest clinical standards, respectful listening, and uncompromising hygiene.
            </p>

            {/* 2-Column Balanced Grid with clean editorial numbering */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={item.title} className="flex flex-col">
                  <span className="text-xs font-mono font-medium text-[#276B65] mb-2 block tracking-wider">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-[#202421] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B716D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Practical Location Advantage (Clean, without decorative icon box) */}
            <div className="mt-10 p-6 rounded-xl bg-[#F2F3F0] border border-[#E2E5E0]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#276B65] block font-semibold mb-1">
                Accessibility
              </span>
              <strong className="text-[#202421] block font-semibold text-sm mb-1">
                Central & Convenient Location in Namakkal
              </strong>
              <p className="text-xs sm:text-sm text-[#6B716D] leading-relaxed">
                Located on Salem Main Road, directly opposite Sanu Hotel, with convenient access and parking for patients across Namakkal and surrounding areas.
              </p>
            </div>
          </div>

          {/* Right Column: Authentic Hygiene Photography */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-[#E2E5E0] shadow-sm bg-[#F2F3F0] group">
                <img
                  src="/images/clinic-operatory-chair.jpg"
                  alt="Autoclaved sterilized clinical instruments and dental operatory chair at Dr. Aravinth's Dental Care"
                  className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  width="1000"
                  height="750"
                />
              </div>

              {/* Informative Caption (Clean text, no icon box) */}
              <div className="mt-3.5 p-4 rounded-xl bg-white border border-[#E2E5E0]">
                <span className="text-xs font-semibold text-[#202421] block mb-1">
                  Uncompromised Infection Control
                </span>
                <p className="text-xs text-[#6B716D] leading-relaxed">
                  Every surgical instrument undergoes multi-stage sterilization and autoclaving before each clinical procedure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
