import React from "react";
import { useTranslation } from 'react-i18next';


const ValuesAbout = () => {
    const values = [


        {
            name: ('valuesname1'),
            description:
                ('valuesdescription1'),
        },
        {
            name:  ('valuesname2'),
            description:
            ('valuesdescription2'),
        },
        {
            name: ('valuesname3'),
            description:
            ('valuesdescription3'),
        },
        {
            name: ('valuesname4'),
            description:
            ('valuesdescription4'),
        },
        {
            name: ('valuesname5'),
            description:
            ('valuesdescription5'),
        },
        {
            name: ('valuesname6'),
            description:
            ('valuesdescription6'),
        },
    ]
    const { t} = useTranslation();
    return (

        < div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-16 lg:px-8" >
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight primaryText sm:text-4xl">{t('valuestitle')}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">{t('valuesparagraph')}
            
                </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {values.map((value) => (
                    <div key={value.name}>
                        <dt className="font-semibold text-lg primaryText">{value.name}</dt>
                        <dd className="mt-1 text-gray-600  text-lg">{value.description}</dd>
                    </div>
                ))}
            </dl>
        </div>

    )
}
export default ValuesAbout