import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css';
import 'react-bootstrap-accordion/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';
import '../../i18n';

import { AppContext, AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';
import Script from 'next/script';
import * as gtag from '../../lib/gtag';

interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  // Track route changes (SPA navigation)
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Track initial page load
  useEffect(() => {
    gtag.pageview(window.location.pathname);
  }, []);

  // Chat widget & loader
  useEffect(() => {
    const addChatScript = () => {
      const hccid = 16233252;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://mylivechat.com/chatinline.aspx?hccid=${hccid}`;
      document.body.appendChild(script);
    };

    addChatScript();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Language from localStorage
  useEffect(() => {
    const lng = localStorage.getItem('i18nextLng') || 'en';
    if (lng) {
      i18n.changeLanguage(lng);
    }
  }, [i18n]);

  return (
    <div className={` ${isLoading ? 'overflow-y-hidden' : ''}`}>
      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Head>
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
      </Head>

      <ToastContainer />
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let appProps = {};
  if (Component.getInitialProps) {
    appProps = await Component.getInitialProps(ctx);
  }
  return { ...appProps };
};

export default appWithTranslation(MyApp);
