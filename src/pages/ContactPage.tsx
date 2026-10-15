import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Navigation, ExternalLink, Clock, Phone } from 'lucide-react'
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData'
import { useLanguage } from '../context/LanguageContext'

export function ContactPage() {
  const { isTamil } = useLanguage()
  const [searchParams] = useSearchParams()
  const initialTreatment = searchParams.get('treatment') || 'General Dental Consultation & Check-up'

  const [patientName, setPatientName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [treatment, setTreatment] = useState(initialTreatment)
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredSlot, setPreferredSlot] = useState<'Morning (9:30 AM - 1:30 PM)' | 'Evening (4:30 PM - 8:30 PM)'>('Morning (9:30 AM - 1:30 PM)')
  const [notes, setNotes] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [submittedState, setSubmittedState] = useState<'idle' | 'success'>('idle')

  useEffect(() => {
    const urlTreatment = searchParams.get('treatment')
    if (urlTreatment) {
      setTreatment(urlTreatment)
    }
  }, [searchParams])

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
    <div className="bg-[#FAFAF7]">
      {/* Page Header */}
      <section className="py-16 sm:py-24 bg-[#F2F3F0] border-b border-[#E2E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-wider text-[#276B65] font-semibold mb-3">
            <span>{isTamil ? 'முன்பதிவு & மருத்துவமனை விவரங்கள்' : 'Book Doctor Appointment'}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-[#202421] tracking-tight mb-6">
            {isTamil ? 'மருத்துவரை தொடர்புகொள்ள & முன்பதிவு செய்ய.' : 'Contact & Book Doctor Appointment.'}
          </h1>
          <p className="text-lg text-[#6B716D] leading-relaxed max-w-2xl mx-auto">
            {isTamil
              ? 'நாமக்கல், சேலம் மெயின் ரோட்டில் உள்ள எங்கள் மருத்துவமனையில் உங்கள் பரிசோதனையை பதிவு செய்யுங்கள்.'
              : 'Book your visit at our clinic on Salem Main Road in Namakkal, or call our phone directly.'}
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 sm:py-28 border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Verified Clinic Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Authentic Clinic Reception Image */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E2E5E0] bg-[#F2F3F0] shadow-xs group">
                <img
                  src="/images/clinic-reception-desk.jpg"
                  alt="Dr. Aravinth's Dental Care Reception Desk & Clinic Entrance in Namakkal"
                  className="w-full h-auto aspect-[16/10] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  width="800"
                  height="500"
                />

              </div>

              <div className="bg-white rounded-2xl border border-[#E2E5E0] p-8 shadow-xs space-y-6">
                <h2 className="font-heading text-xl font-semibold text-[#202421]">
                  {isTamil ? 'மருத்துவமனை விவரங்கள்' : 'Clinic Contact Details'}
                </h2>

                {/* Phone */}
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#6B716D] block font-medium">
                    {isTamil ? 'நேரடி தொலைபேசி எண்' : 'Phone / Mobile Number'}
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
                    {isTamil ? 'மின்னஞ்சல்' : 'Email Address'}
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
                    {isTamil ? 'முகவரி' : 'Clinic Address & Landmark'}
                  </span>
                  <p className="text-sm text-[#202421] leading-relaxed">
                    {isTamil ? CLINIC_INFO.addressTamil : CLINIC_INFO.addressEnglish}
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

                {/* Direct External Links */}
                <div className="pt-4 border-t border-[#E2E5E0] flex flex-wrap gap-3">
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#202421] hover:text-[#276B65] bg-[#F2F3F0] hover:bg-[#E2E5E0] px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <span>Open in Google Maps →</span>
                  </a>

                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#202421] hover:text-[#276B65] bg-[#F2F3F0] hover:bg-[#E2E5E0] px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <span>Instagram Profile →</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone Call Card */}
              <div className="bg-[#276B65] text-white rounded-2xl p-7 shadow-sm">
                <h3 className="font-heading font-semibold text-lg mb-1">
                  Want to Book by Phone Call?
                </h3>
                <p className="text-xs text-white/85 leading-relaxed mb-4">
                  Call our clinic directly for quick booking, severe tooth pain, or help finding our clinic.
                </p>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-block bg-white text-[#276B65] hover:bg-[#FAFAF7] text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#E2E5E0] p-8 sm:p-10 shadow-xs">
                <div className="mb-6">
                  <h2 className="font-heading text-xl font-semibold text-[#202421] mb-1">
                    Book Your Doctor Appointment
                  </h2>
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
                      {isTamil ? 'தேவையான பல் சிகிச்சை' : 'Select Tooth Problem / Treatment'}
                    </label>
                    <select
                      id="treatment-select"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E5E0] text-sm text-[#202421] focus:bg-white focus:border-[#276B65] focus:outline-none transition-colors"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.title}>
                          {isTamil ? (t.tamilTitle || t.title) : t.title}
                        </option>
                      ))}
                      <option value="General Checkup / Other Problem">
                        {isTamil ? 'பொது ஆலோசனை / பிற' : 'General Checkup / Other Problem'}
                      </option>
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

      {/* Interactive Google Map Section */}
      <section id="clinic-location" className="py-16 sm:py-24 bg-white border-b border-[#E2E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6F5] border border-[#276B65]/20 text-xs font-semibold text-[#276B65] mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>{isTamil ? 'மருத்துவமனை அமைவிடம்' : 'Clinic Location on Google Maps'}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#202421] tracking-tight">
                {isTamil ? 'நேரடியாக மருத்துவமனைக்கு வர வழிகாட்டுதல்' : 'Easy to Reach Location in Namakkal.'}
              </h2>
              <p className="text-sm text-[#6B716D] mt-2 max-w-xl">
                {isTamil
                  ? 'நாமக்கல் சேலம் மெயின் ரோட்டில், சனு ஹோட்டல் எதிரில் உள்ள முதல் தளத்தில் அமைந்துள்ளது.'
                  : 'Located on Salem Main Road, right opposite Sanu Hotel, Namakkal. Easy bike and car parking available.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#276B65] hover:bg-[#1E5550] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>{isTamil ? 'வழிகாட்டுதலைப் பெறுக (GPS)' : 'Get Directions on Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Map Frame Card */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-[#E2E5E0] overflow-hidden shadow-xs bg-[#F2F3F0]">
            <div className="aspect-[16/10] sm:aspect-[21/9] min-h-[380px] sm:min-h-[460px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.748283404557!2d78.16254267584144!3d11.231211188946777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcfde9a922595%3A0x5c96d4a18be547c0!2sDr%20Aravinth%E2%80%99s%20dental%20care!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Aravinth's Dental Care Location Map"
                className="w-full h-full"
              />
            </div>

            {/* Quick Location Info Bar below the map inside the card */}
            <div className="bg-white border-t border-[#E2E5E0] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F0F6F5] text-[#276B65] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#202421] font-semibold">
                    {isTamil ? 'அடையாளக் குறி' : 'Main Landmark'}
                  </strong>
                  <span className="text-[#6B716D]">
                    {CLINIC_INFO.landmark}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F0F6F5] text-[#276B65] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#202421] font-semibold">
                    {isTamil ? 'பணி நேரங்கள்' : 'Clinic Timings'}
                  </strong>
                  <span className="text-[#6B716D]">
                    Mon - Sat: 9:30 AM - 1:30 PM & 4:30 PM - 8:30 PM
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F0F6F5] text-[#276B65] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#202421] font-semibold">
                    {isTamil ? 'உதவி எண்' : 'Phone Number'}
                  </strong>
                  <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-[#276B65] font-semibold hover:underline">
                    +91 {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

