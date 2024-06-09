import React, { FC, useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ReactFlagsSelect from "react-flags-select";
import Header from './header';
import { useTranslation } from 'next-i18next';
import router, { useRouter } from 'next/router';

interface ExampleProps { }
function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

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

    return (
        <div className="w-full h-screen relative" style={{ background: `url('/images/hero-bg.png')`, backgroundSize: "cover" }}>
            <Disclosure as="nav" className="">
                {(open: any) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-20 justify-between">
                                <div className="flex">
                                    <div className="-ml-2 mr-2 flex items-center md:hidden">
                                        {/* Mobile menu button */}
                                        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </DisclosureButton>
                                    </div>
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-14 w-auto mt-5"
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

                        <DisclosurePanel className="md:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                                <DisclosureButton
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
                                >
                                    Dashboard
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
                                    Projects
                                </DisclosureButton>
                                <DisclosureButton
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                                >
                                    Calendar
                                </DisclosureButton>
                            </div>
                            <div className="border-t border-gray-200 pb-3 pt-4">
                                <div className="flex items-center px-4 sm:px-6">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-gray-800">Tom Cook</div>
                                        <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1">
                                    <DisclosureButton
                                        as="a"
                                        href="#"
                                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                                    >
                                        Your Profile
                                    </DisclosureButton>
                                    <DisclosureButton
                                        as="a"
                                        href="#"
                                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                                    >
                                        Settings
                                    </DisclosureButton>
                                    <DisclosureButton
                                        as="a"
                                        href="#"
                                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                                    >
                                        Sign out
                                    </DisclosureButton>
                                </div>
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