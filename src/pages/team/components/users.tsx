import { motion } from "framer-motion";
import React, { useState } from "react";


const Users = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredY, setIsHoveredY] = useState(false);
    const [isHoveredJ, setIsHoveredJ] = useState(false);

    const socialMediaVariants = {
        hidden: { x: "100%" },
        visible: { x: 0 },
    };
    return (
        <div className="">
            <div className="grid md:grid-cols-3 grid-col-1 mb-10 md:gap-8 lg:gap-8">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="h-[75vh] mt-3 relative shadow-xl rounded-md cursor-pointer w-full"
                >
                    <div className="h-[40vh] w-full bg-gray-200">
                        <img
                            src="/images/users/TowaFrank.png"
                            className="h-[40vh] w-full"
                            style={{ objectFit: "contain" }}
                            alt=""
                        />
                    </div>
                    <div className="h-[35vh] bg-white px-4 pt-5 w-full">
                        <div className="w-full flex justify-center">
                            <div className="text-center">
                                <h5 className="text-xl primaryText">TOWA TIEMENI FRANK</h5>
                                <p className="text-lg primaryText font-medium">Chief Executive Officer</p>
                            </div>
                        </div>
                        <p className="text-center textalign mt-2 px-3 mt-3 text-gray-800">
                            My role at Glitzteck is to lead strategic vision, set goals, make key decisions, and drive overall success of the company through effective leadership and management.
                        </p>
                    </div>
                    {isHovered && (
                        <motion.div
                            id="social-media"
                            initial="hidden"
                            animate="visible"
                            variants={socialMediaVariants}
                            transition={{ duration: 0.5 }}
                            className="w-auto p-2 absolute top-0 right-0 h-auto bg-gray-50 rounded-md m-3"
                        >
                            <div>
                                <i className="cursor-pointer text-gray-500 ri-twitter-x-line text-[18px]"></i>
                            </div>
                            <div>
                                <i className="cursor-pointer text-gray-500 ri-facebook-circle-fill text-[23px]"></i>
                            </div>
                            <div>
                                <i className="cursor-pointer text-gray-500 ri-instagram-line text-[23px]"></i>
                            </div>
                            <i className="cursor-pointer text-gray-500 ri-linkedin-box-fill text-[23px]"></i>
                        </motion.div>
                    )}
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setIsHoveredY(true)}
                    onHoverEnd={() => setIsHoveredY(false)}
                    className="h-[75vh] mt-3 relative shadow-xl rounded-md cursor-pointer w-full"
                >
                    <div className="h-[40vh] w-full bg-gray-200">
                        <img
                            src="/images/users/tchoumtayann.png"
                            className="h-[40vh] w-full"
                            style={{ objectFit: "contain" }}
                            alt=""
                        />
                    </div>
                    <div className="h-[35vh] bg-white px-4 pt-5 w-full">
                        <div className="w-full flex justify-center">
                            <div className="text-center">
                                <h5 className="text-xl primaryText">TCHOUMTA YANN</h5>
                                <p className="text-lg primaryText font-medium">Chief Administrative officer</p>
                            </div>
                        </div>
                        <p className="text-center textalign mt-2 px-3 mt-3 text-gray-800">
                            My role at Glizteck is to manage daily operations, oversees administrative functions, and ensures efficient business processes in the company to drive success and growth.
                        </p>
                    </div>
                    {isHoveredY && (
                        <motion.div
                            id="social-media"
                            initial="hidden"
                            animate="visible"
                            variants={socialMediaVariants}
                            transition={{ duration: 0.5 }}
                            className="w-auto p-2 absolute top-0 right-0 h-auto bg-gray-50 rounded-md m-3"
                        >
                            <div>
                                <i className="cursor-pointer text-gray-500 ri-twitter-x-line text-[18px]"></i>
                            </div>
                            <div>
                                <i className="cursor-pointer text-gray-500 ri-facebook-circle-fill text-[23px]"></i>
                            </div>
                            <div>
                                <i className="cursor-pointer text-gray-500 ri-instagram-line text-[23px]"></i>
                            </div>
                            <i className="cursor-pointer text-gray-500 ri-linkedin-box-fill text-[23px]"></i>
                        </motion.div>
                    )}
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setIsHoveredJ(true)}
                    onHoverEnd={() => setIsHoveredJ(false)}
                    className="h-[75vh] mt-3 relative shadow-xl rounded-md cursor-pointer w-full"
                >
                    <div className="h-[40vh] relative w-full bg-gray-200">
                        <img
                            src="/images/users/MbaJames.png"
                            height={500}
                            width={500}
                            className="mt-5 absolute bottom-0"

                            alt=""
                        />
                    </div>
                    <div className="h-[35vh] bg-white px-4 pt-5 w-full">
                        <div className="w-full flex justify-center">
                            <div className="text-center">
                                <h5 className="text-xl primaryText">MBA FONGANG JAMES</h5>
                                <p className="text-lg primaryText font-medium">Chief TechnicaL Officer</p>
                            </div>
                        </div>
                        <p className="text-center textalign mt-2 px-3 mt-3 text-gray-800">
                            My role  at Glitzteck is to oversees the technical direction, development, and innovation of IT solutions to ensure alignment with business goals and industry trends.
                        </p>
                    </div>
                    {isHoveredJ && (
                        <motion.div
                            id="social-media"
                            initial="hidden"
                            animate="visible"
                            variants={socialMediaVariants}
                            transition={{ duration: 0.5 }}
                            className="w-auto p-2 absolute top-0 right-0 h-auto bg-gray-50 rounded-md m-3"
                        >
                            <div>
                                <i className="cursor-pointer text-gray-500 ri-twitter-x-line text-[18px]"></i>
                            </div>
                            <div>
                                <i className="cursor-pointer text-gray-500 ri-facebook-circle-fill text-[23px]"></i>
                            </div>
                            <div>
                                <i className="cursor-pointer text-gray-500 ri-instagram-line text-[23px]"></i>
                            </div>
                            <i className="cursor-pointer text-gray-500 ri-linkedin-box-fill text-[23px]"></i>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default Users