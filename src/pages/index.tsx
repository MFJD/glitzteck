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

  }, [selectedLanguage]);


  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);

    localStorage.setItem('selectedLanguage', language);
    router.push(router.asPath, router.asPath, { locale: language });
  };
  return (
    <div className="bg-[#fcfeff]">
      <Navbar />
      <Weare />
      <MostValue />
      <Features />
      <WhyGlitzteck />
      <Services />
      <ContactUs />
      <CTA />
      <Footer />
    </div>
  );
}
