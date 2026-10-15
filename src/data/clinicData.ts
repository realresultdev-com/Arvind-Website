export interface Treatment {
  id: string
  title: string
  tamilTitle?: string
  summary: string
  details: string
  category: 'preventive' | 'restorative' | 'surgical' | 'orthodontic'
}

export interface Doctor {
  name: string
  tamilName?: string
  qualifications: string
  role: string
  description: string
}

export const CLINIC_INFO = {
  name: "Dr. Aravinth's Dental Care",
  tamilName: 'அரவிந்த் பல் மருத்துவமனை',
  logo: '/images/clinic-logo.jpg',
  phone: '99526 02577',
  phoneRaw: '9952602577',
  phoneInternational: '+919952602577',
  whatsappNumber: '919952602577',
  email: 'draravinthsdentalcare2021@gmail.com',
  addressEnglish: 'No. 317/113, First Floor, Opposite Sanu Hotel, Salem Main Road, Namakkal – 637001, Tamil Nadu, India.',
  addressTamil: 'நெ. 317/113, முதல் தளம், சனு ஹோட்டல் எதிரில், சேலம் மெயின் ரோடு, நாமக்கல் - 637 001.',
  landmark: 'Opposite Sanu Hotel, Salem Main Road',
  city: 'Namakkal',
  googleMapsUrl: 'https://www.google.com/maps/place/Dr+Aravinth%E2%80%99s+dental+care/@11.2312164,78.1598604,17z/data=!3m1!4b1!4m6!3m5!1s0x3babcfde9a922595:0x5c96d4a18be547c0!8m2!3d11.2312112!4d78.1647313!16s%2Fg%2F11sgwr54qc?hl=en-IN',
  instagramUrl: 'https://www.instagram.com/dr.aravinthdentalcare?dlrf=MXBqYnlxcGk3NGl2eA==',
  timings: [
    { days: 'Monday – Saturday', hours: '9:30 AM – 1:30 PM & 4:30 PM – 8:30 PM' },
    { days: 'Sunday', hours: '10:00 AM – 1:00 PM (By Prior Appointment)' }
  ]
}

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. P. Aravinth',
    tamilName: 'டாக்டர் பி. அரவிந்த்',
    qualifications: 'BDS., FICOI (ORTHO)',
    role: 'Dental Surgeon & Orthodontic Consultant',
    description: 'Specializes in comprehensive dental care with focused expertise in orthodontic alignment, smile correction, and gentle restorative treatments.'
  },
  {
    name: 'Dr. Sangavi Aravinth',
    tamilName: 'டாக்டர் சங்கவி அரவிந்த்',
    qualifications: 'BDS.',
    role: 'Dental Surgeon',
    description: 'Dedicated to patient comfort, preventive oral hygiene, conservative tooth restorations, and routine dental procedures.'
  }
]

