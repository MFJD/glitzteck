import React from "react";

const CTA = () => {
    return (
        <div className="w-full  flex justify-center items-center h-fit  py-20">
            <div className="text-center">
                <h3 className="text-3xl font-semibold primaryText">Join Our Newsletter</h3>
                <p className="text-md text-gray-600 my-5">Subscribe to our newsletter and receive the latest news about our products and services!</p>
                <div className="flex justify-center">
                    <div className="flex">
                        <input type="text" className="py-2.5 w-full md:w-[500px] border outline-none pl-3 text-gray-600 " placeholder="info@glitzteck.com" />
                        <button className="py-2.5 px-4 primarybg border-y border-[#2c7081] text-white">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CTA 