import React from "react";
import { useTranslation } from 'react-i18next';
const Address = () => {
    const { t} = useTranslation();
    return (
        <div className="w-full mt-5 md:mt-36 mb:mb-0 mb-10">
            <div className=" pb-5 ">
                <p className="text-6xl primaryText">{t('Contact')}</p>
            </div>
            <hr className="hidden md:block h-1 ml-2 w-14 primarybg" />
            <div className="mt-10">
                <p className="text-lg text-gray-600"> {t('contactnh')}</p>
                <h3 className="text-xl primaryText mt-10">+1 (612) 405-4320</h3>
                <p className="text-xl mt-10 text-gray-700 ">{t('contactaddress')} : 1117 Marquette Ave  Minneapolis,MN 55403 USA</p>
                <p className="text-[20px] mt-5 text-gray-700 ">{t('contactemail')} : glitzteck@gmail.com</p>
            </div>
        </div>
    )
}

export default Address