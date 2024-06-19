import React, { FC, useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ReactFlagsSelect from "react-flags-select";
import Header from './header';
import { useTranslation } from 'next-i18next';
import router, { useRouter } from 'next/router';

interface ExampleProps { }

const Navbar: FC<ExampleProps> = () => {
    const { i18n } = useTranslation();
    const [selected, setSelected] = useState(i18n.language == "fr" ? "FR" : i18n.language == "en" ? "US" : "US");
    useEffect(() => {
        console.log(i18n)
        if (i18n.language == "fr")
            setSelected("FR")
        else if (i18n.language == "en")
            setSelected("US")
        else
            setSelected("US")
    }, [i18n])
    const { locale, locales, push } = useRouter();
    const [userLocale, setUserLocale] = useState(locale);


    const changeLanguage = (language: any) => {
        console.log(i18n)
        if (language == "US") {
            router.push(router.asPath, router.asPath, { locale: 'en' });
            if (!locales?.includes(language)) {
                // push(`/${language}`); // Update URL
                localStorage.setItem('language', "en"); // Persist in localStorage
                setUserLocale(language);
            }
        }
        else if (language == "FR") {
            router.push(router.asPath, router.asPath, { locale: language });
            i18n.changeLanguage(language);
            setSelected(language)
            if (!locales?.includes(language)) {
                // push(`/${language}`); // Update URL
                localStorage.setItem('language', "fr"); // Persist in localStorage
                setUserLocale(language);
            }
        }
    };
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
        <div className={`w-full    duration-500 ease-in-out  ${isVisible ? 'h-[85vh]':'h-[100vh]'}  relative`} style={{ background: `url('/images/hero-bg.png')`, backgroundSize: "cover" }}>
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
                                                <img src="/images/car.png" alt="" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </DisclosureButton>
                                    </div>
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className={`${isVisible ? 'md:h-10 h-8 w-auto mt-5' : 'md:h-14 h-10 w-auto mt-5'}`}
                                            src="./images/logos/logoHeader.png"
                                            alt="Your Company"
                                        />
                                    </div>

                                </div>
                                <div className="flex items-center">
                                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                                        {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                        <a
                                            href="#"
                                            className="inline-flex items-center   px-1 pt-1 text-[16px] font-medium text-gray-900"
                                        >
                                            Home
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex items-center  border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            About
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex items-center  border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            Services
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex items-center  border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            Team
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex items-center  border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            News
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex items-center  border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                    <div className="flex-shrink-0 ml-10">
                                        <ReactFlagsSelect
                                            fullWidth={false}
                                            countries={["US", "FR"]}
                                            customLabels={{ "US": "En", "FR": "Fr" }}
                                            selected={selected}
                                            onSelect={(code) => changeLanguage(code)}
                                            className='w-full mt-2 h-10  border-none'
                                        />
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
                                    href="#"
                                    className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
                                >
                                    Home
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                                >
                                    About
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                                >
                                    Services
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                                >
                                    Team
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                                >
                                    News
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                                >
                                    Contact
                                </DisclosureButton>
                            </div>
                            
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
            <div className='mx-auto max-w-7xl px-4 sm:px-6  lg:px-8'>
                <div className=' w-full  md:mt-36'>
                    <Header />
                </div>
            </div>

        </div>

    );
};

export default Navbar;