import React from "react";
import Head from "../components/head";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/scrollButton";
import Users from "./components/users";
import CTA from "../components/Cta";
const Team = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}>
            <Head />
            <ScrollToTopButton />
            <div className="w-full justify-center flex my-10">
                <div className="md:w-[60%] w-full px-4 md:px-0">
                    <h3 className="primaryText text-3xl text-center">Our Leadership Team</h3>
                    <p className="text-center text-gray-600 text-lg textalign">Our leadership team is comprised of incredible humans who want to make the world a better place and improve the lives of their team members.</p>
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-6 pb-2 pt-18 sm:pt-10 lg:px-8 lg:pt-20">
                <Users />
                <CTA/>
            </div>
            <Footer />
        </motion.div>
    )
}
export default Team