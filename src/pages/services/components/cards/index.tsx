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
        ))}
      </div>
    </div>
  );
};

export default Cards;