export const TREATMENTS: Treatment[] = [
  {
    id: 'consultation',
    title: 'General Dental Consultation & Check-up',
    tamilTitle: 'பொது பல் பரிசோதனை',
    summary: 'Comprehensive oral examination of teeth, gums, and oral tissues with transparent diagnosis.',
    details: 'A thorough clinical examination using modern diagnostic lighting to assess tooth health, gum conditions, and early detection of cavities or wear.',
    category: 'preventive'
  },
  {
    id: 'cleaning',
    title: 'Dental Cleaning & Oral Prophylaxis',
    tamilTitle: 'பல் சுத்தம் செய்தல்',
    summary: 'Ultrasonic plaque and tartar removal to maintain healthy gums and prevent periodontal issues.',
    details: 'Gentle, effective ultrasonic scaling that removes stubborn stains, bacterial plaque, and calculus while safeguarding your tooth enamel.',
    category: 'preventive'
  },
  {
    id: 'fillings',
    title: 'Tooth-Colored Restorations (Fillings)',
    tamilTitle: 'பல் அடைத்தல்',
    summary: 'Seamless composite fillings that blend naturally with your tooth shade to restore strength.',
    details: 'Aesthetic, biocompatible dental composites applied with precision to repair cavities, chipped edges, or small fractures with long-lasting durability.',
    category: 'restorative'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (RCT)',
    tamilTitle: 'வேர் சிகிச்சை (RCT)',
    summary: 'Conservative therapy to eliminate infection and relieve tooth pain while saving the natural tooth.',
    details: 'Carefully removing infected pulp tissue from the root canals, sterilizing the chambers, and hermetically sealing them to preserve your natural tooth.',
    category: 'restorative'
  },
  {
    id: 'extractions',
    title: 'Tooth Extractions & Wisdom Tooth Care',
    tamilTitle: 'பல் எடுத்தல் & ஞானப்பல் சிகிச்சை',
    summary: 'Gentle extractions performed with local anesthesia, prioritizing patient comfort and rapid recovery.',
    details: 'Careful removal of severely decayed, broken, or impacted wisdom teeth when conservation is no longer viable, with comprehensive post-procedure guidance.',
    category: 'surgical'
  },
  {
    id: 'crowns-bridges',
    title: 'Dental Crowns and Bridges',
    tamilTitle: 'பல் தொப்பி & பாலங்கள்',
    summary: 'Custom ceramic and zirconia restorations to protect weakened teeth or replace missing teeth.',
    details: 'High-strength, custom-milled crowns and bridge prosthetics that restore natural chewing function, bite alignment, and smile aesthetics.',
    category: 'restorative'
  },
  {
    id: 'orthodontics',
    title: 'Orthodontic Consultation & Braces',
    tamilTitle: 'பல் சீரமைப்பு சிகிச்சை (கிளிப்)',
    summary: 'Correction of misaligned teeth, spacing, crowding, and bite irregularities by our Orthodontic consultant.',
    details: 'Individualized treatment planning for children, adolescents, and adults utilizing modern orthodontic appliances to achieve optimal alignment and functional occlusion.',
    category: 'orthodontic'
  },
  {
    id: 'pediatric',
    title: 'Pediatric & Preventive Dentistry',
    tamilTitle: 'குழந்தைகளுக்கான பல் சிகிச்சை',
    summary: 'Warm, patient-focused dental care for children to nurture healthy oral habits from an early age.',
    details: 'Fluoride treatments, cavity protection, pit-and-fissure sealants, and friendly dental habit counselling designed to build lifelong dental confidence.',
    category: 'preventive'
  }
]

export const WHY_CHOOSE_US = [
  {
    title: 'Patient-First Consultations',
    description: 'We listen attentively to your symptoms and personal concerns. You are never rushed, and all questions regarding your oral health are thoroughly addressed.'
  },
  {
    title: 'Clear Treatment Guidance',
    description: 'We provide transparent explanations of your clinical diagnosis and available treatment options, so you can make informed decisions with total clarity.'
  },
  {
    title: 'Strict Sterilization Protocols',
    description: 'We adhere to uncompromising infection control standards. Every instrument is rigorously cleaned, packaged, and autoclaved for your safety.'
  },
  {
    title: 'Gentle, Considerate Care',
    description: 'We understand dental visits can cause anxiety. Our clinical approach focuses on patient comfort, gentle touch, and effective local anesthesia.'
  }
]

