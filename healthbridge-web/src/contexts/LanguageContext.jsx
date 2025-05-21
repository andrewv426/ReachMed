import { createContext, useContext, useState, useEffect } from 'react';

// Available languages
export const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ar', name: 'العربية' },
  { code: 'de', name: 'Deutsch' },
];

// Create context
const LanguageContext = createContext();

// Language provider component
export function LanguageProvider({ children }) {
  // Try to get language from localStorage, default to English
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('reachmed-language');
    const validCodes = languages.map(lang => lang.code);
    return savedLanguage && validCodes.includes(savedLanguage) ? savedLanguage : 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('reachmed-language', language);
  }, [language]);

  // Get language name from code
  const getLanguageName = (code) => {
    const lang = languages.find(l => l.code === code);
    return lang ? lang.name : 'English';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLanguageName }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
