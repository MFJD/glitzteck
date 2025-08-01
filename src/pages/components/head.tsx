// import React from "react";
import React, { FC, useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import  { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './languageSelector';

const Head = () => {
    const { t} = useTranslation();
    const {asPath} = useRouter()
    const str = asPath
    let link = str.split('/')
    
 
 
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 100) { // Adjust the scroll threshold (300px) as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <Disclosure as="nav" className={`  transform transition-transform duration-500 ease-in-out 
                 ${isVisible ? 'bg-white fixed top-0 left-0 right-0 z-10  shadow-lg' : ''}
                 ${isVisible ? 'animate-headerWobble' : ''}
                 `} >
                {(open: any) => (
                    <>
                        <div className="mx-auto   max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-20 justify-between">
                                <div className="flex">
                                    <div className="-ml-2 mr-2 flex items-center md:hidden">
                                        {/* Mobile menu button */}
                                        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 ">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="21" height="26">
                                                    <path d="M0 0 C6.93 0 13.86 0 21 0 C21 0.99 21 1.98 21 3 C14.07 3 7.14 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#2c7081" transform="translate(0,0)" />
                                                    <path d="M0 0 C4.62 0 9.24 0 14 0 C14 0.99 14 1.98 14 3 C9.38 3 4.76 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#2c7081" transform="translate(0,12)" />
                                                    <path d="M0 0 C2.97 0 5.94 0 9 0 C9 0.99 9 1.98 9 3 C6.03 3 3.06 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#2c7081" transform="translate(0,23)" />
                                                </svg>
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </DisclosureButton>
                                    </div>
                                    <div className="flex flex-shrink-0 items-center">
                                        <Link href="/"><img
                                            className={`${isVisible ? 'md:h-10 h-8 w-auto mt-5' : 'md:h-14 h-10 w-auto mt-5'}`}
                                            src="./images/logos/logoHeader.png"
                                            alt="Your Company"
                                        /></Link>
                                    </div>

                                </div>
                                <div className="flex items-center">
                                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                                        {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                        <Link href="/" legacyBehavior><a
                                            className={`${link[1] == undefined || link[1] == "" ? 'primaryText font-bold':''} inline-flex items-center  px-1 pt-1 text-[16px] `}
                                        >
                                            {t('headhome')}
                                        </a></Link>
                                        <Link href="/about" legacyBehavior><a
                                            
                                            className={`${link[1] == 'about' ? 'primaryText font-bold':''}  inline-flex items-center  border-transparent px-1 pt-1 text-[16px]   hover:border-gray-300 hover:text-gray-700`}
                                        >
                                            {t('headabout')}
                                        </a></Link>
                                        <Link legacyBehavior href="/services"><a
                                            
                                            className={`${link[1] == 'services' ? 'primaryText font-bold':''} inline-flex items-center  border-transparent px-1 pt-1 text-[16px]   hover:border-gray-300 hover:text-gray-700`}
                                        >
                                            {t('headservice')}
                                        </a></Link>
                                        <Link href="/team" legacyBehavior><a
                                            className={`${link[1] == 'team' ? 'primaryText font-bold':''} inline-flex items-center  border-transparent px-1 pt-1 text-[16px]   hover:border-gray-300 hover:text-gray-700`}
                                        >
                                            {t('headteam')}
                                        </a></Link>
                                        <Link href="/news" legacyBehavior><a
                                            className={`${link[1] == 'news' ? 'primaryText font-bold':''} inline-flex items-center  border-transparent px-1 pt-1 text-[16px]   hover:border-gray-300 hover:text-gray-700`}
                                        >
                                            {t('headnew')}
                                        </a></Link>
                                        <Link href="/contact" legacyBehavior><a
                                            
                                            className={`${link[1] == 'contact' ? 'primaryText font-bold':''} inline-flex items-center  border-transparent px-1 pt-1 text-[16px]   hover:border-gray-300 hover:text-gray-700`}
                                        >
                                            {t('headcontact')}
                                        </a></Link>
                                    </div>
                                    <div className="flex-shrink-0 ml-10">
                                        
                                         <LanguageSelector />
                                    </div>
                                    <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <DisclosurePanel className="md:hidden bg-white shadow-xl">
                            <div className="space-y-1.5 pb-3 pt-2">
                                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                                <DisclosureButton
                                    as="a"
                                    href="/"
                                    className={`${link[1] == undefined || link[1] == "" ? ' border-l-4 border-[#2c7081] bg-gray-50 text-[#2c7081]':''} block  py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6`}
                                >
                                    {t('headhome')}
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="/about"
                                    className={`${link[1] == 'about' ? ' border-l-4 border-[#2c7081] bg-gray-50 text-[#2c7081]':''} block  py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6`}
                                >
                                    {t('headabout')}
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="/services"
                                    className={`${link[1] == 'services' ? ' border-l-4 border-[#2c7081] bg-gray-50 text-[#2c7081]':''} block  py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6`}
                                >
                                    {t('headservice')}
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="/team"
                                    className={`${link[1] == 'team' ? ' border-l-4 border-[#2c7081] bg-gray-50 text-[#2c7081]':''} block  py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6`}
                                >
                                    {t('headteam')}
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="/news"
                                    className={`${link[1] == 'news' ? ' border-l-4 border-[#2c7081] bg-gray-50 text-[#2c7081]':''} block  py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6`}
                                >
                                    {t('headnew')}
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="/contact"
                                    className={`${link[1] == 'contact' ? ' border-l-4 border-[#2c7081] bg-gray-50 text-[#2c7081]':''} block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6`}
                                >
                                    {t('headcontact')}
                                </DisclosureButton>
                            </div>

                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
    )
}
export default Head