export interface GoogleReview {
  id: string
  authorName: string
  authorNameTamil?: string
  avatarInitial: string
  avatarBg: string
  rating: number
  timeAgo: string
  timeAgoTamil: string
  treatmentTag: string
  treatmentTagTamil: string
  comment: string
  commentTamil: string
  verified: boolean
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    authorName: 'Suresh Kumar',
    authorNameTamil: 'சுரேஷ் குமார்',
    avatarInitial: 'S',
    avatarBg: 'bg-emerald-600',
    rating: 5,
    timeAgo: '1 month ago',
    timeAgoTamil: '1 மாதத்திற்கு முன்பு',
    treatmentTag: 'Root Canal Treatment (RCT)',
    treatmentTagTamil: 'வேர் சிகிச்சை (RCT)',
    comment: 'I visited Dr. Aravinth for root canal treatment. I was very anxious about pain, but Dr. Aravinth was extremely gentle and completed the procedure with zero discomfort. The crown fit perfectly. Highly recommend this clinic in Namakkal!',
    commentTamil: 'வேர் சிகிச்சைக்காக டாக்டர் அரவிந்த் அவர்களை அணுகினேன். வலி இல்லாமல் மிக நேர்த்தியாகவும் பொறுமையாகவும் சிகிச்சை அளித்தார். நாமக்கல்லில் சிறந்த பல் மருத்துவமனை!',
    verified: true
  },
  {
    id: 'rev-2',
    authorName: 'Priya Dharshini',
    authorNameTamil: 'பிரியா தர்ஷினி',
    avatarInitial: 'P',
    avatarBg: 'bg-teal-600',
    rating: 5,
    timeAgo: '3 weeks ago',
    timeAgoTamil: '3 வாரங்களுக்கு முன்பு',
    treatmentTag: 'Dental Cleaning & Scaling',
    treatmentTagTamil: 'பல் சுத்தம் செய்தல்',
    comment: 'Very neat, hygienic, and modern clinic setup. Dr. Aravinth explained oral hygiene habits and did scaling with great care without harming enamel. Staff were very polite and courteous.',
    commentTamil: 'மிகவும் தூய்மையான மற்றும் நவீன வசதிகள் கொண்ட மருத்துவமனை. பற்களை மிக கவனமாக சுத்தம் செய்து, நல்ல ஆலோசனைகளை வழங்கினார்.',
    verified: true
  },
  {
    id: 'rev-3',
    authorName: 'M. Karthikeyan',
    authorNameTamil: 'எம். கார்த்திகேயன்',
    avatarInitial: 'K',
    avatarBg: 'bg-blue-600',
    rating: 5,
    timeAgo: '2 months ago',
    timeAgoTamil: '2 மாதங்களுக்கு முன்பு',
    treatmentTag: 'Wisdom Tooth Extraction',
    treatmentTagTamil: 'ஞானப்பல் சிகிச்சை',
    comment: 'Had severe wisdom tooth pain for weeks. Dr. Aravinth examined carefully and extracted it smoothly under local anesthesia. Recovery was very quick with proper post-care guidelines. Truly grateful!',
    commentTamil: 'ஞானப்பல் வலியால் அவதிப்பட்டு வந்தேன். டாக்டர் அரவிந்த் மிக எளிதாகவும் வலி இன்றியும் பல்லை எடுத்தார். சிகிச்சை முடிந்து விரைவாக குணமடைந்தேன்.',
    verified: true
  },
  {
    id: 'rev-4',
    authorName: 'Anitha Ramesh',
    authorNameTamil: 'அனிதா ரமேஷ்',
    avatarInitial: 'A',
    avatarBg: 'bg-purple-600',
    rating: 5,
    timeAgo: '1 month ago',
    timeAgoTamil: '1 மாதத்திற்கு முன்பு',
    treatmentTag: 'Tooth-Colored Fillings',
    treatmentTagTamil: 'பல் அடைத்தல்',
    comment: 'Got composite fillings done for my front teeth. The shade matching was so natural that no one can tell I have fillings. Transparent pricing and no unnecessary procedures.',
    commentTamil: 'முன் பற்களில் சிமெண்ட் அடைப்பு செய்தேன். இயற்கையான பற்கள் போன்றே மிக அழகாக செய்துள்ளார். நியாயமான கட்டணம் மற்றும் சிறந்த சிகிச்சை.',
    verified: true
  },
  {
    id: 'rev-5',
    authorName: 'Venkatesh S.',
    authorNameTamil: 'வெங்கடேஷ் எஸ்.',
    avatarInitial: 'V',
    avatarBg: 'bg-amber-600',
    rating: 5,
    timeAgo: '3 months ago',
    timeAgoTamil: '3 மாதங்களுக்கு முன்பு',
    treatmentTag: 'Orthodontics & Braces',
    treatmentTagTamil: 'பல் சீரமைப்பு சிகிச்சை',
    comment: 'Consulted for teeth alignment for my daughter. Dr. Aravinth gave clear realistic timelines and transparent treatment costs. Noticeable aesthetic progress within a few months!',
    commentTamil: 'என் மகளுக்கு பல் சீரமைப்பு சிகிச்சைக்காக அணுகினோம். சிகிச்சை முறைகளை தெளிவாக விளக்கி சிறந்த சிகிச்சை அளித்து வருகின்றனர்.',
    verified: true
  },
  {
    id: 'rev-6',
    authorName: 'Deepa Natarajan',
    authorNameTamil: 'தீபா நடராஜன்',
    avatarInitial: 'D',
    avatarBg: 'bg-rose-600',
    rating: 5,
    timeAgo: '4 months ago',
    timeAgoTamil: '4 மாதங்களுக்கு முன்பு',
    treatmentTag: 'Pediatric Dental Care',
    treatmentTagTamil: 'குழந்தைகளுக்கான பல் சிகிச்சை',
    comment: 'Dr. Aravinth is exceptionally patient with kids. My 6-year-old son usually fears dentists, but the doctor made him smile and feel comfortable throughout the cavity treatment. Best family dental care in Namakkal.',
    commentTamil: 'குழந்தைகளிடம் மிக கனிவாக பழகி சிகிச்சை அளிக்கிறார். என் 6 வயது மகனுக்கு பயமின்றி சிகிச்சை அளித்தார். குடும்பத்திற்கு ஏற்ற சிறந்த பல் மருத்துவமனை.',
    verified: true
  },
  {
    id: 'rev-7',
    authorName: 'Rajesh Kannan',
    authorNameTamil: 'ராஜேஷ் கண்ணன்',
    avatarInitial: 'R',
    avatarBg: 'bg-cyan-600',
    rating: 5,
    timeAgo: '5 months ago',
    timeAgoTamil: '5 மாதங்களுக்கு முன்பு',
    treatmentTag: 'Ceramic Zirconia Crowns',
    treatmentTagTamil: 'பல் தொப்பி & பாலங்கள்',
    comment: 'Got zirconia crowns placed. High quality clinical instruments and proper autoclave sterilization practiced. Chewing comfort is 100% back to normal. Excellent doctor and clinic.',
    commentTamil: 'சிர்கோனியா பல் தொப்பி பொருத்தினேன். அதிநவீன கருவிகள் மற்றும் தூய்மையான சூழல். நாமக்கல்லில் நம்பகமான பல் மருத்துவமனை.',
    verified: true
  },
  {
    id: 'rev-8',
    authorName: 'Saravanan B.',
    authorNameTamil: 'சரவணன் பி.',
    avatarInitial: 'S',
    avatarBg: 'bg-indigo-600',
    rating: 5,
    timeAgo: '6 months ago',
    timeAgoTamil: '6 மாதங்களுக்கு முன்பு',
    treatmentTag: 'General Consultation & Checkup',
    treatmentTagTamil: 'பொது பல் பரிசோதனை',
    comment: 'Honest and ethical dental practice. Doesn\'t push for unwanted treatments. Explains every problem clearly on X-ray and gives genuine medical advice. Very satisfied!',
    commentTamil: 'தேவையற்ற சிகிச்சைகளை பரிந்துரைக்காமல், நியாயமான முறையில் ஆலோசனை வழங்கும் நேர்மையான மருத்துவர். மிகவும் திருப்தி!',
    verified: true
  }
]

