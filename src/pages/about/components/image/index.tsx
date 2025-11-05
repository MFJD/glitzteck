import React from "react";
import { useTranslation } from 'react-i18next';

const ImageAbout = () => {
    const { t} = useTranslation();
    return (
        <div className="bg-white py-2 sm:py-3 relative">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                    <img
                        alt=""
                        src="/images/users/tchoumtayann.png"
                        className="absolute inset-0 h-full w-full md:object-contain object-cover md:ml-56 brightness-150 saturate-0"
                    />
                    <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
                    <div aria-hidden="true" className="absolute -left-80 -top-56 transform-gpu blur-3xl">
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                        />
                    </div>
                    <div
                        aria-hidden="true"
                        className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                        />
                    </div>
                    <div className="relative mx-auto max-w-2xl lg:mx-0">
                        <img alt="" src="/images/logos/logoHeader.png" className="h-12 w-auto" />
                        <figure>
                            <blockquote className="mt-6 text-md font-semibold text-white sm:text-md sm:leading-8">
                                <p>{t('image1')}
                                    
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 text-md text-white">
                                <div className="font-semibold">Yann Tchoumta</div>
                                <div className="mt-1">{t('image3')}</div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageAbout