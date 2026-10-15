import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ClinicTourGallery } from '../components/ClinicTourGallery'

export function AboutPage() {
  const { isTamil } = useLanguage()
  const commitments = [
    {
      number: '01',
      title: 'Comfort-Centered Care & Anxiety Management',
      description: 'We understand that visiting the dental clinic can cause unease. Our entire clinical procedure is designed around gentle touch, clear communication at each step, and respectful pacing that prioritizes your comfort.'
    },
    {
      number: '02',
      title: 'Transparent Diagnosis & Honest Guidance',
      description: 'Before any treatment begins, we explain the condition of your teeth and gums in plain language. We outline all viable options, treatment timelines, and recommendations so you can make informed choices with complete peace of mind.'
    },
    {
      number: '03',
      title: 'Conservative & Natural Tooth Preservation',
      description: 'Our primary clinical objective is always to protect and preserve your natural dental structure. We practice conservative dentistry, recommending procedures only when they genuinely benefit your oral health.'
    },
    {
      number: '04',
      title: 'Rigorous Autoclave Sterilization Protocols',
      description: 'Patient safety is non-negotiable. Every surgical and examination tool undergoes multi-stage cleaning and medical-grade autoclave sterilization before every patient consultation.'
    }
  ]

  return (
    <div className="bg-[#FAFAF7]">
      {/* Page Header */}
      <section className="py-16 sm:py-24 bg-[#F2F3F0] border-b border-[#E2E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
            <span>About Dr. Aravinth's Dental Care</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-[#202421] tracking-tight mb-6">
            Care That Puts You First.
          </h1>
          <p className="text-lg text-[#6B716D] leading-relaxed max-w-2xl mx-auto">
            A patient-focused dental practice located on Salem Main Road in Namakkal, dedicated to ethical dentistry, clinical excellence, and lifelong oral wellness.
          </p>
        </div>
      </section>

      {/* Main Narrative & Consultation Photo */}
      <section className="py-20 sm:py-28 border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-[#E2E5E0] shadow-sm bg-[#F2F3F0] group">
                <img
                  src="/images/clinic-treatment-action.jpg"
                  alt="Dr. Aravinth providing attentive patient treatment at Dr. Aravinth's Dental Care, Namakkal"
                  className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  width="1200"
                  height="900"
                />
              </div>
              <p className="mt-3 text-xs text-[#6B716D]">
                {isTamil
                  ? 'சேலம் மெயின் ரோட்டில் அமைந்துள்ள எங்கள் மருத்துவமனையில் நவீன கருவிகளுடன் கூடிய அமைதியான சிகிச்சை சூழல்.'
                  : 'Consultation and clinical treatment conducted with empathy, attentiveness, and modern precision.'}
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#202421] tracking-tight leading-snug">
                Building Trust Through Ethical, Patient-Centered Dentistry
              </h2>
              <div className="space-y-4 text-base text-[#6B716D] leading-relaxed">
                <p>
                  {isTamil
                    ? 'அரவிந்த் பல் மருத்துவமனையில், பல் மருத்துவரை அணுகுவது ஒரு இதமான மற்றும் மனநிறைவான அனுபவமாக அமைய வேண்டும் என்பதை நாங்கள் உறுதியாக நம்புகிறோம். நாமக்கல், சேலம் மெயின் ரோட்டில் சனு ஹோட்டல் எதிரே அமைந்துள்ள எங்கள் மருத்துவமனை அனைத்து வயதினருக்கும் சிறந்த சிகிச்சையை வழங்குகிறது.'
                    : "At Dr. Aravinth's Dental Care, we believe that visiting the dentist should be a comfortable and reassuring experience. Conveniently located opposite Sanu Hotel on Salem Main Road, Namakkal, our clinic serves children, adults, and seniors across the region."}
                </p>
                <p>
                  We recognize that no two smiles are identical. Our dental surgeons take the time to evaluate each case thoroughly, listening closely to patient concerns and presenting realistic, clinically validated solutions rather than rushed recommendations.
                </p>
                <p>
                  From routine dental cleanings and tooth-colored restorations to advanced root canal treatments and orthodontic consultations, every procedure is carried out with precision, modern techniques, and meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Commitments */}
      <section className="py-20 sm:py-28 bg-[#F2F3F0] border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
              <span>Our Practice Standards</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-4">
              Our Core Clinical Commitments.
            </h2>
            <p className="text-base text-[#6B716D] leading-relaxed">
              These fundamental standards guide every interaction, consultation, and treatment in our clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((c) => (
              <div
                key={c.number}
                className="bg-[#FAFAF7] p-8 sm:p-10 rounded-2xl border border-[#E2E5E0]"
              >
                <span className="text-xs font-mono font-medium text-[#276B65] block mb-3 tracking-wider">
                  {c.number}
                </span>
                <h3 className="font-heading text-lg font-semibold text-[#202421] mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-[#6B716D] leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sterilization & Clinical Environment */}
      <section className="py-20 sm:py-28 border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold">
                <span>Infection Control</span>
              </div>
              <h2 className="font-heading text-3xl font-semibold text-[#202421] tracking-tight">
                Modern Sterilization & Hygiene Protocol
              </h2>
              <p className="text-base text-[#6B716D] leading-relaxed">
                We strictly observe clinical sterilization standards to maintain an immaculate environment for every patient.
              </p>
              <ul className="space-y-3 text-sm text-[#6B716D]">
                <li className="flex items-start gap-3">
                  <span className="text-[#276B65] font-bold">—</span>
                  <span><strong>Autoclaved Instruments:</strong> All diagnostic and surgical instruments are packaged and autoclaved under monitored temperature and pressure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#276B65] font-bold">—</span>
                  <span><strong>Disinfected Operatory Surfaces:</strong> The dental chair and operatory surfaces are thoroughly sanitized between each patient appointment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#276B65] font-bold">—</span>
                  <span><strong>Single-Use Disposables:</strong> Syringes, suction tips, patient bibs, and gloves are strictly single-use and disposed of in accordance with healthcare guidelines.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-[#E2E5E0] shadow-sm bg-[#F2F3F0] group">
                <img
                  src="/images/clinic-operatory-chair.jpg"
                  alt="Sterilized clinical operatory and dental chair setup at Dr. Aravinth's Dental Care, Namakkal"
                  className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  width="1000"
                  height="750"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Clinic Tour Gallery */}
      <ClinicTourGallery />

      {/* CTA Section */}
      <section className="py-16 bg-[#276B65] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">
            Experience Gentle, Professional Dental Care
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto">
            Book an appointment with Dr. Aravinth and our clinical team today.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="bg-white text-[#276B65] hover:bg-[#FAFAF7] font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-colors inline-block"
            >
              <span>Schedule a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
