import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Navbar from "@/pages/components/navbar";
import Header from "@/pages/components/header";
import Footer from "@/pages/components/footer";
import CTA from "@/pages/components/Cta";
import ContactUs from "@/pages/components/contactUs";
import Weare from "./components/weare";
import MostValue from "./components/mostvalue";
import Features from "./components/features";
import WhyGlitzteck from "./components/whyglitzteck";
import Services from "./components/services";
import Faq from "./components/faq";
import { path } from 'animejs'
import { usePathname } from "next/navigation";
import React from "react";
import SplashCreen from "./splashscreen";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/scrollButton";


export async function getStaticProps(obj: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(obj.locale, [
        'common',
      ])),
    },
  }
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = React.useState(isHome)
  const router = useRouter();
  const { t } = useTranslation('common')
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') { // Check if in the browser
      return localStorage.getItem('selectedLanguage') || null;
    } // Use initialLanguage on the server 
  });
  useEffect(() => {
    // 1. Set localStorage on component mount
    const data: any = localStorage.getItem('selectedLanguage');

    // 2. Update the translation context 
    if (data! == null)
      i18n.changeLanguage(data);

    if (isLoading) return

  }, [selectedLanguage, isLoading]);

  return (
    <div
    >
      {isLoading && isHome ? (<SplashCreen finishLoading={() => { setIsLoading(false) }} />)
        :
        (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="bg-[#fcfeff]"><Navbar />
            <Weare />
            <MostValue />
            {/* <Features /> */}
            <WhyGlitzteck />
            <Services />
            {/* <Faq /> */}
            {/* <ContactUs /> */}
            <CTA />
            <Footer />
            <ScrollToTopButton />
          </motion.div>)
      }
    </div >
  );
}
