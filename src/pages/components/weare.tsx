import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Weare = () => {
    const ref = useRef(null)
    const isInview = useInView(ref, { amount: 0 })

    return (
        <motion.div
            ref={ref}
            className="mx-auto max-w-7xl px-6 pb-2 pt-18 sm:pt-10 lg:px-8 lg:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <motion.div
                    ref={ref}
                    // initial={{ opacity: 0, x: -100 }}
                    // animate={isInview ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                >
                    <div className="w-full bg-[#f6fbfc] p-8 h-auto md:mt-16 mt-0">
                        <h2 className="text-lg fonyt-bold text-blue-700">Who we are</h2>
                        <h3 className="text-xl primaryText py-3 ">Hey!, we’re glad you want to know more about us.</h3>
                        <p className="text-lg">At Glitzteck, our distinct edge is rooted in our relentless pursuit of software excellence, focusing on two core pillars: product-focused processes and advanced tech we build to accelerate development. This dual emphasis ensures we deliver not just software, but unparalleled software products to you. As more than just consultants, we are your experienced navigators in the realm of digital innovation.</p>
                    </div>

                </motion.div>
                <motion.div
                    ref={ref}
                    // initial={{ opacity: 0, x: 100 }}
                    // animate={isInview ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                    className="w-full">
                    <img src="/images/about.jpg" alt="" />
                </motion.div>
            </div>
        </motion.div>
    )
}
export default Weare