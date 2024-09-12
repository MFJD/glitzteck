import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import ReactFlagsSelect from 'react-flags-select';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [selected, setSelected] = useState('US'); // Default to 'US'

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    setSelected(storedLang === 'fr' ? 'FR' : storedLang === 'de' ? 'DE' : 'US');
  }, []);

  const changeLanguage = (code : any) => {
    const lng = code === 'FR' ? 'fr' : code === 'DE' ? 'de' : 'en'; // Map flags to languages
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    router.push(router.asPath, router.asPath, { locale: lng });
    setSelected(code); // Update selected flag
  };

  return (
    <div className="flex space-x-4">
      <ReactFlagsSelect
        fullWidth={false}
        countries={["US", "FR", "DE"]}
        customLabels={{ "US": "English", "FR": "Français", "DE": "Deutsch" }}
        selected={selected}
        onSelect={changeLanguage}
        className='w-full mt-2 h-10 border-none'
        placeholder="Select Language"
      />
 
    </div>
  );
};

export default LanguageSelector;



{/* <div className="flex space-x-4">
      <ReactFlagsSelect
        fullWidth={false}
        countries={["US", "FR", "DE"]}
        customLabels={{ "US": "English", "FR": "Français", "DE": "Deutsch" }}
        selected={selected}
        onSelect={changeLanguage}
        className='w-full mt-2 h-10 border-none'
      />
    </div> */}