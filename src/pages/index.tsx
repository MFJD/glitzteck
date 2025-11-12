"use client";

import React from "react";
import { Inter } from "next/font/google";
import Navbar from "@/pages/components/navbar";
import Footer from "@/pages/components/footer";
import CTA from "@/pages/components/Cta";
import ScrollToTopButton from "@/components/scrollButton";
import { motion } from "framer-motion";
import AnimatedDiagram from "./animated";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const primary = "#2c7081";

  // Page-wide motion variants
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12, scale: 0.995 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatSlow = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className={`${inter.className} bg-[#fcfeff] text-slate-900`}>
      {/* NAVBAR */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* HERO / HEADER */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative overflow-visible"
      >
        <div className="mx-auto max-w-7xl  mt-20 px-6 lg:px-8 pt-8 lg:pt-12 pb-8 lg:pb-14" aria-label="Hero">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left column: content */}
            <motion.div variants={fadeUp} className="space-y-5 lg:space-y-6">
              {/* Slightly smaller headline (per request) */}
              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold leading-tight" style={{ color: primary }}>
                We offer modern solutions for growing your business
              </h1>

              {/* Reduced paragraph size a touch */}
              <p className="text-base sm:text-lg max-w-2xl text-slate-700">
                Transform your ideas into robust, scalable solutions. Glitzteck LLC builds beautiful SaaS products, custom software,
                secure cloud platforms and resilient cybersecurity — all crafted to help your business scale with confidence and speed.
              </p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg ring-1 ring-slate-200 transition"
                  style={{ background: `linear-gradient(90deg, ${primary}, rgba(44,112,129,0.92))`, color: "white" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4-4m-4 4l4 4" />
                  </svg>
                  Get in touch
                </motion.a>

                <motion.a whileHover={{ scale: 1.02 }} href="#services" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 text-sm hover:bg-slate-50 transition">
                  Explore services
                </motion.a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-start">
                  <span className="text-sm font-semibold">SaaS Products</span>
                  <span className="text-xs text-slate-500">Design & scale</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-start">
                  <span className="text-sm font-semibold">Custom Software</span>
                  <span className="text-xs text-slate-500">Built to fit</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-start">
                  <span className="text-sm font-semibold">Cloud</span>
                  <span className="text-xs text-slate-500">Reliable & secure</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-start">
                  <span className="text-sm font-semibold">Cybersecurity</span>
                  <span className="text-xs text-slate-500">Proactive defense</span>
                </div>
              </motion.div>

              <motion.p variants={fadeUp} className="text-sm text-slate-500 mt-2 max-w-xl">Trusted partners across industries — product-first engineering + design-driven delivery.</motion.p>
            </motion.div>

            {/* Right column: large decorative SVG + illustrations. On mobile we make it overlap and float so it's not simply stacked below other large images. */}
            <motion.div variants={fadeUp} className="relative flex justify-center items-center lg:items-end">
              {/* Make the illustration responsive and layered; on small screens it will float and overlap the next section */}
              <motion.div className="w-full max-w-[640px]" variants={floatSlow} animate="animate">
                <AnimatedDiagram />
              </motion.div>

              {/* Decorative blobs for depth; they help break the stacking feel on mobile */}
              <div className="pointer-events-none absolute -right-6 -top-6 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(44,112,129,0.14)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-6 w-36 h-36 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.07)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
            </motion.div>
          </div>
        </div>

        {/* Pull next section up on small screens so hero and the following image don't become two separate giant blocks stacked one after another */}
        <div className="-mt-12 sm:-mt-16 lg:mt-0" />
      </motion.header>

      {/* MAIN LONG SINGLE PAGE SECTIONS */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-28 space-y-14 -mt-6">
        {/* WHO WE ARE */}
        <motion.section
          id="who-we-are"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeUp} className="order-last lg:order-first">
              {/* Decorative image: team + product. On small screens we shrink and offset it to avoid a big stacked block. */}
              <div className="rounded-2xl overflow-hidden  transform sm:translate-y-0 -translate-y-6 sm:-translate-y-2">
                <img src="/images/front-image.png" alt="Team working illustration" className="w-full h-auto object-cover sm:object-contain" />
              </div>
            </motion.div>
            <div>
              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-slate-900">Who We Are</motion.h2>

              <motion.p variants={fadeUp} className="mt-3 text-slate-700 leading-relaxed text-base">
                At <strong>Glitzteck</strong>, we’re a forward-thinking digital company dedicated to transforming ideas into powerful software
                solutions. Our strength lies in delivering innovative SaaS products, custom-built software, and comprehensive IT services that
                help businesses scale efficiently and securely.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 text-slate-700 leading-relaxed text-base">
                Driven by a passion for technological excellence, we combine product-centric processes with cutting-edge technology to accelerate
                development and deliver unmatched digital experiences. Our team of experts is committed to understanding your unique challenges
              </motion.p>

              <motion.ul variants={fadeUp} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[rgba(44,112,129,0.08)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill={primary} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Product-first engineering</div>
                    <div className="text-sm text-slate-500">We focus on building products that customers love.</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[rgba(44,112,129,0.08)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3L19 8V16C19 18 17 20 14 20H10C7 20 5 18 5 16V8L12 3Z" fill={primary} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Design & Delivery</div>
                    <div className="text-sm text-slate-500">Human-centred design and reliable delivery processes.</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[rgba(44,112,129,0.08)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8 2 5 5 5 9C5 14 12 22 12 22C12 22 19 14 19 9C19 5 16 2 12 2Z" fill={primary} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Security-first mindset</div>
                    <div className="text-sm text-slate-500">Security and compliance integrated from day one.</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[rgba(44,112,129,0.08)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 12H21" stroke={primary} strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 6H21" stroke={primary} strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 18H21" stroke={primary} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">End-to-end support</div>
                    <div className="text-sm text-slate-500">From idea to maintenance — we stay by your side.</div>
                  </div>
                </li>
              </motion.ul>
            </div>

            
          </div>
        </motion.section>

        {/* WHAT WE MOST VALUE (translated from french to english) */}
        <motion.section
          id="values"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="bg-gradient-to-r from-[rgba(44,112,129,0.04)] to-transparent rounded-2xl p-6 sm:p-8 lg:p-12"
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold text-slate-900">What We Most Value</motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-slate-600 max-w-3xl text-base">
            At Glitzteck we foster a people-first culture focused on collaboration, wellbeing and continuous growth. Below are
            the pillars that guide how we work and build value for our clients.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[rgba(44,112,129,0.12)]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2Z" fill={primary}></path><path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20" fill={primary}></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Culture</h4>
                  <p className="text-sm text-slate-500">We build a collaborative, positive and inspiring workplace where ideas flourish and people belong.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[rgba(44,112,129,0.12)]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8H9L12 2Z" fill={primary}></path><path d="M6 10H18V20H6V10Z" fill={primary}></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Wellbeing & Fulfillment</h4>
                  <p className="text-sm text-slate-500">We prioritise the happiness and growth of our people — creative, motivated teams deliver exceptional work.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[rgba(44,112,129,0.12)]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2V12L20 20" stroke={primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Resilience & Growth</h4>
                  <p className="text-sm text-slate-500">We turn challenges into opportunities — learning, iterating and pushing forward with determination.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* WHY CHOOSE GLITZTECK */}
        <motion.section
          id="why"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12"
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold">Why Choose Glitzteck?</motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-slate-600 max-w-3xl text-base">Four reasons we are trusted by our partners:</motion.p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-[rgba(44,112,129,0.12)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill={primary}></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Strategic & Trusted Partnership</h4>
                  <p className="text-sm text-slate-500">More than a provider — we become your digital ally, supporting growth through collaboration and trust.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-[rgba(44,112,129,0.12)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6H20V18H4V6Z" fill={primary}></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Innovative & Tailored Solutions</h4>
                  <p className="text-sm text-slate-500">We design smart, scalable and creative digital solutions — built around your unique business needs.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-[rgba(44,112,129,0.12)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke={primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Reliability & Excellence</h4>
                  <p className="text-sm text-slate-500">Quality and consistency ensure smooth operations, dependable support and great outcomes.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-[rgba(44,112,129,0.12)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 12H21" stroke={primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Future-Ready Expertise</h4>
                  <p className="text-sm text-slate-500">We keep you competitive with cloud, cybersecurity and digital transformation know-how.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* EXPANDED SERVICES SUMMARY */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="bg-gradient-to-r from-transparent to-[rgba(44,112,129,0.02)] rounded-2xl p-6 sm:p-8 lg:p-12"
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold">What we do — at a glance</motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-slate-600 max-w-3xl text-base">Glitzteck LLC specialises in four core areas. Each is backed by experience, robust engineering practices and a product-first mindset.</motion.p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl shadow-sm">
              <h5 className="font-semibold">Software Development</h5>
              <p className="text-sm text-slate-500 mt-2">Full-stack teams building custom web and mobile platforms, APIs and integrations tailored to your business.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl shadow-sm">
              <h5 className="font-semibold">Product & Project Management</h5>
              <p className="text-sm text-slate-500 mt-2">From discovery to delivery — validated roadmaps, agile teams and clear metrics to reduce risk and speed up value.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl shadow-sm">
              <h5 className="font-semibold">Cloud & DevOps</h5>
              <p className="text-sm text-slate-500 mt-2">Reliable, scalable cloud architecture (multi-cloud & serverless), infrastructure as code and robust monitoring.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl shadow-sm">
              <h5 className="font-semibold">Cybersecurity</h5>
              <p className="text-sm text-slate-500 mt-2">Proactive security programs, threat modelling, secure coding, incident response and managed detection services.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* LARGE visual callout / gallery of SVGs. Rearranged so on mobile two large images aren't stacked directly one after another: we use a mosaic layout with overlap */}
        <motion.section
          className="rounded-2xl p-6 sm:p-8 lg:p-12 bg-white shadow-sm overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold">Visual highlights</motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-slate-600 max-w-3xl text-base">A taste of the visuals and thinking that go into our products.</motion.p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Left big image: on small screens it will be slightly offset */}
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border p-4 transform sm:translate-y-0 -translate-y-6 sm:-translate-y-0">
              <img src="/images/visual-1.svg" alt="visual 1" className="w-full h-44 object-contain" />
              <div className="mt-3 font-semibold">Product dashboards</div>
              <div className="text-sm text-slate-500">Designs built for clarity and action.</div>
            </motion.div>

            {/* Middle visual: floats up on mobile to avoid simple stacking */}
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border p-4 -mt-6 md:mt-0 z-10 bg-white">
              <img src="/images/visual-2.svg" alt="visual 2" className="w-full h-44 object-contain" />
              <div className="mt-3 font-semibold">Secure architectures</div>
              <div className="text-sm text-slate-500">Resilient infrastructure patterns for modern clouds.</div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border p-4">
              <img src="/images/visual-3.svg" alt="visual 3" className="w-full h-44 object-contain" />
              <div className="mt-3 font-semibold">Collaboration flows</div>
              <div className="text-sm text-slate-500">Seamless workflows between teams and tools.</div>
            </motion.div>
          </div>
        </motion.section>

        {/* CONTACT / CTA ANCHOR */}
        <div id="contact" />

        {/* Keep original CTA and Footer as requested */}
        <div>
          <CTA />
        </div>


      </main>
      <div>
        <Footer />
      </div>
      <div className="relative z-30">
        <ScrollToTopButton />
      </div>
    </div>
  );
}
