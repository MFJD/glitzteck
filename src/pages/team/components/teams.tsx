import Image from 'next/image';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { RiLinkedinFill, RiMailLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';




interface Members {
    member: any;
}
const TeamMember: FC<Members> = ({ member }) => (
    <motion.div
        className="bg-white rounded-lg border  p-6 transform hover:scale-105 transition duration-300 ease-in-out"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Animate only once when in view
        transition={{ duration: 0.8 }}
    >
        <div className="flex flex-col items-center mb-6">
            <div className="relative h-24 w-24 rounded-full  overflow-hidden border-4 border-gray-200">
                <Image
                    src={member.imageUrl}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {member.name}
            </h3>
            <p className="primaryText text-xl ">{member.position}</p>
        </div>
        <p className="text-gray-700  mb-4">{member.description}</p>
         <div className="flex space-x-4 justify-center">
            <a className='h-8 w-8 flex justify-center rounded  items-center border bg-gray-50' href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-box-fill text-2xl text-blue-500"></i>
            </a>
            {/*
            <a className='h-10 w-10 flex justify-center rounded  items-center border bg-gray-50' href={`mailto:${member.email}`}>
                <img src="/icons/gmail.svg" className='h-7 w-7' alt="" />
            </a>
            */}
        </div> 
    </motion.div>
);

const OurTeam = () => {
    const { t} = useTranslation();
    const teamMembers = [
        {
            name: 'TOWA TIEMENI FRANK',
            position: t("tposition1"),
            imageUrl: '/images/users/towa.png', // Replace with actual images
            description: t('tdescription1'),
            linkedin: 'https://www.linkedin.com/in/frank-towa-tiemeni-40083a1ab/', // Replace with actual profile links
            email: 'frank@glitzteck.com', // Replace with actual email address
        },
        {
            name: 'TCHOUMTA YANN',
            position: t("tposition2"),
            imageUrl: '/images/users/yann.png',
            description: t('tdescription2'),
            linkedin: 'https://www.linkedin.com/in/yanntchoumta/',
            email: 'yann@glitzteck.com',
        },
        {
            name: 'MBA FONGANG JAMES',
            position: t("tposition3"),
            imageUrl: '/images/users/james.png',
            description: t('tdescription3'),
            linkedin: 'https://www.linkedin.com/in/james-mba-8bb4121ab/',
            email: 'james@glitzteck.com',
        },
    ];
    return(
        <div className=" ">
        <div className="container mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {teamMembers.map((member) => (
                    <TeamMember key={member.name} member={member} />
                ))}
            </div>
        </div>
    </div>
    )
}
   

export default OurTeam;
