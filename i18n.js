import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Define your supported languages
const supportedLanguages = ['en', 'fr', 'de', 'it', 'es', 'pt']; // Add any other languages you support

const getBrowserLanguage = () => {
  if (typeof window !== 'undefined') {
    const lang = navigator.language || navigator.userLanguage; // Get the browser language
    const langCode = lang.split('-')[0]; // Extract the language code (e.g., "en", "fr", "de")

    // Check if the extracted language code is in the supported languages
    return supportedLanguages.includes(langCode) ? langCode : 'en'; // Default to English if not supported
  }
  return 'en'; // Fallback to English if not in a browser environment
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: getBrowserLanguage(), // Set the initial language based on browser settings
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
