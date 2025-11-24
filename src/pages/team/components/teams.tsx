<<<<<<< HEAD
// ================================
// components/teams.tsx — Slimmer, tighter, elegant cards (lazy + pulse)
// ================================
=======
>>>>>>> try-push-MFJD
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> try-push-MFJD

/* -------------------- Data -------------------- */
const members = [
  {
<<<<<<< HEAD
    name: "TOWA TIEMENI FRANK",
    position: "Chief Executive Officer",
    imageUrl: "/images/users/towa1.png",
    description:
      "Guides Glitzteck’s vision and growth. Focused, pragmatic, and relentlessly customer-driven.",
  },
  {
    name: "TCHOUMTA YANN",
    position: "Chief Administrative Officer",
    imageUrl: "/images/users/yann1.png",
    description:
      "Builds smooth operations and thoughtful processes that let teams move fast with clarity.",
  },
  {
    name: "MBA FONGANG JAMES",
    position: "Chief Technical Officer",
    imageUrl: "/images/users/James1.png",
    description:
      "Leads engineering strategy. Scalable systems, clean architecture, and purposeful innovation.",
=======
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
>>>>>>> try-push-MFJD
  },
];

/* -------------------- Motion variants -------------------- */
const container = {
  hidden: { opacity: 0 },
<<<<<<< HEAD
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

// Small helper with skeleton/pulse until the image is loaded
const TeamImage: React.FC<{ src: string; alt: string; sizes?: string }> = ({
  src,
  alt,
  sizes,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-t-2xl">
      {/* slightly shorter portrait: aspect-[7/10] ~ 0.7w/1h (shorter than 2.6/4) */}
      <div className="relative w-full aspect-[7/10] bg-slate-100">
        {/* skeleton */}
        <div
          className={`absolute inset-0 animate-pulse bg-slate-200 transition-opacity duration-300 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
=======
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
>>>>>>> try-push-MFJD
        <Image
          src={src}
          alt={alt}
          fill
<<<<<<< HEAD
          className={`object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setLoaded(true)}
          sizes={sizes ?? "(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 220px"}
          loading="lazy"
          quality={85}
        />
        {/* subtle bottom fade for a premium transition into content */}
=======
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
>>>>>>> try-push-MFJD
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
<<<<<<< HEAD
      viewport={{ once: true, amount: 0.15 }}
      className="
        mx-auto max-w-6xl
        grid gap-4 sm:gap-5
        [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))]
      "
=======
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl grid gap-6 sm:gap-8 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] px-5"
>>>>>>> try-push-MFJD
    >
      {members.map((m, i) => (
        <motion.article
          key={i}
          variants={item}
<<<<<<< HEAD
          whileHover={{ y: -3 }}
          className="
            group relative overflow-hidden
            rounded-2xl border border-slate-200 bg-white/80 backdrop-blur
            transition-all hover:border-sky-200
          "
        >
          {/* top accent hairline */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-400/60 via-cyan-400/60 to-sky-400/60" />

          {/* IMAGE: full-bleed horizontally, a bit shorter, no scaling */}
          <TeamImage src={m.imageUrl} alt={m.name} />

          {/* content (slightly tighter) */}
          <div className="px-3 py-3.5 sm:px-3.5 sm:py-4">
            <h3 className="text-[0.92rem] font-semibold tracking-[-0.02em] text-slate-900">
              {m.name}
            </h3>

            {/* role chip */}
            <div className="mt-1 inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-[2px] text-[9px] font-medium tracking-wide text-slate-600">
              {m.position}
            </div>

            <p className="mt-3 text-[0.83rem] leading-relaxed text-slate-600">
              {m.description}
            </p>

            {/* divider */}
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* footer label */}
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] text-slate-500">
                Co-Founder of Glitzteck
              </span>
              <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>

          {/* soft hover glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(36rem 14rem at 80% -10%, rgba(56,189,248,0.08), transparent)",
            }}
=======
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
>>>>>>> try-push-MFJD
          />
        </motion.article>
      ))}
    </motion.div>
  );
};

export default OurTeam;
