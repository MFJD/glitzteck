import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t} = useTranslation();
    const ref = useRef(null)
    const isInview = useInView(ref, { once:true,amount: 0 })
    return (
        <motion.div ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInview ? { opacity: 1, y: 0 } : {}}
        transition={{ duration:2, ease: 'easeInOut' }} className="mx-auto max-w-7xl px-6 pb-2 pt-28 sm:pt-10 lg:px-8 lg:pt-20">
            <div className="text-center">
                <h3 className="font-semibold text-3xl primaryText">{t('servicestitle')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8 md:mt-16">
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={isInview ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}  
                    className="shadow-md w-full mt-5 p-8 cursor-pointer flex justify-center hover:bg-[#2c7081] hover:text-white border-b-2 border-green-500">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <div className=" flex justify-center items-center w-20 h-20  ">
                                <img src="/images/software-development(1).png" alt="" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2 className="text-2xl primaryText mb-3 text-center">{t('servicessubtitle1')} </h2>
                            <p className="text-gray-700 text-lg  text-gray-400 text-justify">{t('serviceparagraph1')}</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={isInview ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}  className="shadow-md w-full mt-5 p-8 cursor-pointer flex justify-center hover:bg-[#2c7081] hover:text-white border-b-2 border-green-500">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <div className=" flex justify-center items-center w-20 h-20">
                            <img src="/images/project-management(1).png" alt="" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2 className="text-2xl primaryText mb-3 text-center">{t('servicessubtitle2')} </h2>
                            <p className="text-gray-700 text-lg   text-justify">{t('serviceparagraph2')} </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={isInview ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 2.5, ease: 'easeInOut' }} className="shadow-md w-full mt-5 p-8 cursor-pointer flex justify-center hover:bg-[#2c7081] hover:text-white border-b-2 border-green-500">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <div className=" flex justify-center items-center w-20 h-20 ">
                            <img src="/images/cybersecurite.png" alt="" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2 className="text-2xl primaryText mb-3 text-center">{t('servicessubtitle3')} </h2>
                            <p className="text-gray-700 text-lg text-justify">{t('serviceparagraph3')} </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
export default Services