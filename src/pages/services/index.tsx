// ================================
// pages/services.tsx — Mobile-first, image-rich services page
// ================================
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
import { ArrowRight } from "lucide-react"; // NEW: for nicer CTA icon

const page = {
  hidden: { opacity: 0, y: 10, scale: 0.99, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const Services: React.FC = () => {
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

        {/* Hero */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-6">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm">What we do</span>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Services that move your product forward</h1>
              <p className="mx-auto md:mx-0 mt-2 max-w-xl text-[13px] leading-relaxed text-slate-600">
                We build software, deliver projects with clarity, run cloud at scale, and secure your systems end-to-end.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-3 py-2 text-[12px] font-semibold text-white shadow-sm hover:bg-indigo-700">Start a project</Link>
                <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-[12px] font-semibold text-slate-700 hover:border-slate-300">Explore services</a>
              </div>
            </div>
          </div>
        </section>

        {/* Compact card grid */}
        <section id="services" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
          <Cards />
        </section>

        {/* =========================
            Featured product: Lexinvoice
           ========================= */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="group grid items-center gap-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
            <div>
              {/* Badge links to lexinvoice.com in a new tab */}
              <Link
                href="https://lexinvoice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-700 hover:bg-indigo-100 transition"
                aria-label="Open Lexinvoice (opens in a new tab)"
              >
                New • SaaS
              </Link>

              {/* Title links to lexinvoice.com in a new tab */}
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                <Link
                  href="https://lexinvoice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-indigo-400/60 underline-offset-4"
                >
                  Lexinvoice — simple billing that scales
                </Link>
              </h2>

              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                Automate quotes, invoices, and payments with beautiful templates, smart reminders, and real-time status.
                Gérez facilement les factures de vos clients — suivi, relances, et encaissements sans effort.
              </p>
              <ul className="mt-3 space-y-2 text-[12px] text-slate-600">
                <li>• Client directory & recurring invoices</li>
                <li>• Multi-currency, taxes, and PDF export</li>
                <li>• Dashboard with overdue tracking</li>
                <li>• Webhooks & API for integrations</li>
              </ul>

              {/* PRETTIER single CTA */}
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 py-2 text-[12px] font-semibold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/10 transition
                             hover:shadow-fuchsia-500/40 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                >
                  Talk to us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Image: subtle gradient overlay + clickable link */}
            <div className="relative mx-auto h-72 w-full max-w-md sm:h-80 md:h-64 lg:h-72">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-100 via-sky-100 to-emerald-100" />
              <Link
                href="https://lexinvoice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-2 block rounded-xl border border-slate-200 bg-white/90 p-2 shadow-sm overflow-hidden"
                aria-label="Open Lexinvoice (opens in a new tab)"
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  {/* Image itself */}
                  <Image
                    src="/images/lexinvoice.png"
                    alt="Lexinvoice product preview"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  {/* BEAUTY: subtle gradient veil on top of the image */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-emerald-500/20" />
                  {/* Extra soft glow on hover */}
                  <div className="pointer-events-none absolute -inset-6 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 bg-gradient-to-r from-indigo-400/30 via-violet-400/20 to-fuchsia-400/30" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
          <h3 className="mb-3 text-lg font-semibold tracking-tight">Our process</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Discover", d: "Understand goals, users, and risks." },
              { t: "Design", d: "Flows, wireframes, and systems." },
              { t: "Build", d: "Iterate in small, shippable slices." },
              { t: "Operate", d: "Observe, optimize, and scale." },
            ].map((c, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold">{c.t}</div>
                <div className="mt-1 text-[12px] leading-relaxed text-slate-600">{c.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA & Footer */}
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
