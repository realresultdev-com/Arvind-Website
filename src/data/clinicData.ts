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
    role: 'Chief Dental Doctor & Clip Specialist',
    description: 'Experienced dental doctor specializing in teeth clip treatment, tooth pain relief, root canal, and gentle smile care for the whole family.'
  },
  {
    name: 'Dr. Sangavi Aravinth',
    tamilName: 'டாக்டர் சங்கவி அரவிந்த்',
    qualifications: 'BDS.',
    role: 'Dental Doctor',
    description: 'Caring dental doctor dedicated to pain-free treatments, teeth cleaning, cavity filling, and friendly care for women and children.'
  }
]

export const TREATMENTS: Treatment[] = [
  {
    id: 'consultation',
    title: 'Full Mouth & Teeth Checkup',
    tamilTitle: 'பொது பல் பரிசோதனை',
    summary: 'Complete checkup of your teeth, gums, and mouth. We explain everything simply and honestly.',
    details: 'We carefully check your teeth and gums with good lighting to find tooth decay, swelling, or pain early. We explain your teeth condition in simple words with clear advice.',
    category: 'preventive'
  },
  {
    id: 'cleaning',
    title: 'Teeth Cleaning (Dirt & Stain Removal)',
    tamilTitle: 'பல் சுத்தம் செய்தல்',
    summary: 'Gentle machine water spray cleaning to remove yellow dirt, tea stains, and bad breath.',
    details: 'Safe machine cleaning that cleans stubborn yellow dirt and food marks without damaging your natural teeth or gums. Keeps your mouth clean and fresh.',
    category: 'preventive'
  },
  {
    id: 'fillings',
    title: 'Tooth Cavity Filling (Same Tooth Color)',
    tamilTitle: 'பல் அடைத்தல்',
    summary: 'Clean tooth hole and fill with natural tooth-colored cement. Stops food sticking and pain.',
    details: 'Strong tooth-colored filling that matches your natural tooth color exactly. No one can see you have a filling. Helps you chew food comfortably.',
    category: 'restorative'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (Save Painful Tooth)',
    tamilTitle: 'வேர் சிகிச்சை (RCT)',
    summary: 'Save your natural tooth from severe pain and swelling without removing it. Painless care.',
    details: 'When tooth decay goes deep to the nerve causing heavy pain, we clean the inner infection, put medicine, and seal it safely so you can keep your original tooth for life.',
    category: 'restorative'
  },
  {
    id: 'extractions',
    title: 'Painless Tooth Removal & Wisdom Tooth',
    tamilTitle: 'பல் எடுத்தல் & ஞானப்பல் சிகிச்சை',
    summary: 'Painless tooth removal with gentle numbing injection. Quick relief from severe wisdom tooth pain.',
    details: 'If a tooth is completely broken, rotten, or wisdom tooth is troubling you, we give painless numbing injection and gently remove it with quick healing advice.',
    category: 'surgical'
  },
  {
    id: 'crowns-bridges',
    title: 'Tooth Cap & Ceramic Teeth (Crowns & Bridges)',
    tamilTitle: 'பல் தொப்பி & பாலங்கள்',
    summary: 'Strong white caps for weak teeth and fixed artificial teeth to replace missing teeth for easy eating.',
    details: 'High-strength ceramic and zirconia caps placed over treated teeth to protect them from breaking. Chew any food easily with 100% natural look.',
    category: 'restorative'
  },
  {
    id: 'orthodontics',
    title: 'Teeth Clip & Straightening (Braces)',
    tamilTitle: 'பல் சீரமைப்பு சிகிச்சை (கிளிப்)',
    summary: 'Clip treatment to fix forward teeth, gaps between teeth, and uneven teeth for kids and adults.',
    details: 'Clip treatment to straighten crooked teeth and close wide gaps. Gives you a beautiful, confident smile at fair and easy monthly payments.',
    category: 'orthodontic'
  },
  {
    id: 'pediatric',
    title: 'Children Tooth Care (Kids Dentistry)',
    tamilTitle: 'குழந்தைகளுக்கான பல் சிகிச்சை',
    summary: 'Friendly, caring dental treatment for kids. Zero fear, gentle doctor who makes children smile.',
    details: 'Caring dental treatment for milk teeth cavities, tooth pain, and cleaning. The doctor talks kindly with children so they feel happy and have zero fear.',
    category: 'preventive'
  }
]

