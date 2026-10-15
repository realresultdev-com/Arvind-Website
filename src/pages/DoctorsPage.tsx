import { Link } from 'react-router-dom'
import { DOCTORS } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'

export function DoctorsPage() {
  const { isTamil } = useLanguage()
  return (
    <div className="bg-[#FAFAF7]">
      {/* Page Header */}
      <section className="py-16 sm:py-24 bg-[#F2F3F0] border-b border-[#E2E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
            <span>Clinical Leadership</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-[#202421] tracking-tight mb-6">
            Meet Our Dental Doctors.
          </h1>
          <p className="text-lg text-[#6B716D] leading-relaxed max-w-2xl mx-auto">
            Led by registered dental surgeons dedicated to evidence-based practice, patient comfort, and transparent communication in Namakkal.
          </p>
        </div>
      </section>

      {/* Doctors Profiles Section */}
      <section className="py-20 sm:py-28 border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {DOCTORS.map((doc) => (
              <div
                key={doc.name}
                className="bg-white rounded-3xl border border-[#E2E5E0] p-8 sm:p-12 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  {/* Doctor Monogram & Verified Info */}
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#F0F6F5] border border-[#276B65]/20 text-[#276B65] flex items-center justify-center font-heading font-semibold text-2xl shrink-0">
                      {doc.name.replace('Dr. ', '').charAt(0)}
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-semibold text-[#202421]">
                        {isTamil ? (doc.tamilName || doc.name) : doc.name}
                      </h2>
                      <span className="inline-block mt-2 text-xs font-semibold tracking-wide text-[#276B65] bg-[#F0F6F5] px-3 py-1 rounded-md border border-[#276B65]/20">
                        {doc.qualifications}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-[#6B716D] leading-relaxed mb-8">
                    <div>
                      <span className="text-xs font-semibold text-[#202421] block uppercase tracking-wider mb-1">
                        Clinical Role & Focus
                      </span>
                      <strong className="text-base text-[#202421] font-semibold block mb-2">
                        {doc.role}
                      </strong>
                      <p>{doc.description}</p>
                    </div>

                    <div className="pt-4 border-t border-[#E2E5E0]">
                      <span className="text-xs font-semibold text-[#202421] block uppercase tracking-wider mb-2">
                        Approach to Patient Care
                      </span>
                      <p>
                        Believes in attentive, unrushed consultations where patients are encouraged to express concerns freely. Every recommended treatment plan is customized to preserve natural oral structures while ensuring complete patient comfort.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E2E5E0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#6B716D]">
                    <span className="font-medium text-[#276B65] block">Registered Dental Surgeon</span>
                    <span>Namakkal Clinic</span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-xs font-semibold text-[#276B65] hover:text-[#1E5550]"
                  >
                    <span>{isTamil ? `${doc.tamilName || doc.name} முன்பதிவு` : `Request Appointment with ${doc.name}`} →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Consultation Suite Showcase */}
          <div className="mt-16 bg-white rounded-3xl border border-[#E2E5E0] p-6 sm:p-8 overflow-hidden shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-[#E2E5E0] bg-[#F2F3F0] group">
                  <img
                    src="/images/clinic-waiting-lounge.jpg"
                    alt="Dr. P. Aravinth and Dr. Sangavi Aravinth Consultation Suite at Dr. Aravinth's Dental Care, Namakkal"
                    className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                    width="1000"
                    height="750"
                  />

                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-2">
                  <span>{isTamil ? 'உண்மையான மருத்துவமனை அறை' : 'Verified Clinical Practice'}</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#202421] mb-3">
                  {isTamil ? 'நேரடி மருத்துவ ஆலோசனை மற்றும் பரிசோதனை' : 'Direct Doctor Consultations in a Private Setting'}
                </h3>
                <p className="text-sm text-[#6B716D] leading-relaxed mb-4">
                  {isTamil
                    ? 'சேலம் மெயின் ரோட்டில் அமைந்துள்ள எங்கள் மருத்துவமனையில் நோயாளிகளுக்கு அமைதியான, பிரத்தியேக ஆலோசனை அறையில் விரிவான பரிசோதனை மற்றும் ஆலோசனை வழங்கப்படுகிறது.'
                    : "At our Salem Main Road clinic, consultations are held privately with Dr. P. Aravinth and Dr. Sangavi Aravinth to ensure confidentiality, unhurried diagnosis, and attentive patient discussions."}
                </p>
                <div className="p-4 rounded-xl bg-[#F0F6F5] border border-[#276B65]/20 text-xs text-[#276B65] font-medium">
                  {isTamil
                    ? 'பல் மருத்துவ கவுன்சில் விதிமுறைகளின்படி பதிவு செய்யப்பட்ட பட்டங்கள் மட்டுமே இங்கு குறிப்பிடப்பட்டுள்ளன.'
                    : 'Operating strictly under Dental Council ethics with verified degrees and evidence-based clinical protocols.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#276B65] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-white">
            Schedule a Consultation with Our Doctors
          </h2>
          <p className="text-sm text-white/85 max-w-lg mx-auto">
            Book online or call directly to discuss your dental health questions.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#276B65] hover:bg-[#FAFAF7] font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-colors inline-block"
            >
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
