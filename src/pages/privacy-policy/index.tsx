"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Head from "../components/head";
import Footer from "../components/footer";
import ScrollToTopButton from "@/components/scrollButton";

export default function TermsConditions(): JSX.Element {
  // Refs for each section for smooth scrolling
  const sections = {
    intro: useRef<HTMLElement | null>(null),
    acceptance: useRef<HTMLElement | null>(null),
    services: useRef<HTMLElement | null>(null),
    obligations: useRef<HTMLElement | null>(null),
    payment: useRef<HTMLElement | null>(null),
    intellectual: useRef<HTMLElement | null>(null),
    termination: useRef<HTMLElement | null>(null),
    liability: useRef<HTMLElement | null>(null),
    privacy: useRef<HTMLElement | null>(null),
    changes: useRef<HTMLElement | null>(null),
  } as Record<string, React.RefObject<HTMLElement>>;

  const [activeId, setActiveId] = useState<string>("intro");
  const tocWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const tocFixedRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function updateTOCPosition() {
      const wrapper = tocWrapperRef.current;
      const fixed = tocFixedRef.current;
      if (!wrapper || !fixed) return;
      if (window.innerWidth >= 768) {
        const rect = wrapper.getBoundingClientRect();
        const left = rect.left + window.scrollX;
        const width = rect.width;
        const bottom = wrapper.getBoundingClientRect().bottom + window.scrollY;
        const footerOffset = document.body.scrollHeight - window.innerHeight - 24; // 24px offset from footer
        let top = 112;

        // Adjust top if reaching the end of page so it doesn't overlap footer
        if (window.scrollY + top + fixed.offsetHeight > footerOffset) {
          top = footerOffset - window.scrollY - fixed.offsetHeight;
        }

        fixed.style.position = 'fixed';
        fixed.style.top = `${top}px`;
        fixed.style.left = `${left}px`;
        fixed.style.width = `${width}px`;
        fixed.style.zIndex = '40';
        fixed.style.transform = 'translateY(0)';
        fixed.style.opacity = '1';
      } else {
        if (fixed) {
          fixed.style.position = '';
          fixed.style.top = '';
          fixed.style.left = '';
          fixed.style.width = '';
          fixed.style.zIndex = '';
          fixed.style.transform = '';
          fixed.style.opacity = '';
        }
      }
    }

    updateTOCPosition();
    window.addEventListener('scroll', updateTOCPosition);
    window.addEventListener('resize', updateTOCPosition);
    window.addEventListener('orientationchange', updateTOCPosition);
    return () => {
      window.removeEventListener('scroll', updateTOCPosition);
      window.removeEventListener('resize', updateTOCPosition);
      window.removeEventListener('orientationchange', updateTOCPosition);
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { root: null, rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    Object.values(sections).forEach((r) => {
      if (r.current) obs.observe(r.current);
    });

    return () => obs.disconnect();
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
      style={{ ['--primary' as any]: '#2c7081' }}
    >
      <Head />
      <ScrollToTopButton />

      <main className="max-w-6xl mx-auto px-6 py-12 text-base text-gray-800 font-sans leading-relaxed">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left sticky TOC */}
          <aside className="hidden md:block md:col-span-1">
            <div className="relative" ref={tocWrapperRef}>
              <div
                ref={tocFixedRef}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm transition-all duration-300 ease-out"
              >
                <h3 className="text-sm font-semibold">On this page</h3>
                <nav className="mt-4 flex flex-col gap-2 text-sm">
                  {[
                    { id: 'intro', label: '1. Introduction' },
                    { id: 'acceptance', label: '2. Acceptance of Terms' },
                    { id: 'services', label: '3. Services' },
                    { id: 'obligations', label: '4. Your Obligations' },
                    { id: 'payment', label: '5. Payment Terms' },
                    { id: 'intellectual', label: '6. Intellectual Property' },
                    { id: 'termination', label: '7. Termination' },
                    { id: 'liability', label: '8. Liability' },
                    { id: 'privacy', label: '9. Privacy' },
                    { id: 'changes', label: '10. Changes' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`text-left w-full px-2 py-2 rounded-md transition-colors duration-150 ${
                        activeId === item.id
                          ? 'bg-gradient-to-r from-[color:var(--primary)]/10 to-white border border-[color:var(--primary)]/10 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-4 text-xs text-gray-500">Can't find what you need? <a href="/contact" className="underline">Contact us</a>.</div>
              </div>
            </div>
          </aside>

          {/* Right content */}
          <article className="md:col-span-3 pt-10 space-y-8">
            <section id="intro" ref={sections.intro} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p className="mt-3 text-gray-600">Welcome to Glitzteck. By using our services, you agree to the following terms and conditions.</p>
            </section>

            <section id="acceptance" ref={sections.acceptance} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">2. Acceptance of Terms</h2>
              <p className="mt-3 text-gray-600">By accessing or using our services, you accept and agree to be bound by these terms.</p>
            </section>

            <section id="services" ref={sections.services} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">3. Services</h2>
              <p className="mt-3 text-gray-600">We provide software development, consulting, and related services. Services are subject to additional terms communicated before delivery.</p>
            </section>

            <section id="obligations" ref={sections.obligations} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">4. Your Obligations</h2>
              <p className="mt-3 text-gray-600">You agree to provide accurate information, comply with applicable laws, and use services responsibly.</p>
            </section>

            <section id="payment" ref={sections.payment} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">5. Payment Terms</h2>
              <p className="mt-3 text-gray-600">Fees for our services are described in agreements or invoices. Payments must be made in accordance with agreed terms.</p>
            </section>

            <section id="intellectual" ref={sections.intellectual} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
              <p className="mt-3 text-gray-600">All intellectual property created by Glitzteck remains our property unless otherwise agreed. You may not copy, distribute, or reverse engineer our work.</p>
            </section>

            <section id="termination" ref={sections.termination} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">7. Termination</h2>
              <p className="mt-3 text-gray-600">We may terminate or suspend services for violations of terms or legal requirements. Upon termination, you must stop using our services.</p>
            </section>

            <section id="liability" ref={sections.liability} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">8. Liability</h2>
              <p className="mt-3 text-gray-600">Glitzteck is not liable for indirect, incidental, or consequential damages arising from service use. Our total liability is limited to the amount paid for the services.</p>
            </section>

            <section id="privacy" ref={sections.privacy} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">9. Privacy</h2>
              <p className="mt-3 text-gray-600">We handle personal data in accordance with our Privacy Policy. Please review it for details on collection, use, and rights.</p>
              <p className="mt-3 text-gray-700">See <a href="/privacy-policy" className="underline">Privacy Policy</a> for more information.</p>
            </section>

            <section id="changes" ref={sections.changes} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold">10. Changes to Terms</h2>
              <p className="mt-3 text-gray-600">We may update these terms periodically. Updated terms will be posted on this page with an updated "Effective Date". Continued use of our services constitutes acceptance.</p>
              <div className="mt-4 text-sm text-gray-500">Effective date: <strong>November 14, 2025</strong></div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
