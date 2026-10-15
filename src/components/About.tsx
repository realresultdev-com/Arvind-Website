export function About() {
  const commitments = [
    {
      title: 'Comfort-Centered Environment',
      description: 'Dental care designed to ease anxiety, using gentle techniques and respectful pacing during every step of your appointment.'
    },
    {
      title: 'Transparent Diagnoses',
      description: 'We take the time to show and explain your oral condition clearly, discussing all viable options without pressure.'
    },
    {
      title: 'Conservative Treatment Philosophy',
      description: 'Preserving your natural teeth is our primary clinical priority. We only recommend procedures that serve your long-term health.'
    },
    {
      title: 'Rigorous Clinical Hygiene',
      description: 'Strict adherence to sterilization and infection-control guidelines to safeguard every patient who sits in our chair.'
    }
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAF7] border-b border-[#E2E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-[#E2E5E0] shadow-sm bg-[#F2F3F0] group">
              <img
                src="/images/clinic-treatment-action.jpg"
                alt="Dr. Aravinth providing attentive patient treatment at Dr. Aravinth's Dental Care, Namakkal"
                className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                width="1200"
                height="900"
              />
            </div>
            <p className="mt-3 text-xs text-[#6B716D] px-1">
              Patient consultation and treatment conducted in our modern operatory room on Salem Main Road
            </p>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
              <span>About Dr. Aravinth's Dental Care</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-6">
              Care That Puts You First.
            </h2>

            <div className="space-y-4 text-base text-[#6B716D] leading-relaxed mb-8">
              <p>
                At Dr. Aravinth's Dental Care, we believe that exceptional dental treatment begins with listening. Located on Salem Main Road in Namakkal, our clinic was established to provide families with thoughtful, dependable dental care in a warm and welcoming environment.
              </p>
              <p>
                Whether you visit us for a routine preventative cleaning, tooth pain relief, or orthodontic guidance, our approach remains consistent: thorough clinical evaluation, honest guidance, and treatment delivered with genuine care for your comfort.
              </p>
            </div>

            {/* Structured Commitments (Clean Typographic Layout, No Icons) */}
            <div className="border-t border-[#E2E5E0] divide-y divide-[#E2E5E0]">
              {commitments.map((item, idx) => (
                <div key={item.title} className="py-4.5 flex items-start gap-4">
                  <span className="text-xs font-mono font-medium text-[#276B65] shrink-0 mt-0.5 tracking-wider">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#202421] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B716D] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
