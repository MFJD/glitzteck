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
import ChatbotWidget from "@/components/ChatbotWidget";
import SplashScreen from "./splashscreen";

interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const [showSplash, setShowSplash] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // ✅ Google Analytics page tracking
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // ✅ Language setup + splash logic
  useEffect(() => {
    const lng = localStorage.getItem('i18nextLng') || 'en';
    if (lng) {
      i18n.changeLanguage(lng);
    }

    // ✅ prevent flicker: wait until hydration complete
    requestAnimationFrame(() => {
      const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
      if (!hasSeenSplash) {
        setShowSplash(true);
        sessionStorage.setItem("hasSeenSplash", "true");
      }
      setInitialized(true);
    });
  }, [i18n]);

  // ✅ prevent any flicker before deciding splash
  if (!initialized) {
    return <div className="fixed inset-0 bg-gray-50" />;
  }

  return (
    <div className={`${showSplash ? 'overflow-y-hidden' : ''}`}>
      {/* ✅ Google Analytics */}
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

      {/* ✅ Splash screen logic */}
      {showSplash && <SplashScreen finishLoading={() => setShowSplash(false)} />}
      {!showSplash && <Component {...pageProps} />}

      <ChatbotWidget />
    </div>
  );
}

// ✅ unchanged
MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let appProps = {};

  if (Component.getInitialProps) {
    appProps = await Component.getInitialProps(ctx);
  }

  return { ...appProps };
};

export default appWithTranslation(MyApp);
