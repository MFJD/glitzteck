import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Weare = () => {
    const { t} = useTranslation();
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
                        <h2 className="text-[23px] font-medium text-blue-300">{t('wearetitle')}</h2>
                        <h3 className="text-xl primaryText py-3 ">{t('wearesubtitle')}</h3>
                        <p className="text-lg text-justify text-gray-600">{t('weareparagraph')}</p>
                    </div>

                </motion.div>
                <motion.div
                    ref={ref}
                    // initial={{ opacity: 0, x: 100 }}
                    // animate={isInview ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                    className="w-full">
                    <img src="/images/groupofpoeple3.jpg" alt="" style={{ display: 'block', paddingTop:'45px' }} />
                </motion.div>
            </div>
        </motion.div>
    )
}
export default Weare