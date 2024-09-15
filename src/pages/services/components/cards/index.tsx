import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';



const Cards = () => {
  const { t} = useTranslation();
  const servicesData = [
    {
      title: t('stitle1'),
      description: t('sdesc1'), 
      imageUrl: '/images/software.png', // Replace with actual image path
    },
    {
      title: t('stitle2'),
      description: t('sdesc2'),
      imageUrl: '/images/projectmanagement.png', // Replace with actual image path
    },
    {
      title: t('stitle3'),
      description: t('sdesc3'),
      imageUrl: '/images/cloudcomputing.png', // Replace with actual image path 
    },
    {
      title: t('stitle4'),
      description: t('sdesc4'), 
      imageUrl: '/images/cybersecurity.png', // Replace with actual image path
    },
  ];
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    

      <div className="space-y-16 mt-16"> {/* Use space-y for vertical spacing */}
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8`} 
          >
            <div className="lg:w-1/2"> 
              <img
                src={service.imageUrl}
                alt={service.title}
                className="md:h-96 w-auto" 
              />
            </div>
            <div className="lg:w-1/2 p-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-[18px] text-justify text-gray-600 mb-4">
                {service.description}
              </p>
              <Link href={'/contact'}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {t('Contacts')}
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;