export const WHY_CHOOSE_US = [
  {
    title: 'Friendly Doctors Who Listen Patiently',
    description: 'We listen to your tooth pain and worries with patience. We never rush, and explain everything in simple words so you understand easily.'
  },
  {
    title: 'Honest Advice & Fair Charges',
    description: 'We tell you clearly what treatment is really needed. No unwanted treatments, no extra hidden charges. Pure honest medical care.'
  },
  {
    title: '100% Clean & Boiled Tools (Zero Infection)',
    description: 'Every tool is washed, packed, and high-heat machine sterilized for every single patient. 100% safe, neat, and clean clinic.'
  },
  {
    title: 'Pain-Free Gentle Treatment',
    description: 'Many people fear dental pain. Our doctors use gentle numbing injections and careful hands so your treatment is completely comfortable.'
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
    comment: 'I visited Dr. Aravinth for root canal treatment. I was very afraid of pain, but the doctor gave painless injection and did treatment very gently with zero pain. The cap fits perfectly. Best clinic in Namakkal!',
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
    treatmentTag: 'Teeth Cleaning (Dirt Removal)',
    treatmentTagTamil: 'பல் சுத்தம் செய்தல்',
    comment: 'Very neat and clean clinic. Dr. Aravinth checked my teeth patiently and cleaned without any pain or tooth damage. Staff are very polite and helpful.',
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
    treatmentTag: 'Painless Wisdom Tooth Removal',
    treatmentTagTamil: 'ஞானப்பல் சிகிச்சை',
    comment: 'Had severe wisdom tooth pain for many days. Dr. Aravinth removed the tooth very smoothly with zero pain. Recovered very fast in 2 days. Very thankful to doctor.',
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
    treatmentTag: 'Tooth Hole Filling (Same Color)',
    treatmentTagTamil: 'பல் அடைத்தல்',
    comment: 'Got tooth filling done for front teeth hole. Color matches my original teeth so nicely that no one can find the filling. Honest charges and no extra fees.',
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
    treatmentTag: 'Teeth Clip & Straightening',
    treatmentTagTamil: 'பல் சீரமைப்பு சிகிச்சை',
    comment: 'Came for teeth clip treatment for my daughter. Doctor explained the full treatment and cost clearly. Very good improvement in teeth shape within few months.',
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
    treatmentTag: 'Children Tooth Care (Kids)',
    treatmentTagTamil: 'குழந்தைகளுக்கான பல் சிகிச்சை',
    comment: 'Dr. Aravinth is very kind and patient with kids. My 6-year-old son was afraid of doctors, but doctor talked friendly and treated cavity pain without making him cry. Best family dental care.',
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
    treatmentTag: 'Tooth Cap & Ceramic Teeth',
    treatmentTagTamil: 'பல் தொப்பி & பாலங்கள்',
    comment: 'Put zirconia tooth cap here. Good modern machines and clean boiled tools. Now chewing food is 100% comfortable like original tooth. Excellent doctor.',
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
    treatmentTag: 'Full Mouth & Teeth Checkup',
    treatmentTagTamil: 'பொது பல் பரிசோதனை',
    comment: 'Very honest and genuine doctor. He does not suggest unwanted costly treatments. Clearly showed my tooth problem on X-ray and gave right advice. Fully satisfied!',
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
    title: 'Doctor Treating Patient with Care',
    tamilTitle: 'நவீன சிகிச்சை அறை - நேரடி சிகிச்சை',
    description: 'Dr. Aravinth giving gentle, pain-free dental treatment using clean modern machines.',
    tamilDescription: 'அரவிந்த் பல் மருத்துவர் நவீன உபகரணங்களுடன் நோயாளிகளுக்கு கனிவான, பாதுகாப்பான சிகிச்சை அளிக்கிறார்.',
    tag: 'Treatment In Action',
    tamilTag: 'நேரடி சிகிச்சை'
  },
  {
    id: 'facility-operatory',
    src: '/images/clinic-operatory-chair.jpg',
    title: 'Modern Dental Chair & Clean Tools',
    tamilTitle: 'பல் மருத்துவ நாற்காலி & சுகாதார சூழல்',
    description: 'Comfortable dental treatment chair with bright light and 100% clean, machine-boiled instruments.',
    tamilDescription: 'அதிநவீன மருத்துவ நாற்காலி, அறுவை சிகிச்சை விளக்கு மற்றும் கிருமி நீக்கம் செய்யப்பட்ட உபகரணங்கள்.',
    tag: 'Dental Chair',
    tamilTag: 'சிகிச்சை வசதி'
  },
  {
    id: 'facility-consultation',
    src: '/images/clinic-waiting-lounge.jpg',
    title: 'Doctor Consultation Room',
    tamilTitle: 'மருத்துவர் ஆலோசனை அறை & நுழைவு கூடம்',
    description: 'Private doctor room where Dr. Aravinth and Dr. Sangavi listen to your tooth problems and explain simply.',
    tamilDescription: 'டாக்டர் பி. அரவிந்த் மற்றும் டாக்டர் சங்கவி அரவிந்த் அவர்களின் பிரத்தியேக ஆலோசனை மற்றும் பரிசோதனை அறை.',
    tag: 'Doctor Room',
    tamilTag: 'ஆலோசனை கூடம்'
  },
  {
    id: 'facility-reception',
    src: '/images/clinic-reception-desk.jpg',
    title: 'Clinic Reception & Help Desk',
    tamilTitle: 'வரவேற்பு மையம் & மருத்துவமனை நுழைவாயில்',
    description: 'Friendly reception staff to help you book appointments and answer your questions.',
    tamilDescription: 'நோயாளிகளை இன்முகத்துடன் வரவேற்று விரைவான பதிவை உறுதி செய்யும் வரவேற்பறை.',
    tag: 'Reception',
    tamilTag: 'வரவேற்பு மையம்'
  },
  {
    id: 'facility-waiting',
    src: '/images/clinic-patient-waiting.jpg',
    title: 'Comfortable Patient Waiting Area',
    tamilTitle: 'சுத்தமான நோயாளி காத்திருப்பு கூடம்',
    description: 'Cool, neat, and comfortable chairs for patients and family members to sit and relax.',
    tamilDescription: 'குடும்பத்தினர் மற்றும் நோயாளிகள் வசதியாக அமரக்கூடிய சுத்தமான, காற்றோட்டமான காத்திருப்பு கூடம்.',
    tag: 'Waiting Area',
    tamilTag: 'காத்திருப்பு கூடம்'
  }
]
