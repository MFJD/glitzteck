import React from "react";

const SoftwareEngineer = () => {
    return (
        <>
            <div className="w-full p-7 mt-8 border shadow-lg rounded">
                <div className="w-full grid md:grid-cols-2 grid-col-1 md:gap-5">
                    <div className="mt-10">
                        <h3 className="text-5xl font-medium primaryText">Software Engineering</h3>
                        <p className="mt-5 text-lg text-gray-600">The most popular premium WordPress theme in the world (stats from BuiltWith.com) and the most powerful theme in our collection, including the visual drag & drop Divi page builder.</p>
                        <button className="mt-4 px-8 py-4 primarybg text-white rounded">Contact Us </button>
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