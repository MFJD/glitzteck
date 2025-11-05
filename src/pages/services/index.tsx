"use client";

import React from "react";
import ScrollToTopButton from "@/components/scrollButton";
import Head from "../components/head";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import CTA from "../components/Cta";
// import Section from "./components/section";
import Cards from "./components/cards";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const { t } = useTranslation();

  //
  // ---- Variants (mêmes que Home / About / Contact, rapides et smooth) ----
  //

  // Animation globale de la page
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
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Glow de fond
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

  // Conteneur avec stagger (le contenu principal)
  const sectionGroupVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.08,
      },
    },
  };

  // Animation de chaque sous-bloc (titre / cards)
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
    <motion.div
      className="relative min-h-screen bg-[#fcfeff] text-slate-900"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Glow de marque animé en fond */}
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

      {/* Header top bar */}
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
        <Head />
      </motion.div>

      {/* Scroll to top button */}
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

      {/* Contenu principal avec stagger */}
      <motion.main
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-transparent md:mb-20 mb-10"
        variants={sectionGroupVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Titre */}
        <motion.div
          variants={sectionItemVariants}
          className="mt-10 text-center"
        >
          <h2 className="text-primary primaryText md:text-5xl text-xl">
            {t("ourservices")}
          </h2>
        </motion.div>

        {/* Section supplémentaire si tu veux la réactiver */}
        {/* <motion.div variants={sectionItemVariants}>
          <Section />
        </motion.div> */}

        {/* Cards */}
        <motion.div
          variants={sectionItemVariants}
          className="-mt-20"
        >
          <Cards />
        </motion.div>
      </motion.main>

      {/* CTA */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 6 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
      >
        <CTA />
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="relative z-10"
        initial={{ opacity: 0, y: 4 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
      >
        <Footer />
      </motion.footer>
    </motion.div>
  );
};

export default Services;
