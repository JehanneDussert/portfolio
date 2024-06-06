import React, { createContext, useState, useContext } from 'react';
import translations, { TranslationKey } from './translations';

type LanguageContextType = {
  language: TranslationKey;
  setLanguage: () => void; 
  translate: (key: string) => string;
};

const defaultLanguage: TranslationKey = 'en';

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  translate: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<TranslationKey>(defaultLanguage);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const translate = (key: string) => {
    if (translations[language] && translations[language].hasOwnProperty(key)) {
      return translations[language][key];
    } else {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);