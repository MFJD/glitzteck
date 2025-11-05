"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/pages/components/navbar";
import Footer from "@/pages/components/footer";
import CTA from "@/pages/components/Cta";
// import ContactUs from "@/pages/components/contactUs";
import Weare from "./components/weare";
import MostValue from "./components/mostvalue";
// import Features from "./components/features";
import WhyGlitzteck from "./components/whyglitzteck";
import Services from "./components/services";
// import Faq from "./components/faq";
//import SplashCreen from "./splashscreen";
import ScrollToTopButton from "@/components/scrollButton";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // 1. we always start with splash ON for the first load of this tab
  //    (sessionStorage logic should live in your Root wrapper like we discussed)
  const [isLoading, setIsLoading] = useState(true);

  // ---------- MOTION VARIANTS (fast + smooth) ----------

  // Main page reveal (whole page content)
  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.99,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.35, // fast
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Background glow fade-in
  const bgGlowVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  // Stagger container for sections
  const sectionGroupVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.08,
      },
    },
  };

  // Each block/section anim
  const sectionItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative">


      <motion.div
        className="relative min-h-screen bg-[#fcfeff] text-slate-900"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* subtle brand glow in background */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
          variants={bgGlowVariants}
          initial="hidden"
          animate="visible"
        >
          {/* cyan main glow */}
          <div className="h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
          {/* purple accent */}
          <div className="absolute right-[-120px] top-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.07)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
          {/* teal accent */}
          <div className="absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.07)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
        </motion.div>

        {/* NAVBAR (quick fade, feels snappy) */}
        <motion.div
          initial={{ opacity: 0, y: -4, filter: "blur(2px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="relative z-20"
        >
          <Navbar />
        </motion.div>

        {/* MAIN CONTENT with very light stagger */}
        <motion.main
          className="relative z-10 flex flex-col"
          variants={sectionGroupVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={sectionItemVariants}>
            <Weare />
          </motion.section>

          <motion.section variants={sectionItemVariants}>
            <MostValue />
          </motion.section>

          {/* <motion.section variants={sectionItemVariants}>
              <Features />
            </motion.section> */}

          <motion.section variants={sectionItemVariants}>
            <WhyGlitzteck />
          </motion.section>

          <motion.section variants={sectionItemVariants}>
            <Services />
          </motion.section>

          {/* <motion.section variants={sectionItemVariants}>
              <Faq />
            </motion.section> */}

          {/* <motion.section variants={sectionItemVariants}>
              <ContactUs />
            </motion.section> */}

          <motion.section variants={sectionItemVariants}>
            <CTA />
          </motion.section>

          <motion.section variants={sectionItemVariants}>
            <Footer />
          </motion.section>
        </motion.main>

        {/* Scroll to top button (fade separately, a hair later) */}
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.25,
              ease: "easeOut",
            },
          }}
        >
          <ScrollToTopButton />
        </motion.div>
      </motion.div>

    </div>
  );
}
