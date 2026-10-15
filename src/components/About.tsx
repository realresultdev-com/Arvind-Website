export function About() {
  const commitments = [
    {
      title: '100% Pain-Free & Gentle Care',
      description: 'We know dental treatment can make you scared. Our doctors treat you with gentle hands and patience so you feel no fear and zero pain.'
    },
    {
      title: 'Simple Explanation & Honest Advice',
      description: 'We show your tooth problem directly on X-ray and explain in simple words. We tell you the real cost upfront with zero hidden charges.'
    },
    {
      title: 'Saving Your Natural Teeth First',
      description: 'We always try our best to save your original teeth with filling or root canal. We never remove a tooth if it can be saved safely.'
    },
    {
      title: '100% Machine-Boiled & Clean Tools',
      description: 'Every single tool is cleaned and sterilized with boiling steam machine for every patient. 100% clean and safe from infection.'
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
              Patient consultation and treatment in our clean clinic room on Salem Main Road, Namakkal
            </p>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
              <span>About Dr. Aravinth's Dental Care</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-6">
              Friendly Tooth Care You Can Trust.
            </h2>

            <div className="space-y-4 text-base text-[#6B716D] leading-relaxed mb-8">
              <p>
                At Dr. Aravinth's Dental Care in Namakkal, we treat every patient like our own family. Located on Salem Main Road (opposite Sanu Hotel), our clinic is known for gentle, pain-free dental treatments.
              </p>
              <p>
                Whether you have sudden tooth pain, need teeth cleaning, or want teeth clips for your children, we give honest advice with clear, fair charges and zero unwanted treatments.
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
