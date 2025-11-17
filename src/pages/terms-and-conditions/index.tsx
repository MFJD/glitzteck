"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Head from "../components/head";
import Footer from "../components/footer";
import ScrollToTopButton from "@/components/scrollButton";

export default function TermsAndConditions(): JSX.Element {
  const sections = {
    intro: useRef<HTMLElement | null>(null),
    acceptance: useRef<HTMLElement | null>(null),
    services: useRef<HTMLElement | null>(null),
    accounts: useRef<HTMLElement | null>(null),
    fees: useRef<HTMLElement | null>(null),
    ip: useRef<HTMLElement | null>(null),
    confidentiality: useRef<HTMLElement | null>(null),
    warranties: useRef<HTMLElement | null>(null),
    liability: useRef<HTMLElement | null>(null),
    termination: useRef<HTMLElement | null>(null),
    data: useRef<HTMLElement | null>(null),
    compliance: useRef<HTMLElement | null>(null),
    changes: useRef<HTMLElement | null>(null),
    governing: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  } as Record<string, React.RefObject<HTMLElement>>;

  const [activeId, setActiveId] = useState<string>("intro");
  const progressRef = useRef<HTMLDivElement | null>(null);

  // Refs for nav positioning
  const tocWrapperRef = useRef<HTMLDivElement | null>(null); // the grid column wrapper
  const tocRef = useRef<HTMLDivElement | null>(null); // the nav/card element
  const contentRef = useRef<HTMLDivElement | null>(null); // the main article wrapper

  // reading progress indicator
  useEffect(() => {
    function updateProgress() {
      const progress = progressRef.current;
      if (!progress) return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrolled / docHeight) * 100)) : 0;
      progress.style.width = `${pct}%`;
    }

    updateProgress();
    const passiveOpts = { passive: true } as AddEventListenerOptions;
    window.addEventListener("scroll", updateProgress, passiveOpts);
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // highlight current section
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { root: null, rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    Object.values(sections).forEach((r) => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  // PIN NAV (fixed) UNTIL BOTTOM OF CONTENT — then switch to absolute anchored to wrapper bottom
  useEffect(() => {
    function updateNavPosition() {
      const wrapper = tocWrapperRef.current; // the column container
      const nav = tocRef.current; // the nav card
      const content = contentRef.current; // article column (so we know its bottom)
      if (!wrapper || !nav || !content) return;

      // how far from top the fixed nav should be (adjust to your header)
      const fixedTopOffset = 110; // px

      const wrapperRect = wrapper.getBoundingClientRect();
      const wrapperTopPage = wrapperRect.top + window.scrollY;
      const wrapperHeight = wrapperRect.height;

      const navHeight = nav.offsetHeight;
      const contentRect = content.getBoundingClientRect();
      const contentBottomPage = contentRect.top + window.scrollY + contentRect.height;

      // The maximum page Y where the nav top (when fixed) is allowed:
      // we want navBottom (window.scrollY + fixedTopOffset + navHeight) <= contentBottomPage - margin
      const marginBottom = 24; // px gap above the content bottom
      const maxFixedScrollY = contentBottomPage - marginBottom - navHeight - fixedTopOffset;

      // Compute the left and width so the fixed nav aligns with its column
      const left = wrapperRect.left + window.scrollX;
      const width = wrapperRect.width;

      if (window.innerWidth >= 768) {
        // If we've scrolled past the maxFixedScrollY, pin nav absolute at bottom of wrapper
        if (window.scrollY > maxFixedScrollY) {
          // absolute inside wrapper: position relative to wrapper
          // Make sure wrapper has position: relative (it is by default in our layout, but ensure)
          wrapper.style.position = wrapper.style.position || "relative";
          nav.style.position = "absolute";
          nav.style.top = `${wrapperHeight - navHeight - marginBottom}px`;
          nav.style.left = `0px`;
          nav.style.width = `${width}px`;
          nav.style.zIndex = "20";
          nav.style.transform = "none";
        } else {
          // fixed in viewport
          nav.style.position = "fixed";
          nav.style.top = `${fixedTopOffset}px`;
          nav.style.left = `${left}px`;
          nav.style.width = `${width}px`;
          nav.style.zIndex = "60";
          nav.style.transform = "none";
        }
      } else {
        // reset on mobile
        nav.style.position = "";
        nav.style.top = "";
        nav.style.left = "";
        nav.style.width = "";
        nav.style.zIndex = "";
        nav.style.transform = "";
      }
    }

    // initial and listeners
    updateNavPosition();
    const passiveOpts = { passive: true } as AddEventListenerOptions;
    window.addEventListener("scroll", updateNavPosition, passiveOpts);
    window.addEventListener("resize", updateNavPosition);
    window.addEventListener("orientationchange", updateNavPosition);
    return () => {
      window.removeEventListener("scroll", updateNavPosition);
      window.removeEventListener("resize", updateNavPosition);
      window.removeEventListener("orientationchange", updateNavPosition);
    };
  }, []);

  function scrollTo(id: string) {
    const ref = sections[id];
    if (!ref || !ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden"
      style={{ ["--primary" as any]: "#2c7081" }}
    >
      <Head />
      <ScrollToTopButton />

      {/* reading progress */}
      <div className="fixed left-0 top-0 h-1 w-full bg-transparent z-50">
        <div ref={progressRef} className="h-1 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary)]/70 transition-width duration-150" style={{ width: 0 }} />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10 text-base text-gray-800 font-sans">
        {/* compact hero */}
       

        {/* GRID: LEFT nav wrapper (tocWrapperRef) + RIGHT content (contentRef) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* LEFT: wrapper — keep in-flow so absolute positioning anchors to this wrapper when needed */}
          <div className="md:col-span-1 " ref={tocWrapperRef}>
            <div ref={tocRef} className="hidden md:block rounded-2xl p-4 bg-white border border-gray-100 shadow-sm" aria-label="Table of contents" style={{ minWidth: 220 }}>
              <h3 className="text-sm font-semibold">On this page</h3>

              <nav className="mt-4 flex flex-col gap-2 text-sm" aria-label="Terms table of contents">
                {[
                  { id: "intro", label: "Introduction" },
                  { id: "acceptance", label: "Acceptance" },
                  { id: "services", label: "Services" },
                  { id: "accounts", label: "Accounts" },
                  { id: "fees", label: "Fees" },
                  { id: "ip", label: "IP" },
                  { id: "confidentiality", label: "Confidentiality" },
                  { id: "warranties", label: "Warranties" },
                  { id: "liability", label: "Liability" },
                  { id: "termination", label: "Termination" },
                  { id: "data", label: "Data & privacy" },
                  { id: "compliance", label: "Compliance" },
                  { id: "changes", label: "Changes" },
                  { id: "governing", label: "Governing law" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-150 flex items-center gap-3 ${
                      activeId === item.id ? "bg-[color:var(--primary)]/10 text-[color:var(--primary)] font-medium ring-1 ring-[color:var(--primary)]/10" : "text-gray-600 hover:bg-gray-50"
                    }`}
                    aria-current={activeId === item.id ? "true" : "false"}
                  >
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs ${activeId === item.id ? "bg-[color:var(--primary)]/20 text-[color:var(--primary)]" : "bg-gray-100 text-gray-500"}`}>{item.label[0]}</span>
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-4 text-xs text-gray-500">
                Can't find it? <a href="/contact" className="underline">Contact us</a>.
              </div>
            </div>
          </div>

          {/* RIGHT: content */}
          <article className="md:col-span-3 space-y-8 mt-20" ref={contentRef}>
            <section id="intro" ref={sections.intro} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p className="mt-3 text-gray-600">Welcome to Glitzteck. These Terms &amp; Conditions ("Terms") govern your access to and use of our website and services. By using our services, you accept these Terms.</p>
            </section>

            <section id="acceptance" ref={sections.acceptance} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Acceptance of terms</h2>
              <p className="mt-3 text-gray-600">By using our services you confirm you are authorized to enter into these Terms. If you disagree, do not use our services.</p>
            </section>

            <section id="services" ref={sections.services} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Services</h2>
              <p className="mt-3 text-gray-600">Glitzteck provides custom software development, project & delivery management, cloud & DevOps, and cybersecurity. Specific engagement details are set out in separate statements of work.</p>
            </section>

            <section id="accounts" ref={sections.accounts} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Accounts</h2>
              <p className="mt-3 text-gray-600">Keep account information accurate and your credentials secure. You are responsible for activity on your account.</p>
            </section>

            <section id="fees" ref={sections.fees} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Fees &amp; payments</h2>
              <p className="mt-3 text-gray-600">Fees will be specified in project agreements. Payment terms and invoicing procedures are governed by the applicable contract.</p>
            </section>

            <section id="ip" ref={sections.ip} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Intellectual property</h2>
              <p className="mt-3 text-gray-600">Glitzteck retains ownership of pre-existing intellectual property. Deliverables are licensed or transferred according to your agreement.</p>
            </section>

            <section id="confidentiality" ref={sections.confidentiality} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Confidentiality</h2>
              <p className="mt-3 text-gray-600">Each party agrees to protect confidential information and use it only for permitted purposes. Separate NDAs can be executed when needed.</p>
            </section>

            <section id="warranties" ref={sections.warranties} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Warranties</h2>
              <p className="mt-3 text-gray-600">Services are generally provided "as is" except where a written agreement specifies otherwise. Implied warranties are disclaimed to the extent permitted by law.</p>
            </section>

            <section id="liability" ref={sections.liability} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Limitation of liability</h2>
              <p className="mt-3 text-gray-600">To the extent permitted by law, our liability is limited to direct damages up to the fees paid for the services that gave rise to the claim.</p>
            </section>

            <section id="termination" ref={sections.termination} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Termination</h2>
              <p className="mt-3 text-gray-600">Either party can terminate for material breach if not cured. Termination rights and consequences are set out in the relevant contract.</p>
            </section>

            <section id="data" ref={sections.data} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Data &amp; privacy</h2>
              <p className="mt-3 text-gray-600">We process personal data according to our Privacy Policy. Contact us for a data processing agreement for regulated projects.</p>
            </section>

            <section id="compliance" ref={sections.compliance} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Compliance</h2>
              <p className="mt-3 text-gray-600">Clients must ensure they have rights and consents for the content they provide. We comply with laws applicable to our services.</p>
            </section>

            <section id="changes" ref={sections.changes} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Changes to terms</h2>
              <p className="mt-3 text-gray-600">We may update the Terms. Material changes will be notified. Continued use of services after changes means acceptance.</p>
            </section>

            <section id="governing" ref={sections.governing} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Governing law</h2>
              <p className="mt-3 text-gray-600">These terms are governed by the laws of the jurisdiction where Glitzteck is registered, unless you and we agree otherwise in writing.</p>
            </section>

            <section id="contact" ref={sections.contact} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="mt-3 text-gray-600">Questions? Reach out via <a href="/contact" className="underline">/contact</a> or email <a href="mailto:legal@glitzteck.com" className="underline">legal@glitzteck.com</a>.</p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
