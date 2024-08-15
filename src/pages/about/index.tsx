import React from "react";
import Head from "../components/head";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/scrollButton";

import CTA from "../components/Cta";
import AboutHeaderSection from "./components/header";
import MissionSection from "./components/mission";
import ValuesAbout from "./components/values";
import ImageAbout from "./components/image";
const AboutUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}>
            <Head />
            <ScrollToTopButton />

            <div className="mx-auto max-w-7xl ">
                <AboutHeaderSection />
                <MissionSection />
                <ImageAbout />
                <ValuesAbout />
                <CTA />
            </div>
            <Footer />
        </motion.div>
    )
}
export default AboutUs