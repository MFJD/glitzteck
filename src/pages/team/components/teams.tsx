// ================================
// components/teams.tsx (OurTeam) — Light, elegant, mobile‑first & responsive avatars
// ================================
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const members = [
  {
    name: "TOWA TIEMENI FRANK",
    position: "Chief Executive Officer",
    imageUrl: "/images/users/towa.png",
    description:
      "Guides Glitzteck’s vision and growth. Focused, pragmatic, and relentlessly customer‑driven.",
  },
  {
    name: "TCHOUMTA YANN",
    position: "Chief Administrative Officer",
    imageUrl: "/images/users/yann.png",
    description:
      "Builds smooth operations and thoughtful processes that let teams move fast with clarity.",
  },
  {
    name: "MBA FONGANG JAMES",
    position: "Chief Technical Officer",
    imageUrl: "/images/users/James.png",
    description:
      "Leads engineering strategy. Scalable systems, clean architecture, and purposeful innovation.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Card = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -4 }}
    className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
  >
    <div
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
      style={{
        background:
          "radial-gradient(24rem 12rem at 70% -10%, rgba(99,102,241,0.08), transparent)",
      }}
    />
    {children}
  </motion.div>
);

const Avatar = ({ src, alt }: { src: string; alt: string }) => (
  // Use responsive, valid Tailwind sizes. Fill requires a sized, relative parent.
  <div className="relative mx-auto mb-4 h-24 w-24 sm:h-28 sm:w-28">
    <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 via-sky-400 to-emerald-400 p-[2px]">
      <span className="block h-full w-full rounded-full bg-white" />
    </span>
    <div className="absolute inset-[3px] overflow-hidden rounded-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 96px, 112px" />
    </div>
  </div>
);

const OurTeam = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {members.map((m, i) => (
        <Card key={i}>
          <div className="flex flex-col items-center text-center">
            <Avatar src={m.imageUrl} alt={m.name} />
            <h3 className="text-sm font-semibold tracking-tight text-gray-900">{m.name}</h3>
            <p className="mb-2 text-[11px] uppercase tracking-wide text-gray-500">{m.position}</p>
            <p className="max-w-xs text-[12px] leading-relaxed text-gray-600">{m.description}</p>
          </div>
        </Card>
      ))}
    </motion.div>
  );
};

export default OurTeam;


