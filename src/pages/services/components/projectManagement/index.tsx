import React from "react";

const ProjectManagement = () => {
    return (
        <>
            <div className="w-full p-10 mt-8 border shadow-lg rounded">
                <div className="w-full grid md:grid-cols-2 grid-col-1 md:gap-5">
                    <div>
                        <h3 className="text-5xl font-medium primaryText">project Management</h3>
                        <p className="mt-5 text-lg text-gray-600">The most popular premium WordPress theme in the world (stats from BuiltWith.com) and the most powerful theme in our collection, including the visual drag & drop Divi page builder.</p>
                    </div>
                    <div className="p-3 flex justify-center">
                        <img src="/images/alt-features.png" className="h-72 w-auto" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectManagement