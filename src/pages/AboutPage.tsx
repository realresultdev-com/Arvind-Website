import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ClinicTourGallery } from '../components/ClinicTourGallery'

export function AboutPage() {
  const { isTamil } = useLanguage()
  const commitments = [
    {
      number: '01',
      title: '100% Pain-Free & Gentle Treatment',
      description: 'Many people feel scared or nervous to visit a dentist. We make sure you feel zero fear. Our doctors treat you very gently, explain every step beforehand, and give you comfortable breaks.'
    },
    {
      number: '02',
      title: 'Simple Explanation & Honest Advice',
      description: 'Before starting any treatment, we explain your tooth problem in simple words. We clearly tell you the cost and time, and recommend only what is truly necessary for your teeth.'
    },
    {
      number: '03',
      title: 'Saving Your Natural Teeth First',
      description: 'Our first goal is always to save your natural tooth whenever possible through cleaning, filling, or root canal. We advise removing a tooth only when there is no other choice.'
    },
    {
      number: '04',
      title: '100% Clean & Machine-Boiled Tools (Zero Germs)',
      description: 'Your safety is our top priority. Every tool is machine-cleaned and steam-sterilized (autoclaved) at high heat before each patient. Needles and cups are always single-use and thrown away.'
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
            Caring Tooth Care For Your Family.
          </h1>
          <p className="text-lg text-[#6B716D] leading-relaxed max-w-2xl mx-auto">
            A friendly dental clinic on Salem Main Road in Namakkal, helping patients smile without pain, fear, or unnecessary costs.
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
                  : 'Gentle dental checkup and treatment in a clean, quiet environment.'}
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#202421] tracking-tight leading-snug">
                Honest, Pain-Free Dental Care You Can Trust
              </h2>
              <div className="space-y-4 text-base text-[#6B716D] leading-relaxed">
                <p>
                  {isTamil
                    ? 'அரவிந்த் பல் மருத்துவமனையில், பல் மருத்துவரை அணுகுவது ஒரு இதமான மற்றும் மனநிறைவான அனுபவமாக அமைய வேண்டும் என்பதை நாங்கள் உறுதியாக நம்புகிறோம். நாமக்கல், சேலம் மெயின் ரோட்டில் சனு ஹோட்டல் எதிரே அமைந்துள்ள எங்கள் மருத்துவமனை அனைத்து வயதினருக்கும் சிறந்த சிகிச்சையை வழங்குகிறது.'
                    : "At Dr. Aravinth's Dental Care, we believe that visiting the dentist should be a comfortable and peaceful experience. Located opposite Sanu Hotel on Salem Main Road, Namakkal, our clinic welcomes children, adults, and elderly patients."}
                </p>
                <p>
                  We understand that every patient's tooth problem is different. Our doctors listen patiently to your problem, check your teeth carefully, and explain the best treatment options in simple words before starting anything.
                </p>
                <p>
                  From teeth cleaning and cavity filling to root canal (saving painful teeth) and teeth clip (straightening), we perform all treatments gently with modern equipment.
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
              <span>Our Promises</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-4">
              Our 4 Core Promises to You.
            </h2>
            <p className="text-base text-[#6B716D] leading-relaxed">
              We follow these simple principles every day for every patient who visits our clinic.
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
                <span>Clean & Safe Tools</span>
              </div>
              <h2 className="font-heading text-3xl font-semibold text-[#202421] tracking-tight">
                100% Clean & Germ-Free Clinic Environment
              </h2>
              <p className="text-base text-[#6B716D] leading-relaxed">
                We keep all dental chairs and tools 100% clean and germ-free so you and your family are completely safe.
              </p>
              <ul className="space-y-3 text-sm text-[#6B716D]">
                <li className="flex items-start gap-3">
                  <span className="text-[#276B65] font-bold">—</span>
                  <span><strong>Machine-Boiled Tools:</strong> All instruments are washed, sealed in pouches, and steam-boiled (autoclaved) at high heat before touching your teeth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#276B65] font-bold">—</span>
                  <span><strong>Sanitized Dental Chairs:</strong> The treatment chair, light, and tables are sprayed and wiped clean after every single patient.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#276B65] font-bold">—</span>
                  <span><strong>New Single-Use Items:</strong> Needles, cups, gloves, and patient sheets are used only once and thrown away immediately.</span>
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
            Get Gentle, Pain-Free Tooth Treatment Today
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto">
            Book your doctor appointment with Dr. Aravinth and team today.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="bg-white text-[#276B65] hover:bg-[#FAFAF7] font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-colors inline-block"
            >
              <span>Book Doctor Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
