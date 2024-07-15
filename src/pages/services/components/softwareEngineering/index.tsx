import React from "react";
import SoftwareModal from "./components/modal";

const SoftwareEngineer = () => {
    return (
        <>
            <div className="w-full p-7 mt-8 border shadow-lg rounded">
                <div className="w-full grid md:grid-cols-2 grid-col-1 md:gap-5">
                    <div className="mt-10">
                        <h3 className="text-5xl font-medium primaryText">Software Engineering</h3>
                        <p className="mt-5 text-lg text-gray-600">At Glitzeck, we specialize in crafting high-performance  applications that drive business growth. Our expert engineers leverage a standardized, component-based approach across all phases of development – from design and assembly to deployment and ongoing maintenance. </p>
                        <SoftwareModal />
                    </div>
                    <div className="p-1 flex justify-center">
                        <img src="/images/alt-features.png" className="h-[40vh] w-auto" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoftwareEngineer