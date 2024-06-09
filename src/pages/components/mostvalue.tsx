import React from "react";

const MostValue = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 pb-2 pt-18 sm:pt-10 lg:px-8 lg:pt-20">
            <div className="text-center">
                <h3 className="font-semibold text-3xl primaryText">What We Most Value</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                <div className="w-full shadow-md md:p-8 p-3 flex justify-center">
                    <div className="">
                        <img src="/images/values-1.png" height={280} width={280} alt="" />
                        <div>
                            <h5 className="text-2xl font-semibold primaryText my-3">Ad cupiditate sed est odio</h5>
                            <p className="text-lg text-gray-800 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita deserunt architecto repellendus accusantium itaque deleniti ipsum doloremque atque consequatur veniam sint, magni cum animi tempora? Esse reiciendis quae dicta?</p>
                        </div>
                    </div>
                </div>
                <div className="w-full shadow-md md:p-8 p-3 flex justify-center">
                    <div className="">
                        <img src="/images/values-2.png" height={280} width={280} alt="" />
                        <div>
                            <h5 className="text-2xl font-semibold primaryText my-3">Ad cupiditate sed est odio</h5>
                            <p className="text-lg text-gray-800 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita deserunt architecto repellendus accusantium itaque deleniti ipsum doloremque atque consequatur veniam sint, magni cum animi tempora? Esse reiciendis quae dicta?</p>
                        </div>
                    </div>
                </div>
                <div className="w-full shadow-md md:p-8 p-3 flex justify-center">
                    <div className="">
                        <img src="/images/values-3.png" height={280} width={280} alt="" />
                        <div>
                            <h5 className="text-2xl font-semibold primaryText my-3">Ad cupiditate sed est odio</h5>
                            <p className="text-lg text-gray-800 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita deserunt architecto repellendus accusantium itaque deleniti ipsum doloremque atque consequatur veniam sint, magni cum animi tempora? Esse reiciendis quae dicta?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MostValue