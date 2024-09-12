import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Load translations from the backend
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    backend: {
      // Path where the translation files are located
      loadPath: '/locales/{{lng}}.json',
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;