# Language Switching Test Guide

## ભાષા બદલવાની કાર્યક્ષમતા કેવી રીતે ટેસ્ટ કરવી

### 1. Application શરૂ કરો
```bash
npm run dev
```

### 2. Browser માં જાઓ
- http://localhost:5173/schemes પર જાઓ

### 3. Language Selector ટેસ્ટ કરો
- Top right corner માં language selector શોધો (EN/हि/ગુ)
- દરેક language select કરો અને verify કરો કે:
  - **English (EN)**: All text should be in English
  - **Hindi (हि)**: All text should be in Hindi  
  - **Gujarati (ગુ)**: All text should be in Gujarati

### 4. શું બદલવું જોઈએ
- Page title: "All Government Schemes" → "सभी सरकारी योजनाएं" → "બધી સરકારી યોજનાઓ"
- Button text: "Add New Scheme" → "नई योजना जोड़ें" → "નવી યોજના ઉમેરો"
- Search placeholder: "Search schemes..." → "नाम, श्रेणी या कीवर्ड से योजनाएं खोजें..." → "નામ, કેટેગરી અથવા કીવર્ડ દ્વારા યોજનાઓ શોધો..."
- Filter options: "All Categories" → "सभी श्रेणियां" → "બધી કેટેગરીઓ"

### 5. Scheme Cards ટેસ્ટ કરો
- દરેક scheme card માં title, description, અને benefit text language change થવું જોઈએ
- Eligibility reasons પણ language change થવા જોઈએ

### 6. Navigation ટેસ્ટ કરો
- Navigation menu items પણ language change થવા જોઈએ
- Home → होम → હોમ
- Schemes → योजनाएं → યોજનાઓ

## ટેક્નિકલ ડિટેઇલ્સ

### Language Context Structure
- **App.tsx**: Main LanguageProvider wrapper
- **LanguageContext.tsx**: Translation data અને context logic
- **Navigation.tsx**: Language selector component
- **Schemes.tsx**: Uses useLanguage hook for translations

### Key Features
✅ Language switching works across entire app  
✅ All text is translatable  
✅ Language persists during navigation  
✅ Real-time text updates  
✅ Proper font rendering for all languages  

### Supported Languages
1. **English (EN)** - Default language
2. **Hindi (हि)** - हिंदी ભાષા
3. **Gujarati (ગુ)** - ગુજરાતી ભાષા

## Troubleshooting

### જો language switching કામ ન કરે તો:
1. Browser console check કરો
2. LanguageProvider properly wrap થયેલું છે કે નહીં verify કરો
3. useLanguage hook properly import થયેલું છે કે નહીં check કરો
4. Translation keys missing તો નથી કે નહીં verify કરો
