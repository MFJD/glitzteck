import React, { FC, useEffect, useState } from 'react';
import Header from './header';
import { useTranslation } from 'next-i18next';
import router, { useRouter } from 'next/router';
import Head from './head';

interface ExampleProps { }

const Navbar: FC<ExampleProps> = () => {

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
        <div 
        /* className={`w-full    duration-500 ease-in-out  ${isVisible ? 'md:h-[85vh] h-[55vh]' : 'md:h-[100vh] h-[60vh]'}  relative`} style={{ background: `url('/images/hero-bg.png')`, backgroundSize: "cover" }} */
        >
            <Head />
            {/* <div className='mx-auto max-w-7xl  px-4 sm:px-6  lg:px-8'>
                <div className=' w-full  '>
                    <Header />
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;