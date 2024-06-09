import React from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


export async function getStaticProps(obj: { locale: any }) {
    return {
      props: {
        ...(await serverSideTranslations(obj.locale, [
          'common',
        ])),
      },
    }
  }

const Header = () => {
    
    const { t } = useTranslation('common')
    return (
        <div className="flex justify-between">
            <div className=" md:w-[650px] mt-10 ">
                <h2 className="primaryText text-5xl font-bold">{t('HeaderText')}</h2>
                <p className="text-xl text-xl my-4 text-gray-700">Transform your ideas in solutions</p>
                <button className="primarybg text-white flex px-4 py-3.5 rounded mt-2 space-x-5 text-xl">Get Started <i className="ri-arrow-right-line ml-4 text-xl"></i></button>
            </div>

            <div className="image-animation">
                <img src="/images/hero-img.png" alt="" />
            </div>
        </div>
    )
}

export default Header