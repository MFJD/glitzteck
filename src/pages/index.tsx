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

 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = React.useState(isHome)

  useEffect(() => {

    if (isLoading) return

  }, [ isLoading]);

  return (
    <div
    >
      {isLoading && isHome ? (<SplashCreen finishLoading={() => { setIsLoading(false) }} />)
        :
        (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
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
