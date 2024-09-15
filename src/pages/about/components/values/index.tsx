import React from "react";
import { useTranslation } from 'react-i18next';
const values = [


    {
        name: 'Be world-class',
        description:
            'we prioritize excellence by striving for the highest standards in every project and ensuring exceptional quality in all our services.',
    },
    {
        name: 'Sustainability',
        description:
            ' our commitment to sustainability drives us to implement environmentally responsible practices and reduce our ecological footprint in all our operations.',
    },
    {
        name: 'Always learning',
        description:
            'a commitment to continuous learning drives the pursuit of new knowledge and insights to stay ahead in the rapidly evolving technology landscape.',
    },
    {
        name: 'Be supportive',
        description:
            'Being supportive means actively engaging with and contributing to the community, as well as providing steadfast support to clients and team members, fostering a collaborative and empowering environment both internally and externally.',
    },
    {
        name: 'Take responsibility',
        description:
            'means owning outcomes and proactively addressing challenges, ensuring accountability and reliability in every aspect of our work.',
    },
    {
        name: 'Integrity',
        description:
            'Integrity involves maintaining the highest ethical standards in all actions and decisions, ensuring trust and transparency in every interaction.',
    },
]

const ValuesAbout = () => {
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