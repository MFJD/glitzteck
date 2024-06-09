import React from "react";

const ContactUs = () => {
    return (
        <>
            <div className="py-16 mx-auto max-w-7xl px-6 w-full">
                <h3 className="font-semibold text-3xl font-semibold primaryText text-center">Contact Us</h3>
                <div className="w-full flex justify-between mt-16">
                    <div className="md:w-[50%] md:pr-2">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="py-5 w-full h-56 mt-3 bg-[#f6fbfc] px-8 rounded">
                                <div>
                                    <i className="ri-map-pin-fill primaryText text-5xl"></i>
                                </div>
                                <h4 className="primaryText   text-xl mt-3">Address</h4>
                                <p className="mt-2 text-lg">1400 Laurel Ave W, Minneapolis, MN 55405, États-Unis</p>
                            </div>
                            <div className="py-5 w-full h-56 mt-3 bg-[#f6fbfc] px-8 rounded">
                                <div>
                                    <i className="ri-phone-fill primaryText text-5xl"></i>
                                </div>
                                <h4 className="primaryText   text-xl mt-3">Call Us</h4>
                                <p className="mt-2 text-lg">+1 (612) 405-4320</p>
                            </div>
                            <div className="py-5 w-full h-56 mt-3 bg-[#f6fbfc] px-8 rounded">
                                <div>
                                    <i className="ri-mail-fill primaryText text-5xl"></i>
                                </div>
                                <h4 className="primaryText   text-xl mt-3">Email Us</h4>
                                <p className="mt-2 text-lg">info@glitzteck.com</p>
                            </div>
                            <div className="py-5 w-full h-56 mt-3 bg-[#f6fbfc] px-8 rounded">
                                <div>
                                    <i className="ri-time-fill primaryText text-5xl"></i>
                                </div>
                                <h4 className="primaryText   text-xl mt-3">Time</h4>
                                <p className="mt-2 text-lg">Monday - Saturday</p>
                                <p>08 AM - 5 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[50%] p-5 md:ml-2 mt-3 rounded  bg-[#f6fbfc]">
                        <div className="grid md:grid-cols-2 grid-cols-1 mt-5 md:gap-3">
                            <div className="mt-5">
                                <input type="text" className="py-2.5 w-full border border-[#2c7081] pl-2 " placeholder="Your Name" />
                            </div>
                            <div className="mt-5">
                                <input type="text" className="py-2.5 w-full border border-[#2c7081] pl-2 " placeholder="Your Email " />
                            </div>
                        </div>
                        <div className="mt-5">
                            <input type="text" className="py-2.5 w-full border border-[#2c7081] pl-2 " placeholder="Your Subject" />
                        </div>
                        <div className="mt-5">
                            <textarea name="" id="" rows={6} className="py-2.5 w-full border outline-none border-[#2c7081] pl-2 " placeholder="Your Message"></textarea>
                        </div>
                        <div className="justify-start flex mt-7">
                            <button className="w-64 py-2.5 primarybg text-white rounded">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs