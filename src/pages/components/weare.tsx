import React from "react";

const Weare = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 pb-2 pt-18 sm:pt-10 lg:px-8 lg:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div >
                    <div className="w-full bg-[#f6fbfc] p-8 h-auto md:mt-16 mt-0">
                        <h2 className="text-lg fonyt-bold text-blue-700">Who we are</h2>
                        <h3 className="text-xl primaryText py-3 ">Hey!, we’re glad you want to know more about us.</h3>
                        <p className="text-lg">At Glitzteck, our distinct edge is rooted in our relentless pursuit of software excellence, focusing on two core pillars: product-focused processes and advanced tech we build to accelerate development. This dual emphasis ensures we deliver not just software, but unparalleled software products to you. As more than just consultants, we are your experienced navigators in the realm of digital innovation.</p>
                    </div>

                </div>
                <div className="w-full">
                    <img src="/images/about.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Weare