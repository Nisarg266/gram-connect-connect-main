import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'gu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.schemes': 'Schemes',
    'nav.applications': 'My Applications',
    'nav.grievances': 'Grievances',
    'nav.profile': 'Profile',
    'hero.title': 'Discover Government Schemes',
    'hero.subtitle': 'Find and apply for government benefits designed for you',
    'hero.cta': 'Explore Schemes',
    'schemes.recommended': 'Recommended for You',
    'schemes.all': 'All Government Schemes',
    'scheme.eligible': 'Eligible',
    'scheme.partially': 'Partially Eligible',
    'scheme.not_eligible': 'Not Eligible',
    'scheme.apply': 'Apply Now',
    'scheme.learn_more': 'Learn More',
    'scheme.check_eligibility': 'Check Eligibility',
    'scheme.delete': 'Delete Scheme',
    'scheme.add_new': 'Add New Scheme',
    'scheme.farmer_pension.title': 'Farmer Pension Scheme',
    'scheme.farmer_pension.desc': 'Monthly pension support for elderly farmers',
    'scheme.farmer_pension.benefit': '₹2,000/month',
    'scheme.scholarship.title': 'Student Scholarship',
    'scheme.scholarship.desc': 'Educational support for meritorious students',
    'scheme.scholarship.benefit': 'Up to ₹50,000/year',
    'scheme.healthcare.title': 'Health Insurance',
    'scheme.healthcare.desc': 'Comprehensive healthcare coverage for families',
    'scheme.healthcare.benefit': 'Up to ₹5 lakh coverage',
    'eligibility.age_requirement': 'Age 60 or above',
    'eligibility.income_limit': 'Annual income below ₹2 lakh',
    'eligibility.education_requirement': 'Class 12 pass with 80%+ marks',
    'search.placeholder': 'Search schemes by name, category, or keyword...',
    'filter.category': 'Category',
    'filter.all_categories': 'All Categories',
    'filter.agriculture': 'Agriculture',
    'filter.education': 'Education',
    'filter.health': 'Health',
    'filter.employment': 'Employment',
    'filter.housing': 'Housing',
    'filter.filters': 'Filters',
    'welcome': 'Welcome to GRAMSEVA',
    'loading': 'Loading...',
  },
  hi: {
    'nav.home': 'होम',
    'nav.schemes': 'योजनाएं',
    'nav.applications': 'मेरे आवेदन',
    'nav.grievances': 'शिकायतें',
    'nav.profile': 'प्रोफाइल',
    'hero.title': 'सरकारी योजनाओं की खोज करें',
    'hero.subtitle': 'आपके लिए डिज़ाइन की गई सरकारी सुविधाओं को खोजें और आवेदन करें',
    'hero.cta': 'योजनाएं देखें',
    'schemes.recommended': 'आपके लिए सुझावित',
    'schemes.all': 'सभी सरकारी योजनाएं',
    'scheme.eligible': 'पात्र',
    'scheme.partially': 'आंशिक रूप से पात्र',
    'scheme.not_eligible': 'पात्र नहीं',
    'scheme.apply': 'अभी आवेदन करें',
    'scheme.learn_more': 'और जानें',
    'scheme.add_new': 'नई योजना जोड़ें',
    'scheme.farmer_pension.title': 'किसान पेंशन योजना',
    'scheme.farmer_pension.desc': 'बुजुर्ग किसानों के लिए मासिक पेंशन सहायता',
    'scheme.farmer_pension.benefit': '₹2,000/माह',
    'scheme.scholarship.title': 'छात्र छात्रवृत्ति',
    'scheme.scholarship.desc': 'मेधावी छात्रों के लिए शैक्षिक सहायता',
    'scheme.scholarship.benefit': '₹50,000/वर्ष तक',
    'scheme.healthcare.title': 'स्वास्थ्य बीमा',
    'scheme.healthcare.desc': 'परिवारों के लिए व्यापक स्वास्थ्य कवरेज',
    'scheme.healthcare.benefit': '₹5 लाख तक का कवरेज',
    'eligibility.age_requirement': 'आयु 60 या उससे अधिक',
    'eligibility.income_limit': 'वार्षिक आय ₹2 लाख से कम',
    'eligibility.education_requirement': 'कक्षा 12 पास 80%+ अंकों के साथ',
    'search.placeholder': 'नाम, श्रेणी या कीवर्ड से योजनाएं खोजें...',
    'filter.category': 'श्रेणी',
    'filter.all_categories': 'सभी श्रेणियां',
    'filter.agriculture': 'कृषि',
    'filter.education': 'शिक्षा',
    'filter.health': 'स्वास्थ्य',
    'filter.employment': 'रोजगार',
    'filter.housing': 'आवास',
    'filter.filters': 'फ़िल्टर',
    'welcome': 'ग्रामसेवा में आपका स्वागत है',
    'loading': 'लोड हो रहा है...',
  },
  gu: {
    'nav.home': 'હોમ',
    'nav.schemes': 'યોજનાઓ',
    'nav.applications': 'મારી અરજીઓ',
    'nav.grievances': 'ફરિયાદો',
    'nav.profile': 'પ્રોફાઇલ',
    'hero.title': 'સરકારી યોજનાઓ શોધો',
    'hero.subtitle': 'તમારા માટે ડિઝાઇન કરાયેલ સરકારી લાભો શોધો અને અરજી કરો',
    'hero.cta': 'યોજનાઓ જુઓ',
    'schemes.recommended': 'તમારા માટે સૂચવાયેલ',
    'schemes.all': 'બધી સરકારી યોજનાઓ',
    'scheme.eligible': 'પાત્ર',
    'scheme.partially': 'આંશિક રીતે પાત્ર',
    'scheme.not_eligible': 'પાત્ર નથી',
    'scheme.apply': 'હવે અરજી કરો',
    'scheme.learn_more': 'વધુ જાણો',
    'scheme.check_eligibility': 'પાત્રતા તપાસો',
    'scheme.delete': 'યોજના કાઢી નાખો',
    'scheme.add_new': 'નવી યોજના ઉમેરો',
    'scheme.farmer_pension.title': 'ખેડૂત પેન્શન યોજના',
    'scheme.farmer_pension.desc': 'વૃદ્ધ ખેડૂતો માટે માસિક પેન્શન સહાય',
    'scheme.farmer_pension.benefit': '₹2,000/મહિનો',
    'scheme.scholarship.title': 'વિદ્યાર્થી શિષ્યવૃત્તિ',
    'scheme.scholarship.desc': 'મેધાવી વિદ્યાર્થીઓ માટે શિક્ષણ સહાય',
    'scheme.scholarship.benefit': '₹50,000/વર્ષ સુધી',
    'scheme.healthcare.title': 'આરોગ્ય વીમો',
    'scheme.healthcare.desc': 'પરિવારો માટે વ્યાપક આરોગ્ય કવરેજ',
    'scheme.healthcare.benefit': '₹5 લાખ સુધીનું કવરેજ',
    'eligibility.age_requirement': 'વય 60 કે તેથી વધુ',
    'eligibility.income_limit': 'વાર્ષિક આવક ₹2 લાખથી ઓછી',
    'eligibility.education_requirement': 'વર્ગ 12 પાસ 80%+ માર્ક્સ સાથે',
    'search.placeholder': 'નામ, કેટેગરી અથવા કીવર્ડ દ્વારા યોજનાઓ શોધો...',
    'filter.category': 'કેટેગરી',
    'filter.all_categories': 'બધી કેટેગરીઓ',
    'filter.agriculture': 'કૃષિ',
    'filter.education': 'શિક્ષણ',
    'filter.health': 'આરોગ્ય',
    'filter.employment': 'રોજગાર',
    'filter.housing': 'વસવાટ',
    'filter.filters': 'ફિલ્ટર્સ',
    'welcome': 'ગ્રામસેવામાં આપનું સ્વાગત છે',
    'loading': 'લોડ થઈ રહ્યું છે...',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};