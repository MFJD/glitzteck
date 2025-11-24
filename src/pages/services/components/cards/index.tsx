<<<<<<< HEAD
// ================================
// pages/components/cards.tsx — Mobile‑first, bigger images + clear scroll hint (no page horizontal scroll)
// ================================
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    desc: "Web, mobile, and platform engineering. Clean, scalable code and crisp UX.",
    imageUrl: "/images/software.png",
    bullets: ["Product discovery & prototyping", "Full‑stack apps", "Design systems"],
  },
  {
    title: "Project & Delivery Management",
    desc: "Roadmaps, sprints, and stakeholder clarity. Predictable shipping.",
    imageUrl: "/images/projectmanagement.png",
    bullets: ["Agile/Lean delivery", "KPIs & reporting", "Vendor coordination"],
  },
  {
    title: "Cloud & DevOps",
    desc: "Modern infra on AWS/Azure/GCP. CI/CD and observability built‑in.",
    imageUrl: "/images/cloudcomputing.png",
    bullets: ["Kubernetes & serverless", "Pipelines & IaC", "Monitoring & autoscale"],
  },
  {
    title: "Cybersecurity",
    desc: "Hardening, audits, and incident readiness. Protect apps and data.",
    imageUrl: "/images/cybersecurity.png",
    bullets: ["Threat modeling", "Pen‑testing & fixes", "Compliance guidance"],
  },
];

const Cards = () => {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Mobile horizontal scroll with big images + hint */}
      <div
        className="relative block sm:hidden"
        role="region"
        aria-label="Services cards — swipe horizontally"
      >
        {/* fade edges to hint scrollability */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />

        {/* scroll container */}
        <div className="overflow-x-auto overscroll-x-contain scroll-smooth">
          <div className="flex snap-x snap-mandatory gap-4 pb-2 px-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="snap-start shrink-0 basis-[85%] rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <div className="relative mb-3 h-48 w-full overflow-hidden rounded-xl">
                  <Image
                    src={s.imageUrl}
                    alt={s.title}
                    fill
                    className="object-contain bg-slate-50"
                    sizes="100vw"
                  />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-slate-900">{s.title}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{s.desc}</p>
                <ul className="mt-2 space-y-1 text-[11px] text-slate-600">
                  {s.bullets.map((b, j) => (
                    <li key={j}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* swipe hint chip */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pointer-events-none absolute bottom-1 right-3 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/95 px-2 py-1 text-[10px] font-medium text-slate-600 shadow-sm"
        >
          <span>Swipe</span>
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.div>
      </div>

      {/* Tablet/desktop grid */}
      <div className="hidden grid-cols-2 gap-6 sm:grid lg:grid-cols-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative mb-4 h-32 w-full overflow-hidden rounded-xl">
              <Image
                src={s.imageUrl}
                alt={s.title}
                fill
                className="object-contain bg-slate-50"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">{s.title}</h3>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{s.desc}</p>
            <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
              {s.bullets.map((b, j) => (
                <li key={j}>• {b}</li>
              ))}
            </ul>
          </div>
=======
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services_cards_software_title"),
      desc: t("services_cards_software_desc"),
      imageUrl: "/images/software2.png",
      bullets: [
        t("services_cards_software_bullet1"),
        t("services_cards_software_bullet2"),
        t("services_cards_software_bullet3"),
      ],
    },
    {
      title: t("services_cards_project_title"),
      desc: t("services_cards_project_desc"),
      imageUrl: "/images/projectmanagement3.png",
      bullets: [
        t("services_cards_project_bullet1"),
        t("services_cards_project_bullet2"),
        t("services_cards_project_bullet3"),
      ],
    },
    {
      title: t("services_cards_cloud_title"),
      desc: t("services_cards_cloud_desc"),
      imageUrl: "/images/cloudcomputing1.png",
      bullets: [
        t("services_cards_cloud_bullet1"),
        t("services_cards_cloud_bullet2"),
        t("services_cards_cloud_bullet3"),
      ],
    },
    {
      title: t("services_cards_security_title"),
      desc: t("services_cards_security_desc"),
      imageUrl: "/images/cybersecurity2.png",
      bullets: [
        t("services_cards_security_bullet1"),
        t("services_cards_security_bullet2"),
        t("services_cards_security_bullet3"),
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md border border-slate-100 cursor-pointer"
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="relative h-44 w-full overflow-hidden">
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={s.imageUrl}
                  alt={s.title}
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 flex-1">{s.desc}</p>
              <ul className="mt-3 space-y-1">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
>>>>>>> try-push-MFJD
        ))}
      </div>
    </div>
  );
};

export default Cards;
