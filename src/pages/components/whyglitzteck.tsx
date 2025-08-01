import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';

const WhyGlitzteck = () => {
    const { t} = useTranslation();
    const ref = useRef(null)
    const isInview = useInView(ref, { once: true, amount: 0 })
    return (
        <motion.div ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInview ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeInOut' }}
         className="mx-auto max-w-7xl px-6 pb-2 pt-18 sm:pt-10 lg:px-8 lg:pt-36">
            <div className="text-center">
                <h3 className="font-semibold text-3xl md:mt-0 mt-20 primaryText">{t('whyglitztecktitle')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:mt-14 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-fit md:mt-14 ">
                    <motion.div ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                         className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">{t('whyglitztecksubtitle1')}</h3>
                            <p className="text-lg text-gray-600 text-left">{t('whyglitzteckparagraph1.1')}</p>
                        </div>

                    </motion.div>
                    <motion.div ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">{t('whyglitztecksubtitle2')}</h3>
                            <p className="text-lg text-gray-600 text-left">{t('whyglitzteckparagraph2.1')} </p>
                        </div>

                    </motion.div>
                    <motion.div ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">{t('whyglitztecksubtitle3')}</h3>
                            <p className="text-lg text-gray-600 text-left"> {t('whyglitzteckparagraph3.1')}</p>
                        </div>

                    </motion.div>
                    <motion.div ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">{t('whyglitztecksubtitle4')}</h3>
                            <p className="text-lg text-gray-600 text-left"> {t('whyglitzteckparagraph4.1')}</p>
                        </div>

                    </motion.div>
                    <motion.div
                        ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">{t('whyglitztecksubtitle5')}</h3>
                            <p className="text-lg text-gray-600 text-left">{t('whyglitzteckparagraph5.1')}</p>
                        </div>

                    </motion.div>
                    <motion.div
                        ref={ref}
                        // initial={{ opacity: 0, y: 80 }}
                        // animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex space-x-2 mt-5">
                        <i className="ri-bar-chart-line text-3xl text-blue-500"></i>
                        <div>
                            <h3 className="text-2xl primaryText">{t('whyglitztecksubtitle6')}</h3>
                            <p className="text-lg text-gray-600 text-left">{t('whyglitzteckparagraph6.1')}</p>
                        </div>

                    </motion.div>
                </div>
                <div className="w-full flex justify-end">
                    <div>
                        <img src="/images/whyus_2-removebg-preview.png" height={1500} width={900} alt=""  style={{ display: 'block', margin: '0 auto' , paddingTop:'140px' }}/>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}
export default WhyGlitzteck