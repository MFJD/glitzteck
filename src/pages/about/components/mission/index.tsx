import React from "react";
const stats = [


    { label: '24', value: 'Projects' },
    { label: '6', value: 'Clients' },
    { label: '5', value: 'Experts' },
]

const MissionSection = () => {
    return (
        <div className="mx-auto mb-20 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
                <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                    <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                        <p className="text-xl leading-8 text-gray-600">
                        At GlitzTeck, we understand that every business is unique and requires personalized solutions to truly excel. 
                        Our approach revolves around deeply comprehending your specific needs and 
                        delivering solutions that are both innovative and precisely aligned with 
                        your business goals. We focus on crafting tailored strategies 
                        that effectively drive your business forward, ensuring that each solution 
                        is uniquely suited to your requirements.
                        </p>
                        <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                            <p>
                            Quality is the cornerstone of our operations at GlitzTeck. It’s 
                            not merely a target but the foundation of everything we do. 
                            From the development of our solutions to the level of customer 
                            service we offer, excellence is embedded in every facet of our work. 
                            When you choose GlitzTeck, you’re selecting a partner who is committed 
                            to maintaining the highest standards and never compromises on the quality of service provided.
                            </p>
                            <p className="mt-10">
                            Our team is made up of professionals and forward-thinking experts, each with 
                            extensive experience and a deep enthusiasm for technology. This 
                            collective expertise allows us to serve not just as service providers, but 
                            as trusted advisors who can navigate the intricate IT landscape with you. 
                            At GlitzTeck, we offer comprehensive solutions and uphold strong values of 
                            sustainability and ethics, aiming to build lasting partnerships that extend 
                            beyond mere contractual agreements.
                            </p>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-auto lg:justify-center">
                        <dl className="w-64 space-y-8 xl:w-80">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                    <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MissionSection 