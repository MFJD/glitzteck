import ScrollToTopButton from '@/components/scrollButton'
import React from 'react'
import Head from '../components/head'
import Footer from '../components/footer'
import { motion } from 'framer-motion'
import CTA from '../components/Cta'
import Section from './components/section'
import Cards from './components/cards'

const Services = () => {
    return (
        <div className='bg-gray-100'>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: 'easeOut' }}>
                <Head />

                <ScrollToTopButton />
                <div className=" mx-auto max-w-7xl bg-transparent md:mb-20 mb-10">
                    <div className='mt-10 text-center '>
                        <h2 className='text-primary md:text-5xl text-xl primaryText'>Our Services</h2>
                    </div>
                    {/* <div className=''>
                        <Section />
                    </div> */}
                    <div className='-mt-20'>
                        <Cards />
                    </div>
                </div>
                <CTA />
                <Footer />
            </motion.div>
        </div>
    )
}
export default Services