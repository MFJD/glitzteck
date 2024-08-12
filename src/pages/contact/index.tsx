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
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}>
            <Head />
            <ScrollToTopButton />
            <div className="grid md:grid-cols-2 grid-col-1 md:gaps-5 mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 md:mb-20 mb-10">
                <div className="w-full px-5 md:px-10">
                    <Address />
                </div>
                <div className="w-full px-5 md:px-10 ">
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
export default Contact