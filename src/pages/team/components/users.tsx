// ================================
// components/users.tsx (Users) — (kept for future, but not used on page)
// ================================
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const people = [
  {
    name: "Jane Doe",
    position: "Product Designer",
    img: "/images/users/designer.png",
    bio: "Designs thoughtful interfaces with simplicity and impact.",
  },
  {
    name: "Mark Louis",
    position: "Software Engineer",
    img: "/images/users/developer.png",
    bio: "Writes scalable, reliable systems with user experience in mind.",
  },
  {
    name: "Amira N.",
    position: "Marketing Strategist",
    img: "/images/users/marketer.png",
    bio: "Crafts clear, measurable communication strategies.",
  },
];

const list = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } };
const row = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export const Users = () => {
  return (
    <motion.div
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {people.map((p, i) => (
        <motion.div
          key={i}
          variants={row}
          whileHover={{ y: -3 }}
          className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:shadow-md"
        >
          <div className="relative mx-auto mb-3 h-16 w-16 overflow-hidden rounded-full ring-2 ring-gray-100 sm:h-20 sm:w-20">
            <Image src={p.img} alt={p.name} fill className="object-cover" sizes="(max-width: 640px) 64px, 80px" />
          </div>
          <h4 className="text-sm font-semibold text-gray-900">{p.name}</h4>
          <p className="mb-2 text-[11px] uppercase tracking-wide text-gray-500">{p.position}</p>
          <p className="mx-auto max-w-xs text-[12px] leading-relaxed text-gray-600">{p.bio}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Users;
