import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyGlitzteck = () => {
    const ref = useRef(null)
    const isInview = useInView(ref, { once: true, amount: 0 })
    return (
        <div className="mx-auto max-w-7xl px-6 pb-2 pt-18 sm:pt-10 lg:px-8 lg:pt-20">
            <div className="text-center">
                <h3 className="font-semibold text-3xl primaryText">Why Choosing Glitzteck ? </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-fit md:mt-20 ">
                    <motion.div ref={ref}
                        initial={{ opacity: 0, y: 80 }}
                        animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Corporis voluptates sit</h3>
                            <p className="text-lg text-gray-700">Consequuntur sunt aut quasi enim aliquam </p>
                        </div>

                    </motion.div>
                    <motion.div ref={ref}
                        initial={{ opacity: 0, y: 80 }}
                        animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Corporis voluptates sit</h3>
                            <p className="text-lg text-gray-700">Consequuntur sunt aut quasi enim aliquam </p>
                        </div>

                    </motion.div>
                    <motion.div ref={ref}
                        initial={{ opacity: 0, y: 80 }}
                        animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Corporis voluptates sit</h3>
                            <p className="text-lg text-gray-700">Consequuntur sunt aut quasi enim aliquam </p>
                        </div>

                    </motion.div>
                    <motion.div ref={ref}
                        initial={{ opacity: 0, y: 80 }}
                        animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Corporis voluptates sit</h3>
                            <p className="text-lg text-gray-700">Consequuntur sunt aut quasi enim aliquam </p>
                        </div>

                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 80 }}
                        animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Corporis voluptates sit</h3>
                            <p className="text-lg text-gray-700">Consequuntur sunt aut quasi enim aliquam </p>
                        </div>

                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 80 }}
                        animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">Corporis voluptates sit</h3>
                            <p className="text-lg text-gray-700">Consequuntur sunt aut quasi enim aliquam </p>
                        </div>

                    </motion.div>
                </div>
                <div className="w-full flex justify-end">
                    <div>
                        <img src="/images/alt-features.png" height={500} width={500} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default WhyGlitzteck