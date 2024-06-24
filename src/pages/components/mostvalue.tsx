import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MostValue = () => {
    const ref = useRef(null)
    const isInview = useInView(ref, { once:true,amount: 0 })
    
    return (
        <motion.div ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInview ? { opacity: 1, y: 0 } : {}}
        transition={{ duration:2, ease: 'easeInOut' }} className="mx-auto max-w-7xl px-6 pb-2 pt-18 sm:pt-10 lg:px-8 lg:pt-36">
            <div className="text-center">
                <h3 className="font-semibold text-3xl mt-16 md:mt-0 primaryText ">What We Most Value</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-14">
                <motion.div ref={ref}
                    // initial={{ opacity: 0, y: 80 }}
                    // animate={isInview ? { opacity: 1, y: 0 } : {}}
                    // transition={{ duration: 0.8, ease: 'easeInOut' }} 
                    className="w-full shadow-md md:p-8 p-3 flex justify-center">
                    <div className="">
                        <img src="/images/values-1.png" height={280} width={280} alt="" />
                        <div>
                            <h5 className="text-2xl font-semibold primaryText my-3">Ad cupiditate sed est odio</h5>
                            <p className="text-lg text-gray-600  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita deserunt architecto repellendus accusantium itaque deleniti ipsum doloremque atque consequatur veniam sint, magni cum animi tempora? Esse reiciendis quae dicta?</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    // initial={{ opacity: 0, y: 80 }}
                    // animate={isInview ? { opacity: 1, y: 0 } : {}}
                    // transition={{ duration: 1.5, ease: 'easeInOut' }} 
                    className="w-full shadow-md md:p-8 p-3 flex justify-center">
                    <div className="">
                        <img src="/images/values-2.png" height={280} width={280} alt="" />
                        <div>
                            <h5 className="text-2xl font-semibold primaryText my-3">Ad cupiditate sed est odio</h5>
                            <p className="text-lg text-gray-600  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita deserunt architecto repellendus accusantium itaque deleniti ipsum doloremque atque consequatur veniam sint, magni cum animi tempora? Esse reiciendis quae dicta?</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    // initial={{ opacity: 0, y: 80 }}
                    // animate={isInview ? { opacity: 1, y: 0 } : {}}
                    // transition={{ duration: 2.5, ease: 'easeInOut' }} 
                    className="w-full shadow-md md:p-8 p-3 flex justify-center">
                    <div className="">
                        <img src="/images/values-3.png" height={280} width={280} alt="" />
                        <div>
                            <h5 className="text-2xl font-semibold primaryText my-3">Ad cupiditate sed est odio</h5>
                            <p className="text-lg text-gray-600  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita deserunt architecto repellendus accusantium itaque deleniti ipsum doloremque atque consequatur veniam sint, magni cum animi tempora? Esse reiciendis quae dicta?</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
export default MostValue