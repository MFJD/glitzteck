import React, { useEffect } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';


 

const Header = () => {
  const { t} = useTranslation();

 


  return (
    <div className="flex justify-between">
      <div className=" md:w-[650px] w-full mt-10 md:px-0 px-2 ">
        <h2 className="primaryText md:text-5xl text-4xl font-bold">
          {/* We offer modern solutions for growing your business */}
          {t('HeaderText')}

        </h2>
        <p className="text-xl text-xl my-4 text-gray-500">{t('theadSolution')}</p>
        <Link href={"/contact"}><button className="primarybg text-white flex px-4 py-3.5 rounded mt-2 space-x-5 text-xl">{t('theadButton')} <i className="ri-arrow-right-line ml-4 text-xl"></i></button></Link>
      </div>

      <div className="image-animation md:block hidden">
        <img src="/images/hero-img.png" alt="" />
      </div>
    </div>
  )
}

export default Header