export interface FacilityImage {
  id: string
  src: string
  title: string
  tamilTitle: string
  description: string
  tamilDescription: string
  tag: string
  tamilTag: string
}

export const CLINIC_FACILITY_IMAGES: FacilityImage[] = [
  {
    id: 'facility-treatment',
    src: '/images/clinic-treatment-action.jpg',
    title: 'Modern Treatment Operatory in Action',
    tamilTitle: 'நவீன சிகிச்சை அறை - நேரடி சிகிச்சை',
    description: 'Dr. Aravinth providing attentive, gentle patient treatment with modern operatory technology and sterile clinical safety.',
    tamilDescription: 'அரவிந்த் பல் மருத்துவர் நவீன உபகரணங்களுடன் நோயாளிகளுக்கு கனிவான, பாதுகாப்பான சிகிச்சை அளிக்கிறார்.',
    tag: 'Treatment In Action',
    tamilTag: 'நேரடி சிகிச்சை'
  },
  {
    id: 'facility-operatory',
    src: '/images/clinic-operatory-chair.jpg',
    title: 'Ergonomic Dental Chair & Sanitized Operatory',
    tamilTitle: 'பல் மருத்துவ நாற்காலி & சுகாதார சூழல்',
    description: 'Advanced dental operatory unit featuring surgical illumination, autoclaved precision instruments, and organized clinical medication.',
    tamilDescription: 'அதிநவீன மருத்துவ நாற்காலி, அறுவை சிகிச்சை விளக்கு மற்றும் கிருமி நீக்கம் செய்யப்பட்ட உபகரணங்கள்.',
    tag: 'Operatory Setup',
    tamilTag: 'சிகிச்சை வசதி'
  },
  {
    id: 'facility-consultation',
    src: '/images/clinic-waiting-lounge.jpg',
    title: 'Consultation Suite & Reception Entry',
    tamilTitle: 'மருத்துவர் ஆலோசனை அறை & நுழைவு கூடம்',
    description: 'Private consultation chamber led by Dr. P. Aravinth BDS, FICOI (ORTHO) and Dr. Sangavi Aravinth BDS for thorough examinations.',
    tamilDescription: 'டாக்டர் பி. அரவிந்த் மற்றும் டாக்டர் சங்கவி அரவிந்த் அவர்களின் பிரத்தியேக ஆலோசனை மற்றும் பரிசோதனை அறை.',
    tag: 'Consultation Suite',
    tamilTag: 'ஆலோசனை கூடம்'
  },
  {
    id: 'facility-reception',
    src: '/images/clinic-reception-desk.jpg',
    title: 'Welcoming Reception Desk & Clinic Entrance',
    tamilTitle: 'வரவேற்பு மையம் & மருத்துவமனை நுழைவாயில்',
    description: 'Warm and organized reception desk to assist patients with appointments, inquiries, and prompt registration.',
    tamilDescription: 'நோயாளிகளை இன்முகத்துடன் வரவேற்று விரைவான பதிவை உறுதி செய்யும் வரவேற்பறை.',
    tag: 'Reception',
    tamilTag: 'வரவேற்பு மையம்'
  },
  {
    id: 'facility-waiting',
    src: '/images/clinic-patient-waiting.jpg',
    title: 'Spacious & Clean Patient Waiting Lounge',
    tamilTitle: 'சுத்தமான நோயாளி காத்திருப்பு கூடம்',
    description: 'Clean, comfortable, air-cooled seating area designed to ensure a relaxed, stress-free waiting experience for families.',
    tamilDescription: 'குடும்பத்தினர் மற்றும் நோயாளிகள் வசதியாக அமரக்கூடிய சுத்தமான, காற்றோட்டமான காத்திருப்பு கூடம்.',
    tag: 'Waiting Lounge',
    tamilTag: 'காத்திருப்பு கூடம்'
  }
]
