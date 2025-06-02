
import "@/styles/globals.css";
import App, { AppContext, AppProps } from 'next/app';
import { appWithTranslation, useTranslation} from 'next-i18next';
import { SetStateAction, useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import { useRouter } from "next/router";
import 'react-bootstrap-accordion/dist/index.css'
import 'react-toastify/dist/ReactToastify.css';
import '../../i18n';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';
interface MyAppProps extends AppProps {
  // Add any additional props here if needed
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { locale, locales, push } = useRouter();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    
    const addChatScript = () => {
      const hccid = 16233252;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://mylivechat.com/chatinline.aspx?hccid=${hccid}`;
      document.body.appendChild(script); 
    };

    // Add the chat script after the component mounts
    addChatScript();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [locale, locales, push]);

  useEffect(() => {
    const lng = localStorage.getItem('i18nextLng') || 'en';
    if (lng) {
      i18n.changeLanguage(lng); 
    }
  }, [i18n]);
  

  return (
    <div className={`  ${isLoading ? 'overflow-y-hidden' : ''}`}>
    <Head>
      <link rel="shortcut icon" href="/icons/favicon.png" type="image/x-icon" />
    </Head>
      <ToastContainer />
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
