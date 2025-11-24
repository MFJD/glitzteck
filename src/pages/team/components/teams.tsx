"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

/* -------------------- Data -------------------- */
const members = [
  {
    nameKey: "team_member1_name",
    positionKey: "team_member1_position",
    descriptionKey: "team_member1_description",
    imageUrl: "/images/users/towa3.png",
    focalY: "35%",
  },
  {
    nameKey: "team_member2_name",
    positionKey: "team_member2_position",
    descriptionKey: "team_member2_description",
    imageUrl: "/images/users/yann2.png",
    focalY: "35%",
  },
  {
    nameKey: "team_member3_name",
    positionKey: "team_member3_position",
    descriptionKey: "team_member3_description",
    imageUrl: "/images/users/James2.png",
    focalY: "35%",
  },
];

/* -------------------- Motion variants -------------------- */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

/* -------------------- TeamImage -------------------- */
const TeamImage: React.FC<{ src: string; alt: string; focalY?: string }> = ({ src, alt, focalY = "50%" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 overflow-hidden rounded-full mx-auto mt-6 transition-transform duration-300">
      <div className="absolute inset-0 rounded-full border border-white bg-white/10 shadow-sm pointer-events-none" />
      <div className="relative w-full h-full bg-gray-100">
        <div className={`absolute inset-0 animate-pulse bg-gray-200 transition-opacity duration-300 ${loaded ? "opacity-0" : "opacity-100"}`} />
        <Image
          src={src}
          alt={alt}
          fill
          onLoadingComplete={() => setLoaded(true)}
          sizes="(max-width: 540px) 85vw, (max-width: 950px) 25vw, 140px"
          loading="lazy"
          quality={85}
          unoptimized
          style={{
            objectFit: "cover",
            objectPosition: `50% ${focalY}`,
            transition: "transform 350ms ease, opacity 300ms ease",
            transform: loaded ? "scale(1)" : "scale(1.03)",
            opacity: loaded ? 1 : 0,
          }}
          className="group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
};

/* -------------------- OurTeam -------------------- */
const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl grid gap-6 sm:gap-8 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] px-5"
    >
      {members.map((m, i) => (
        <motion.article
          key={i}
          variants={item}
          whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
          className="group relative flex flex-col items-center text-center overflow-hidden rounded-3xl h-full bg-white/90 backdrop-blur shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <TeamImage src={m.imageUrl} alt={t(m.nameKey)} focalY={m.focalY} />
          <div className="px-5 py-4 flex flex-col flex-grow">
            <h3 className="text-sm md:text-[0.94rem] font-semibold text-gray-900 tracking-tight">{t(m.nameKey)}</h3>
            <div className="mt-1 inline-flex items-center rounded-full border border-gray-200 bg-white px-2 py-1 text-[9px] font-medium text-gray-600 tracking-wide">
              {t(m.positionKey)}
            </div>
            <p className="mt-3 text-[0.8rem] md:text-[0.9rem] leading-relaxed text-gray-600 mt-auto">
              {t(m.descriptionKey)}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-0 bg-black/20 rounded-3xl"
          />
        </motion.article>
      ))}
    </motion.div>
  );
};

export default OurTeam;
