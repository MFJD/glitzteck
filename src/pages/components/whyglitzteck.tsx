import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyGlitzteck = () => {
    const ref = useRef(null)
    const isInview = useInView(ref, { once: true, amount: 0 })
    return (
        <motion.div ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInview ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeInOut' }}
         className="mx-auto max-w-7xl px-6 pb-2 pt-18 sm:pt-10 lg:px-8 lg:pt-36">
            <div className="text-center">
                <h3 className="font-semibold text-3xl md:mt-0 mt-20 primaryText">Why Choosing Glitzteck ? </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:mt-14 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-fit md:mt-14 ">
                    <motion.div ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                         className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Strategic Partnership</h3>
                            <p className="text-lg text-gray-600 text-left">GlitzTeck offers more than IT services; we 
                                provide a collaborative partnership aimed at advancing and securing your
                                 business’s future. </p>
                        </div>

                    </motion.div>
                    <motion.div ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Innovative Solutions</h3>
                            <p className="text-lg text-gray-600 text-left">We empower your business with 
                                cutting-edge technology and creative solutions that address your 
                                unique challenges and opportunities. </p>
                        </div>

                    </motion.div>
                    <motion.div ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Unmatched Reliability</h3>
                            <p className="text-lg text-gray-600 text-left"> Our commitment to reliability 
                                ensures that you receive consistent and dependable support, crucial 
                                for maintaining smooth operations. </p>
                        </div>

                    </motion.div>
                    <motion.div ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Excellence in Service</h3>
                            <p className="text-lg text-gray-600 text-left"> We are dedicated to delivering 
                                exceptional quality in every aspect of our work, setting a high 
                                standard for performance and outcomes. </p>
                        </div>

                    </motion.div>
                    <motion.div
                        ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Future-Proofing</h3>
                            <p className="text-lg text-gray-600 text-left">Our services are designed to 
                                keep your business ahead of technological trends, helping you 
                                stay relevant and competitive in a rapidly evolving digital world. </p>
                        </div>

                    </motion.div>
                    <motion.div
                        ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Dedicated Expertise</h3>
                            <p className="text-lg text-gray-600 text-left">With a focus on excellence and 
                                innovation, GlitzTeck stands out for its ability to integrate 
                                advanced technology seamlessly into your business strategy. </p>
                        </div>

                    </motion.div>
                </div>
                <div className="w-full flex justify-end">
                    <div>
                        <img src="/images/alt-features.png" height={500} width={500} alt="" />
                    </div>
                </div>
            </div>

        </motion.div>
    )
}
export default WhyGlitzteck