"use client";

import React from "react";
import { motion } from "framer-motion";

import Head from "../components/head";
import Footer from "../components/footer";
import ScrollToTopButton from "@/components/scrollButton";

import CTA from "../components/Cta";
import AboutHeaderSection from "./components/header";
import MissionSection from "./components/mission";
import ValuesAbout from "./components/values";
import ImageAbout from "./components/image";

const AboutUs: React.FC = () => {
  return (
   <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden"
    >
      <Head />
      <ScrollToTopButton />

      {/* --- FOREGROUND CONTENT --- */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 md:mb-24 mb-16 pt-16 md:pt-24">
        <section className="py-4 sm:py-6 lg:py-8">
          <AboutHeaderSection />
        </section>

        {/* MISSION / KPI */}
        <section className="py-2 sm:py-4 lg:py-4">
          <MissionSection />
        </section>

        {/* FOUNDER / STORY / IMAGE */}
        <section className="py-2 sm:py-4 lg:py-4">
          <ImageAbout />
        </section>

        {/* VALUES */}
        <section className="py-2 sm:py-4 lg:py-4">
          <ValuesAbout />
        </section>

        {/* CTA */}
        <section className="py-1 sm:py-1 lg:py-2">
          <CTA />
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default AboutUs;
