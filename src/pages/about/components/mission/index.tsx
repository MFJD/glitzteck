

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';


const MissionSection: React.FC = () => {
    interface Stat {
        label: number;
        value: string;
    }
    
    const stats: Stat[] = [
        { label: 24, value: ('missionProjects')},
        { label: 18, value: ('missionClients')},
        { label: 10, value: ('missionExperts')},
    ];
    
    const [animatedStats, setAnimatedStats] = useState<Stat[]>(
        stats.map((stat) => ({ label: 0, value: stat.value })) // Set initial value
    );
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, {});

    useEffect(() => {
        let intervalId: NodeJS.Timer | any; // To store the interval ID

        if (isInView) {
            intervalId   = setInterval(() => {
                setAnimatedStats((prevStats) =>
                    prevStats.map((stat, index) => {
                        if (stat.label < stats[index].label) {
                            return { ...stat, label: stat.label + 1 };
                        }
                        return stat; // No need to update if already at target
                    })
                );
            }, 100); // Adjust speed here (milliseconds)
        } else {
            // Reset to 0 when out of view (optional)
            setAnimatedStats(stats.map((stat) => ({ label: 0, value: stat.value })));
        }
        return () => {
            if (intervalId) { // Check if intervalId is defined
              clearInterval(intervalId); 
            }
          };
    }, [isInView]);
    const { t} = useTranslation();
    return (
        <div className="mx-auto mb-20 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                {/* Use a div with a ref for useInView */}
                <div ref={sectionRef}>
                    <h2 className="text-3xl font-bold tracking-tight primaryText sm:text-4xl">
                    {t('missiontitle')}
                    </h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-lg leading-8 text-gray-600">
                            {t('missionparagraph1')}
                               
                            </p>
                            <div className="mt-10 text-lg text-gray-700">
                                <p>{t('missionparagraph2')}
                                
                                </p>
                                <p className="mt-10 text-lg">{t('missionparagraph3')}
                                  
                                </p>
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-auto lg:justify-center">
                            <dl className="w-64 space-y-8 xl:w-80">
                                {animatedStats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col-reverse gap-y-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <dt className="text-3xl primaryText leading-7 text-gray-600">
                                            {stat.label}
                                        </dt>
                                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                                            {stat.value}
                                        </dd>
                                    </motion.div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // ... rest of your JSX ...
    );
};

export default MissionSection;

