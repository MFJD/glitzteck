import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng : any) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    router.push(router.asPath, router.asPath, { locale: lng });
  };

  return (
    <div className="flex space-x-4">
      <button onClick={() => changeLanguage('en')} className="p-2 bg-blue-500 text-white rounded">
        🇺🇸 English
      </button>
      <button onClick={() => changeLanguage('fr')} className="p-2 bg-blue-500 text-white rounded">
        🇫🇷 Français
      </button>
    </div>
  );
};

export default LanguageSelector;

