
import "@/styles/globals.css";
import App, { AppContext, AppProps } from 'next/app';
import { appWithTranslation, i18n } from 'next-i18next';
import { SetStateAction, useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import { useRouter } from "next/router";
import 'react-bootstrap-accordion/dist/index.css'
import '@/styles/loader.css'
import { motion } from 'framer-motion';
interface MyAppProps extends AppProps {
  // Add any additional props here if needed
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { locale, locales, push } = useRouter();
  const [userLocale, setUserLocale] = useState(locale);

  useEffect(() => {


    // 1. Get Locale from localStorage on mount
    const storedLocale = typeof window !== 'undefined'
      ? localStorage.getItem('language')
      : null;

    // 2. Redirect if localStorage value doesn't match current route
    if (storedLocale && locales?.includes(storedLocale) && storedLocale !== locale) {
      // push(`/${storedLocale}`); 
    } else if (!storedLocale) {
      // 3. If no localStorage value, set it to default (or detected)
      localStorage.setItem('language', locale ? locale : "");
      setUserLocale(locale); `          `
    } else {
      // 4. If localStorage value is valid, use it
      setUserLocale(storedLocale);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [locale, locales, push]);



  return (
    <div className={`  ${isLoading ? 'overflow-y-hidden' : ''}`}>
      {/* {isLoading && <Loading />} */}
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let appProps = {};

  // if (App.getInitialProps) {
  //   appProps = await App.getInitialProps({ Component, ctx });
  // }

  if (Component.getInitialProps) {
    appProps = await Component.getInitialProps(ctx);
  }

  return { ...appProps };
};

export default appWithTranslation(MyApp);
