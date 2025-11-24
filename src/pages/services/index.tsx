"use client";

import React from "react";
import ScrollToTopButton from "@/components/scrollButton";
import Head from "../components/head";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import CTA from "../components/Cta";
import Cards from "./components/cards";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const { t } = useTranslation();

  const processSteps = [
    { t: t("services_process_discover"), d: t("services_process_discover_desc") },
    { t: t("services_process_design"), d: t("services_process_design_desc") },
    { t: t("services_process_build"), d: t("services_process_build_desc") },
    { t: t("services_process_operate"), d: t("services_process_operate_desc") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden"
    >
      <Head />
      <ScrollToTopButton />

      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 md:mb-24 mb-16 pt-16 md:pt-24">

        {/* Hero */}
        <section className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-16 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-6 md:grid-cols-2"
          >
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm">
                {t("services_hero_badge")}
              </span>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {t("services_hero_title")}
              </h1>
              <p className="mx-auto md:mx-0 mt-2 max-w-xl text-[13px] leading-relaxed text-slate-600">
                {t("services_hero_paragraph")}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-3 py-2 text-[12px] font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
                >
                  {t("services_hero_cta1")}
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-[12px] font-semibold text-slate-700 hover:border-slate-300 transition"
                >
                  {t("services_hero_cta2")}
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Cards */}
        <section id="services" className="relative z-10  pb-4">
          <Cards />
        </section>

        {/* Featured Product */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group grid items-center gap-6 rounded-2xl border border-slate-100 bg-white p-5 md:grid-cols-2 md:p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            <div>
              <Link
                href="https://lexinvoice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-700 hover:bg-indigo-100 transition"
              >
                {t("services_featured_badge")}
              </Link>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                <Link
                  href="https://lexinvoice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-indigo-400/60 underline-offset-4 transition"
                >
                  {t("services_featured_title")}
                </Link>
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                {t("services_featured_paragraph")}
              </p>
              <ul className="mt-3 space-y-2 text-[12px] text-slate-600">
                <li>{t("services_featured_list1")}</li>
                <li>{t("services_featured_list2")}</li>
                <li>{t("services_featured_list3")}</li>
                <li>{t("services_featured_list4")}</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 py-2 text-[12px] font-semibold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/10 transition
                             hover:shadow-fuchsia-500/40 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                >
                  {t("services_featured_cta")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto h-72 w-full max-w-md sm:h-80 md:h-64 lg:h-72">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-100 via-sky-100 to-emerald-100" />
              <Link
                href="https://lexinvoice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-2 block rounded-xl border border-slate-200 bg-white/90 p-2 shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/lexinvoice.png"
                    alt={t("services_featured_image_alt")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-emerald-500/20" />
                  <div className="pointer-events-none absolute -inset-6 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 bg-gradient-to-r from-indigo-400/30 via-violet-400/20 to-fuchsia-400/30" />
                </div>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
          <h3 className="mb-3 text-lg font-semibold tracking-tight">{t("services_process_title")}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((c, i) => (
              <motion.div
                key={i}
                className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform"
                whileHover={{ y: -2 }}
              >
                <div className="text-sm font-semibold">{c.t}</div>
                <div className="mt-1 text-[12px] leading-relaxed text-slate-600">{c.d}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="relative z-10">
          <CTA />
        </div>
      </main>

      <motion.footer
        className="relative z-10"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      >
        <Footer />
      </motion.footer>
    </motion.div>
  );
};

export default Services;
