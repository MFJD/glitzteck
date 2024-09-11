import Image from 'next/image';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { RiLinkedinFill, RiMailLine } from 'react-icons/ri';

const teamMembers = [
    {
        name: 'TOWA TIEMENI FRANK',
        position: 'Chief Executive Officer',
        imageUrl: '/images/users/towa.png', // Replace with actual images
        description: 'Visionary leader driving Glitzteck’s growth and strategy.  A seasoned executive with a passion for leveraging technology to solve complex business challenges.',
        linkedin: 'https://www.linkedin.com/', // Replace with actual profile links
        email: 'frank@glitzteck.com', // Replace with actual email address
    },
    {
        name: 'TCHOUMTA YANN',
        position: 'Chief Administrative Officer',
        imageUrl: '/images/users/yann.png',
        description: 'Oversees Glitzteck’s operations, ensuring efficiency and excellence across all departments. Expertise in organizational development and process optimization.',
        linkedin: 'https://www.linkedin.com/',
        email: 'yann@glitzteck.com',
    },
    {
        name: 'MBA FONGANG JAMES',
        position: 'Chief Technical Officer',
        imageUrl: '/images/users/james.png',
        description: 'Leads Glitzteck’s technology vision and development. An experienced technologist with a deep understanding of software engineering, cloud computing, and cybersecurity.',
        linkedin: 'https://www.linkedin.com/',
        email: 'james@glitzteck.com',
    },
];


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

const OurTeam = () => (
    <div className=" ">
        <div className="container mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {teamMembers.map((member) => (
                    <TeamMember key={member.name} member={member} />
                ))}
            </div>
        </div>
    </div>
);

export default OurTeam;
