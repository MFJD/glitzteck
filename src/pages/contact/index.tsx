import React from "react";
import Head from "../components/head";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/scrollButton";
import ContactForm from "./components/form";
import Address from "./components/address";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden"
    >
      <Head />
      <ScrollToTopButton />

      {/* --- MAP BACKGROUND LAYER (full-page) --- */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="Glitzteck Office Map"
          // q = address, z = zoom (12 = city view, not too zoomed)
          src="https://maps.google.com/maps?q=1117%20Marquette%20Ave%20Minneapolis%20MN%2055403%20USA&z=12&output=embed"
          className="h-full w-full"
          style={{
            border: 0,
            // less grayscale, no extra dimming
            filter: "grayscale(35%) brightness(0.5) contrast(1.05)",
          }}
          loading="lazy"
          allowFullScreen
        ></iframe>

        {/* readability overlay:
           lighter than before, no blur, more of the map shows through */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.4)_30%,rgba(255,255,255,0.15)_60%,rgba(255,255,255,0)_100%)]" />
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 md:mb-24 mb-16 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-12">
          {/* Left column */}
          <div className="w-full">
            <Address />
          </div>

          {/* Right column */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Contact;
