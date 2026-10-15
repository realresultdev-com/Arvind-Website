import React, { useState } from 'react'
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData'

interface AppointmentSectionProps {
  selectedTreatment?: string
}

export function AppointmentSection({ selectedTreatment }: AppointmentSectionProps) {
  const [patientName, setPatientName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [treatment, setTreatment] = useState(selectedTreatment || 'General Dental Consultation & Check-up')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredSlot, setPreferredSlot] = useState<'Morning (9:30 AM - 1:30 PM)' | 'Evening (4:30 PM - 8:30 PM)'>('Morning (9:30 AM - 1:30 PM)')
  const [notes, setNotes] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [submittedState, setSubmittedState] = useState<'idle' | 'success'>('idle')

  // Keep synced if selectedTreatment prop updates
  React.useEffect(() => {
    if (selectedTreatment) {
      setTreatment(selectedTreatment)
    }
  }, [selectedTreatment])

  const validateForm = () => {
    if (!patientName.trim()) {
      setErrorMsg('Please enter your full name.')
      return false
    }
    const cleanPhone = phoneNumber.replace(/\D/g, '')
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.')
      return false
    }
    if (!preferredDate) {
      setErrorMsg('Please select your preferred appointment date.')
      return false
    }
    setErrorMsg('')
    return true
  }

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const message = `Hello Dr. Aravinth's Dental Care,\n\nI would like to request an appointment:\n\n• Patient Name: ${patientName.trim()}\n• Phone: ${phoneNumber.trim()}\n• Treatment: ${treatment}\n• Preferred Date: ${preferredDate}\n• Preferred Time: ${preferredSlot}${notes.trim() ? `\n• Notes: ${notes.trim()}` : ''}\n\nThank you!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedMessage}`
    
    setSubmittedState('success')
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleEmailBooking = () => {
    if (!validateForm()) return

    const subject = encodeURIComponent(`Appointment Request - ${patientName.trim()} (${treatment})`)
    const body = encodeURIComponent(
      `Dear Dr. Aravinth's Dental Care,\n\nI would like to request an appointment with the following details:\n\nPatient Name: ${patientName.trim()}\nPhone Number: ${phoneNumber.trim()}\nTreatment: ${treatment}\nPreferred Date: ${preferredDate}\nPreferred Time Slot: ${preferredSlot}\n\nNotes / Symptoms:\n${notes.trim() || 'None'}\n\nThank you,\n${patientName.trim()}`
    )
    window.location.href = `mailto:${CLINIC_INFO.email}?subject=${subject}&body=${body}`
  }

  // Get tomorrow's date for date-picker min attribute
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F2F3F0] border-b border-[#E2E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
            <span>Book Doctor Appointment</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#202421] tracking-tight leading-tight mb-4">
            Easy Appointment Booking.
          </h2>
          <p className="text-base text-[#6B716D] leading-relaxed">
            Call us directly, message on WhatsApp, or send your name and mobile number below. Our reception will confirm your time quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Verified Clinic Contact Details (Clean Typography) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAFAF7] rounded-2xl border border-[#E2E5E0] p-8 shadow-xs space-y-6">
              <h3 className="font-heading text-xl font-semibold text-[#202421]">
                Clinic Contact Details
              </h3>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#6B716D] block font-medium">
                  Phone / Mobile Number
                </span>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="font-semibold text-[#202421] hover:text-[#276B65] text-lg transition-colors block"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="space-y-1 pt-2 border-t border-[#E2E5E0]">
                <span className="text-xs uppercase tracking-wider text-[#6B716D] block font-medium">
                  Email
                </span>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-sm text-[#202421] hover:text-[#276B65] break-all transition-colors font-medium block"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>

              {/* Address */}
              <div className="space-y-1.5 pt-2 border-t border-[#E2E5E0]">
                <span className="text-xs uppercase tracking-wider text-[#6B716D] block font-medium">
                  Clinic Address & Landmark
                </span>
                <p className="text-sm text-[#202421] leading-relaxed">
                  {CLINIC_INFO.addressEnglish}
                </p>
                <p className="text-xs text-[#6B716D] font-normal pt-0.5">
                  {CLINIC_INFO.addressTamil}
                </p>
              </div>

              {/* Timings */}
              <div className="space-y-1.5 pt-2 border-t border-[#E2E5E0]">
                <span className="text-xs uppercase tracking-wider text-[#6B716D] block font-medium">
                  Clinic Timings
                </span>
                <div className="text-xs space-y-1">
                  {CLINIC_INFO.timings.map((t) => (
                    <div key={t.days} className="text-[#202421]">
                      <span className="font-semibold">{t.days}:</span> {t.hours}
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Links */}
              <div className="pt-4 border-t border-[#E2E5E0] flex flex-wrap gap-3">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[#202421] hover:text-[#276B65] bg-white border border-[#E2E5E0] px-4 py-2.5 rounded-lg transition-colors shadow-2xs"
                >
                  <span>Open Google Maps →</span>
                </a>

                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[#202421] hover:text-[#276B65] bg-white border border-[#E2E5E0] px-4 py-2.5 rounded-lg transition-colors shadow-2xs"
                >
                  <span>Instagram Profile →</span>
                </a>
              </div>
            </div>

            {/* Direct Call Card */}
            <div className="bg-[#276B65] text-white rounded-2xl p-6 sm:p-7 shadow-sm">
              <h4 className="font-heading font-semibold text-lg mb-1">
                Want to Book by Phone Call?
              </h4>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Call our reception directly for quick appointment or if you have severe tooth pain.
              </p>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center bg-white text-[#276B65] hover:bg-[#FAFAF7] text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-xs"
              >
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div id="appointment-form-card" className="bg-[#FAFAF7] rounded-2xl border border-[#E2E5E0] p-8 sm:p-10 shadow-xs">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold text-[#202421] mb-1">
                  Book Your Doctor Appointment
                </h3>
                <p className="text-xs sm:text-sm text-[#6B716D]">
                  Fill your details below to book easily on WhatsApp or Email.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700" role="alert">
                  <span>{errorMsg}</span>
                </div>
              )}

              {submittedState === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800" role="status">
                  <strong className="block font-semibold mb-1">Appointment Details Ready!</strong>
                  Your details are ready for WhatsApp to <strong>+91 99526 02577</strong>. Our clinic staff will confirm your time quickly.
                </div>
              )}

              <form onSubmit={handleWhatsAppBooking} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="patient-name" className="block text-xs font-semibold text-[#202421] uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E5E0] text-sm text-[#202421] placeholder:text-[#6B716D]/60 focus:bg-white focus:border-[#276B65] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="patient-phone" className="block text-xs font-semibold text-[#202421] uppercase tracking-wider mb-1.5">
                      Mobile / Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E5E0] text-sm text-[#202421] placeholder:text-[#6B716D]/60 focus:bg-white focus:border-[#276B65] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Treatment Selection */}
                <div>
                  <label htmlFor="treatment-select" className="block text-xs font-semibold text-[#202421] uppercase tracking-wider mb-1.5">
                    Select Tooth Problem / Treatment
                  </label>
                  <select
                    id="treatment-select"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E5E0] text-sm text-[#202421] focus:bg-white focus:border-[#276B65] focus:outline-none transition-colors"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                    <option value="General Tooth Checkup / Other Problem">General Tooth Checkup / Other Problem</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="preferred-date" className="block text-xs font-semibold text-[#202421] uppercase tracking-wider mb-1.5">
                      Select Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="preferred-date"
                      type="date"
                      min={minDate}
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E5E0] text-sm text-[#202421] focus:bg-white focus:border-[#276B65] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Preferred Slot */}
                  <div>
                    <label htmlFor="preferred-slot" className="block text-xs font-semibold text-[#202421] uppercase tracking-wider mb-1.5">
                      Select Morning or Evening Time
                    </label>
                    <select
                      id="preferred-slot"
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E5E0] text-sm text-[#202421] focus:bg-white focus:border-[#276B65] focus:outline-none transition-colors"
                    >
                      <option value="Morning (9:30 AM - 1:30 PM)">Morning: 9:30 AM – 1:30 PM</option>
                      <option value="Evening (4:30 PM - 8:30 PM)">Evening: 4:30 PM – 8:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="appointment-notes" className="block text-xs font-semibold text-[#202421] uppercase tracking-wider mb-1.5">
                    Tell Us Your Tooth Problem (Optional)
                  </label>
                  <textarea
                    id="appointment-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Briefly tell us your tooth pain, swelling, bleeding gums, or other problem..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E5E0] text-sm text-[#202421] placeholder:text-[#6B716D]/60 focus:bg-white focus:border-[#276B65] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center bg-[#276B65] hover:bg-[#1E5550] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#276B65]/40 active:scale-[0.99] cursor-pointer"
                  >
                    <span>Book via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailBooking}
                    className="inline-flex items-center justify-center bg-white hover:bg-[#F2F3F0] text-[#202421] border border-[#E2E5E0] text-sm font-medium px-4 py-3 rounded-lg transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>Send via Email</span>
                  </button>
                </div>

                <p className="text-[11px] text-[#6B716D] text-center pt-1 leading-normal">
                  We will call or message you on WhatsApp to confirm your appointment time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
