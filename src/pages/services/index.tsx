import ScrollToTopButton from '@/components/scrollButton'
import React from 'react'
import Head from '../components/head'
import Footer from '../components/footer'
import { motion } from 'framer-motion'
import SoftwareEngineer from './components/softwareEngineering'
import ProjectManagement from './components/projectManagement'
import CyberSecurity from './components/cyberSecurity'
import CloudComputing from './components/cloudComputing'
import CTA from '../components/Cta'


const Services = () => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: 'easeOut' }}>
                <Head />
                <ScrollToTopButton />
                <div className=" mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 md:mb-20 mb-10">
                    <div className='text-center my-16'>
                        <h3 className='text-black text-5xl'>WordPress Themes & Plugins</h3>
                        <p className='text-xl text-gray-500 mt-4'>Home Of Divi, The Most Popular WordPress Theme In The World</p>

                    </div>
                    <div>
                        <SoftwareEngineer />
                    </div>
                    <div>
                        <ProjectManagement />
                    </div>
                    <div>
                        <CyberSecurity />
                    </div>
                    <div>
                        <CloudComputing />
                    </div>
                </div>
                <CTA />
                <Footer />
            </motion.div>
        </>
    )
}
export default Services