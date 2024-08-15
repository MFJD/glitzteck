import Image from 'next/image';

const servicesData = [
  {
    title: 'Software Engineering',
    description: `Crafting bespoke software solutions tailored to your unique business needs. From web applications to mobile apps, we build it with precision and scalability in mind.  We leverage the latest technologies and industry best practices to deliver high-quality, maintainable code that drives your business forward. 
    
    Our software engineering expertise includes: 
    - Web Application Development
    - Mobile App Development (iOS and Android)
    - API Design and Development
    - Cloud-Native Development
    `, 
    imageUrl: '/images/software-engineering.jpg', // Replace with actual image path
  },
  {
    title: 'Project Management',
    description: `Keeping your projects on track and within budget. Our certified project managers utilize proven methodologies such as Agile and Waterfall to ensure timely delivery and client satisfaction. 

    We handle all aspects of project management, including: 
    - Project planning and scoping
    - Risk assessment and mitigation
    - Resource allocation 
    - Communication and stakeholder management
    - Quality assurance and testing`,
    imageUrl: '/images/project-management.jpg', // Replace with actual image path
  },
  {
    title: 'Cloud Computing',
    description: `Leveraging the power of the cloud for flexibility, scalability, and cost-effectiveness. We provide cloud migration, architecture design, and management services to help you harness the full potential of cloud technologies. 
    
    Our cloud computing services encompass:
    - Cloud Strategy and Consulting
    - Cloud Migration and Deployment 
    - Cloud Security and Compliance
    - Cloud Infrastructure Management
    - Cloud Cost Optimization`,
    imageUrl: '/images/cloud-computing.jpg', // Replace with actual image path 
  },
  {
    title: 'Cyber Security',
    description: `Protecting your digital assets with robust cybersecurity solutions. From threat detection and prevention to data encryption and security audits, we keep your business safe from evolving cyber threats. 

    Our cybersecurity services include:
    - Threat Assessment and Vulnerability Management 
    - Security Information and Event Management (SIEM)
    - Firewall Management and Intrusion Detection/Prevention
    - Data Encryption and Data Loss Prevention (DLP)
    - Security Awareness Training`, 
    imageUrl: '/images/cyber-security.jpg', // Replace with actual image path
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    

      <div className="space-y-16"> {/* Use space-y for vertical spacing */}
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8`} 
          >
            <div className="lg:w-1/2"> 
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={800} 
                height={500} 
                className="w-full h-auto rounded-lg shadow-md" 
              />
            </div>
            <div className="lg:w-1/2 p-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-base text-gray-700 mb-4">
                {service.description}
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;