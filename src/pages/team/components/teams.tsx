"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

const members = [
  {
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
  },
];

const container = {
  hidden: { opacity: 0 },
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

// Smaller image helper with stronger bottom crop and skeleton/pulse until loaded
const TeamImage: React.FC<{ src: string; alt: string; sizes?: string }> = ({
  src,
  alt,
  sizes,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-t-2xl">
      {/* much shorter portrait with stronger bottom crop */}
      <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
        {/* skeleton */}
        <div
          className={`absolute inset-0 animate-pulse bg-slate-200 transition-opacity duration-300 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover object-top transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setLoaded(true)}
          sizes={
            sizes ?? "(max-width: 540px)  85vw, (max-width: 950px) 25vw, 160px"
          }
          loading="lazy"
          quality={85}
        />
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="
        mx-auto max-w-6xl
        grid gap-4 sm:gap-5
        [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))]
      "
    >
      {members.map((m, i) => (
        <motion.article
          key={i}
          variants={item}
          whileHover={{ y: -3 }}
          className="
            group relative overflow-hidden
            rounded-2xl border border-slate-200 bg-white/80 backdrop-blur
            transition-all hover:border-sky-200
          "
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-400/60 via-cyan-400/60 to-sky-400/60" />

          {/* Smaller IMAGE with cropped bottom */}
          <TeamImage src={m.imageUrl} alt={m.name} />

          <div className="px-3 py-3.5 sm:px-3.5 sm:py-4">
            <h3 className="text-[0.92rem] font-semibold tracking-[-0.02em] text-slate-900">
              {m.name}
            </h3>

            <div className="mt-1 inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-[2px] text-[9px] font-medium tracking-wide text-slate-600">
              {m.position}
            </div>

            <p className="mt-3 text-[0.83rem] leading-relaxed text-slate-600">
              {m.description}
            </p>

            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] text-slate-500">Co-Founder of Glitzteck</span>
              <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(36rem 14rem at 80% -10%, rgba(56,189,248,0.08), transparent)",
            }}
          />
        </motion.article>
      ))}
    </motion.div>
  );
};

export default OurTeam;