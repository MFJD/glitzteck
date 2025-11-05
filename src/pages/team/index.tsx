// ================================
// pages/team.tsx (Team Page) — Clean white, removed "People we build with"
// ================================
"use client";
import React from "react";
import Head from "../components/head";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/scrollButton";
import CTA from "../components/Cta";
import OurTeam from "./components/teams";

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } };

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600 shadow-sm">
    {children}
  </span>
);

const Team = () => {
  return (
    <motion.div initial="hidden" animate="show" variants={fade} className="min-h-screen bg-white text-gray-900">
      <Head />
      <ScrollToTopButton />

      {/* Hero */}
      <section className="relative">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(38rem 14rem at 50% -8%, rgba(99,102,241,0.10), transparent), radial-gradient(24rem 10rem at 85% 10%, rgba(56,189,248,0.10), transparent)",
          }}
        />
        <div className="mx-auto max-w-6xl px-5 pt-28 pb-12 text-center">
          <Pill>Small team • Big outcomes</Pill>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Meet the Glitzteck Leadership</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-[15px]">
            Three people. One shared goal — ship quality. We obsess over details, simplify what matters, and deliver results you can feel.
          </p>
        </div>
      </section>

      {/* Core Team (3 cards) */}
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <OurTeam />
      </section>

      {/* Principles (concise text) */}
      <section className="mx-auto max-w-4xl px-5 pb-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
        <div className="mx-auto mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <p className="text-[12px] leading-relaxed text-gray-600"><span className="font-semibold text-gray-900">Clarity first.</span> Every project starts with a crisp problem statement and a tiny plan.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <p className="text-[12px] leading-relaxed text-gray-600"><span className="font-semibold text-gray-900">Quality by default.</span> We choose simple, durable solutions over flash.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <p className="text-[12px] leading-relaxed text-gray-600"><span className="font-semibold text-gray-900">Respect the user.</span> Real feedback beats assumptions — always.</p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </motion.div>
  );
};

export default Team;
