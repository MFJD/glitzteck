"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Inter } from "next/font/google";
import Navbar from "@/pages/components/navbar";
import Footer from "@/pages/components/footer";
import CTA from "@/pages/components/Cta";
import ScrollToTopButton from "@/components/scrollButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

// Couleur primaire vive pour ce style
const PRIMARY_COLOR = "#0a5147d5"; // Turquoise / Émeraude vif

// ===============================================
// CODE MIS À JOUR : DonutChartMock (Ajout de rotation continue)
// ===============================================

/**
 * Animated Donut Chart Mock
 */
function DonutChartMock({ value = 78, label = "Completion" }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  // Animation d'entrée (remplissage)
  const draw = {
    hidden: { strokeDashoffset: circumference },
    visible: {
      strokeDashoffset: strokeDashoffset,
      transition: {
        strokeDashoffset: { duration: 1.5, ease: "easeOut" },
      }
    }
  };
  
  // Animation continue (rotation subtile)
  const spin = {
      rotate: 360,
      transition: {
          repeat: Infinity,
          duration: 30, // Très lent pour ne pas distraire
          ease: "linear",
      }
  };

  return (
    <div className="relative w-full h-36 flex items-center justify-center">
      <motion.svg 
        className="w-full h-full transform -rotate-90" 
        viewBox="0 0 44 44"
        animate={spin} // Rotation continue sur le SVG entier
      >
        {/* Track */}
        <circle
          className="text-slate-200"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="22"
          cy="22"
        />
        {/* Progress */}
        <motion.circle
          className="text-emerald-500"
          strokeWidth="4"
          stroke={PRIMARY_COLOR}
          fill="transparent"
          r={radius}
          cx="22"
          cy="22"
          strokeDasharray={circumference}
          variants={draw}
          initial="hidden"
          animate="visible"
          strokeLinecap="round"
        />
      </motion.svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-slate-900">{value}%</span>
        <span className="text-xs text-slate-500">{label}</span>
      </div>
    </div>
  );
}


// ===============================================
// CODE MIS À JOUR : SPARKLINE (Animation de dessin en boucle)
// ===============================================

/**
 * Small reusable sparkline using inline SVG - lightweight and professional
 */
function Sparkline({ points = [20, 35, 28, 50, 65, 60, 75], ariaLabel = "Sparkline" }) {
  const w = 100;
  const h = 40;
  const step = w / Math.max(1, points.length - 1);
  const pathData = points
    .map((p, i) => `${i * step},${h - (p / 100) * h}`)
    .join(" ");

  const polylinePath = `M${pathData.trim()}`;

  // Animation de dessin initial + répétition en boucle
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        opacity: { duration: 0.01 }
      }
    }
  };

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="40" role="img" aria-label={ariaLabel} className="block">
      {/* The main line with a drawing animation */}
      <motion.path
        d={polylinePath}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        variants={draw}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}

// ===============================================
// CODE MIS À JOUR : DASHBOARDMOCK (Animations continues sur les chiffres et la liste)
// ===============================================

/**
 * DashboardMock - Style V4 : Animation constante des chiffres
 */
function DashboardMock({ primary = PRIMARY_COLOR, t }: { primary?: string; t: (k: string) => string }) {
  const kpis = [
    { label: t("home_index_kpi_revenue") || "MRR", value: "€25.1k", change: "+4.2%", points: [12, 22, 28, 34, 46, 55, 62, 70], icon: "💸" },
    { label: t("home_index_kpi_active_users") || "Users", value: "4,250", change: "+1.6%", points: [80, 75, 68, 72, 60, 78, 85, 90], icon: "👤" },
    { label: t("home_index_kpi_uptime") || "Tickets", value: "12", change: "-15%", points: [95, 98, 97, 99, 96, 99, 98, 99], icon: "🛠️" },
  ];

  const rows = [
    { name: "Acme Corp", status: "Live", revenue: "€4.2k" },
    { name: "Bright Labs", status: "Trial", revenue: "€1.1k" },
    { name: "Oceanic", status: "Paused", revenue: "€0.0k" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardHoverStyle = {
    scale: 1.01,
    boxShadow: `0 8px 20px rgba(0, 0, 0, 0.06), 0 0 0 3px ${primary}`,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  };
  
  // Animation de pulsation subtile pour les chiffres KPI
  const pulsingNumber = {
      scale: [1, 1.02, 1],
      y: [0, -1, 0],
      transition: { 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: Math.random() * 0.5, // Décalage aléatoire pour un effet plus naturel
      }
  };
  
  // Animation de pulsation subtile pour les éléments de la liste
  const pulsingRow = {
      scale: [1, 1.005, 1],
      transition: { 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: Math.random() * 1.0, 
      }
  };

  return (
    <motion.div
      ref={ref}
      variants={dashboardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white rounded-3xl shadow-2xl shadow-slate-300/50 overflow-hidden max-w-[640px] w-full ring-2 ring-slate-100"
      role="region"
      aria-label={t("home_index_dashboard_preview_aria") || "Dashboard preview"}
    >
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-white">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-lg"
            style={{ background: primary }}
            aria-hidden="true"
          >
            D
          </div>
          <div>
            <div className="text-base font-extrabold text-slate-900">{t("home_index_dashboard_title") || "Product Dashboard"}</div>
            <div className="text-xs text-slate-500">{t("home_index_dashboard_subtitle") || "Overview & recent activity"}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm px-3 py-1 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition shadow-sm"
            aria-label={t("home_index_dashboard_action_refresh") || "Refresh"}
            title={t("home_index_dashboard_action_refresh") || "Refresh"}
          >
            ⟳
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm px-4 py-1.5 rounded-full text-white font-medium transition shadow-md shadow-emerald-400/50"
            style={{ background: primary }}
            aria-label={t("home_index_dashboard_action_view") || "Open dashboard"}
          >
            {t("home_index_dashboard_action_view") || "Open"}
          </motion.button>
        </div>
      </div>

      {/* KPI Row - Cartes animées au survol */}
      <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-100 bg-slate-50">
        {kpis.map((kpi, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col p-4 rounded-xl bg-white border border-slate-200 cursor-pointer transition-shadow duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
            whileHover={cardHoverStyle} 
          >
            <div className="flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">{kpi.icon}</span>
                <span className="text-xs font-medium text-slate-500">{kpi.label}</span>
            </div>

            <motion.div className="flex items-baseline gap-2 mt-1" animate={pulsingNumber}>
              <span className="text-2xl font-extrabold text-slate-900">{kpi.value}</span>
              <span
                className={`text-sm font-semibold ${kpi.change.startsWith("-") ? "text-rose-600" : "text-emerald-600"}`}
                aria-hidden="true"
              >
                {kpi.change}
              </span>
            </motion.div>
            
            {/* dynamic sparkline */}
            <div className="mt-2 text-emerald-500" style={{ color: primary }}>
              <Sparkline points={kpi.points} ariaLabel={`${kpi.label} trend`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main content: chart area + recent list */}
      <div className="px-6 pb-6 pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-slate-50">
        {/* Main Chart Area (Donut Chart Mock) */}
        <motion.div
            className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={cardHoverStyle} 
        >
          <div className="text-sm font-semibold text-slate-700 mb-2">{t("home_index_dashboard_graph_title") || "Feature Adoption"}</div>
          <div className="h-36 flex items-center justify-center">
            <DonutChartMock value={78} label="Active Users" />
          </div>
        </motion.div>

        {/* Recent List - Cartes animées au survol */}
        <motion.div
            className="rounded-xl p-4 border border-slate-200 bg-white shadow-sm"
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={cardHoverStyle} 
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-700">{t("home_index_dashboard_recent_title") || "Recent Deals"}</div>
            <button className="text-xs text-slate-400 hover:text-slate-600 transition" aria-label="See all">
              {t("home_index_dashboard_see_all") || "See all"}
            </button>
          </div>

          <ul className="mt-3 divide-y divide-slate-100">
            {rows.map((r, i) => (
              <motion.li
                key={i}
                className="py-2 flex items-center justify-between hover:bg-slate-50 rounded-md transition px-1 -mx-1"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Animation d'entrée
                whileInView={pulsingRow} // Animation continue des lignes
                viewport={{ amount: 0.5, once: false }} // Répéter l'animation tant qu'elle est visible
                transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
              >
                <div>
                  <div className="text-sm font-medium text-slate-900">{r.name}</div>
                  <div className={`text-xs ${r.status === 'Live' ? 'text-emerald-500' : r.status === 'Trial' ? 'text-blue-500' : 'text-slate-400'}`}>{r.status}</div>
                </div>
                <div className="text-base font-semibold text-slate-900">{r.revenue}</div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* footer note */}
      <div className="px-6 py-3 border-t border-slate-100 text-xs text-slate-500 bg-white">
        {t("home_index_dashboard_footer_note") || "Live preview — not connected to production"}
      </div>
    </motion.div>
  );
}

export default function Home() {
// ... Le reste du code de la fonction Home reste inchangé

  const { t } = useTranslation();
  const primary = PRIMARY_COLOR;

  // Page-wide motion variants
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12, scale: 0.995 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatSlow = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const visualCards = [
    {
      img: "/images/dashboard_visual1.png",
      titleKey: "home_index_visual_card_1_title",
      descKey: "home_index_visual_card_1_desc",
      altKey: "home_index_visual_card_1_alt",
    },
    {
      img: "/images/security_visual2.png",
      titleKey: "home_index_visual_card_2_title",
      descKey: "home_index_visual_card_2_desc",
      altKey: "home_index_visual_card_2_alt",
    },
    {
      img: "/images/collaborator_visual3.png",
      titleKey: "home_index_visual_card_3_title",
      descKey: "home_index_visual_card_3_desc",
      altKey: "home_index_visual_card_3_alt",
    },
  ];

  return (
    <div className={`${inter.className} bg-white text-slate-900`}>
      {/* NAVBAR */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* HERO / HEADER */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative overflow-visible"
      >
        <div className="mx-auto max-w-7xl mt-20 px-6 lg:px-8 pt-8 lg:pt-12 pb-8 lg:pb-14" aria-label={t("home_index_hero_aria_label")}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left column: content */}
            <motion.div variants={fadeUp} className="space-y-5 lg:space-y-6">
              {/* Headline with new primary color */}
              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold leading-tight" style={{ color: primary }}>
                {t("home_index_hero_title")}
              </h1>

              {/* Reduced paragraph size a touch */}
              <p className="text-base sm:text-lg max-w-2xl text-slate-700">
                {t("home_index_hero_paragraph")}
              </p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg ring-1 ring-slate-200 transition shadow-emerald-400/50"
                  style={{ background: primary, color: "white" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4-4m-4 4l4 4" />
                  </svg>
                  {t("home_index_cta_get_in_touch")}
                </motion.a>

                <motion.a whileHover={{ scale: 1.02 }} href="#services" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 text-sm hover:bg-slate-50 transition">
                  {t("home_index_cta_explore_services")}
                </motion.a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="bg-slate-50 rounded-lg p-3 shadow-sm flex flex-col items-start border border-slate-100">
                  <span className="text-sm font-semibold">{t("home_index_service_saas")}</span>
                  <span className="text-xs text-slate-500">{t("home_index_service_saas_desc")}</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 shadow-sm flex flex-col items-start border border-slate-100">
                  <span className="text-sm font-semibold">{t("home_index_service_custom_software")}</span>
                  <span className="text-xs text-slate-500">{t("home_index_service_custom_software_desc")}</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 shadow-sm flex flex-col items-start border border-slate-100">
                  <span className="text-sm font-semibold">{t("home_index_service_cloud")}</span>
                  <span className="text-xs text-slate-500">{t("home_index_service_cloud_desc")}</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 shadow-sm flex flex-col items-start border border-slate-100">
                  <span className="text-sm font-semibold">{t("home_index_service_cybersecurity")}</span>
                  <span className="text-xs text-slate-500">{t("home_index_service_cybersecurity_desc")}</span>
                </div>
              </motion.div>

              <motion.p variants={fadeUp} className="text-sm text-slate-500 mt-2 max-w-xl">
                {t("home_index_trusted_partners")}
              </motion.p>
            </motion.div>

            {/* Right column: professional dashboard preview */}
            <motion.div variants={fadeUp} className="relative flex justify-center items-center lg:items-end">
              {/* Replace AnimatedDiagram with DashboardMock (professional preview) */}
              <motion.div className="w-full max-w-[640px]" variants={floatSlow} animate="animate">
                <DashboardMock primary={primary} t={t} />
              </motion.div>

              {/* Decorative blobs for depth; they help break the stacking feel on mobile */}
              <div className="pointer-events-none absolute -right-6 -top-6 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,196,167,0.14)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-6 w-36 h-36 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,196,167,0.07)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
            </motion.div>
          </div>
        </div>

        {/* Pull next section up on small screens so hero and the following image don't become two separate giant blocks stacked one after another */}
        <div className="-mt-12 sm:-mt-16 lg:mt-0" />
      </motion.header>

      {/* MAIN LONG SINGLE PAGE SECTIONS */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-28 space-y-14 -mt-6">
        {/* WHO WE ARE */}
        <motion.section
          id="who-we-are"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="bg-slate-50 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 border border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeUp} className="order-last lg:order-first">
              {/* Decorative image: team + product. On small screens we shrink and offset it to avoid a big stacked block. */}
              <div className="rounded-2xl overflow-hidden transform sm:translate-y-0 -translate-y-6 sm:-translate-y-2">
                <img src="/images/front-image.png" alt={t("home_index_team_image_alt")} className="w-full h-auto object-cover sm:object-contain" />
              </div>
            </motion.div>
            <div>
              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-slate-900">{t("home_index_who_we_are_title")}</motion.h2>

              <motion.p variants={fadeUp} className="mt-3 text-slate-700 leading-relaxed text-base">
                {t("home_index_who_we_are_para1")}
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 text-slate-700 leading-relaxed text-base">
                {t("home_index_who_we_are_para2")}
              </motion.p>

              <motion.ul variants={fadeUp} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-emerald-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill={primary} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">{t("home_index_value_product_first")}</div>
                    <div className="text-sm text-slate-500">{t("home_index_value_product_first_desc")}</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-emerald-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3L19 8V16C19 18 17 20 14 20H10C7 20 5 18 5 16V8L12 3Z" fill={primary} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">{t("home_index_value_design_delivery")}</div>
                    <div className="text-sm text-slate-500">{t("home_index_value_design_delivery_desc")}</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-emerald-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8 2 5 5 5 9C5 14 12 22 12 22C12 22 19 14 19 9C19 5 16 2 12 2Z" fill={primary} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">{t("home_index_value_security_first")}</div>
                    <div className="text-sm text-slate-500">{t("home_index_value_security_first_desc")}</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-emerald-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 12H21" stroke={primary} strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 6H21" stroke={primary} strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 18H21" stroke={primary} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">{t("home_index_value_end_to_end")}</div>
                    <div className="text-sm text-slate-500">{t("home_index_value_end_to_end_desc")}</div>
                  </div>
                </li>
              </motion.ul>
            </div>


          </div>
        </motion.section>

        {/* WHAT WE MOST VALUE */}
        <motion.section
          id="values"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="bg-emerald-50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-emerald-100"
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold text-slate-900">{t("home_index_values_title")}</motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-slate-600 max-w-3xl text-base">
            {t("home_index_values_intro")}
          </motion.p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2Z" fill={primary}></path><path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20" fill={primary}></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">{t("home_index_value_culture_title")}</h4>
                  <p className="text-sm text-slate-500">{t("home_index_value_culture_desc")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8H9L12 2Z" fill={primary}></path><path d="M6 10H18V20H6V10Z" fill={primary}></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">{t("home_index_value_wellbeing_title")}</h4>
                  <p className="text-sm text-slate-500">{t("home_index_value_wellbeing_desc")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2V12L20 20" stroke={primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">{t("home_index_value_resilience_title")}</h4>
                  <p className="text-sm text-slate-500">{t("home_index_value_resilience_desc")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* WHY CHOOSE GLITZTECK */}
        <motion.section
          id="why"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-md border border-slate-100"
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold">{t("home_index_why_title")}</motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-slate-600 max-w-3xl text-base">{t("home_index_why_intro")}</motion.p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill={primary}></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">{t("home_index_why_reason_1_title")}</h4>
                  <p className="text-sm text-slate-500">{t("home_index_why_reason_1_desc")}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6H20V18H4V6Z" fill={primary}></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">{t("home_index_why_reason_2_title")}</h4>
                  <p className="text-sm text-slate-500">{t("home_index_why_reason_2_desc")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke={primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">{t("home_index_why_reason_3_title")}</h4>
                  <p className="text-sm text-slate-500">{t("home_index_why_reason_3_desc")}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 12H21" stroke={primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">{t("home_index_why_reason_4_title")}</h4>
                  <p className="text-sm text-slate-500">{t("home_index_why_reason_4_desc")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* EXPANDED SERVICES SUMMARY */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="bg-slate-50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-slate-100"
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold">{t("home_index_services_title")}</motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-slate-600 max-w-3xl text-base">{t("home_index_services_intro")}</motion.p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h5 className="font-semibold">{t("home_index_service_card_1_title")}</h5>
              <p className="text-sm text-slate-500 mt-2">{t("home_index_service_card_1_desc")}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h5 className="font-semibold">{t("home_index_service_card_2_title")}</h5>
              <p className="text-sm text-slate-500 mt-2">{t("home_index_service_card_2_desc")}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h5 className="font-semibold">{t("home_index_service_card_3_title")}</h5>
              <p className="text-sm text-slate-500 mt-2">{t("home_index_service_card_3_desc")}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h5 className="font-semibold">{t("home_index_service_card_4_title")}</h5>
              <p className="text-sm text-slate-500 mt-2">{t("home_index_service_card_4_desc")}</p>
            </motion.div>
          </div>
        </motion.section>

        {/* LARGE visual callout / gallery of SVGs. Rearranged so on mobile two large images aren't stacked directly one after another: we use a mosaic layout with overlap */}
        <motion.section
          className="rounded-2xl p-6 sm:p-8 lg:p-12 bg-white shadow-lg overflow-visible border border-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-bold">{t("home_index_visuals_title")}</motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-slate-600 max-w-3xl text-base">{t("home_index_visuals_intro")}</motion.p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative">

            {visualCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative rounded-2xl overflow-hidden border h-72 group"
              >
                {/* CLEAN IMAGE */}
                <img
                  src={card.img}
                  alt={t(card.altKey)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out
                    group-hover:scale-105"
                />

                {/* HOVER OVERLAY — black fade + blur */}
                <div
                  className="
          absolute inset-0
          bg-black/0 backdrop-blur-0
          group-hover:bg-black/60 group-hover:backdrop-blur-md
          transition-all duration-500 ease-out
          pointer-events-none
        "
                />

                {/* Your ORIGINAL text position (always visible) */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div
                    className="
            font-semibold text-white text-lg
            transition-all duration-500 ease-out
            group-hover:translate-y-[-4px] group-hover:opacity-100
          "
                  >
                    {t(card.titleKey)}
                  </div>

                  <div
                    className="
            text-sm text-slate-200 mt-1
            transition-all duration-500 ease-out delay-75
            group-hover:translate-y-[-2px] group-hover:opacity-100
          "
                  >
                    {t(card.descKey)}
                  </div>
                </div>

                {/* Soft gradient at bottom (always visible) */}
                <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </motion.div>
            ))}

          </div>
        </motion.section>

        {/* CONTACT / CTA ANCHOR */}
        <div id="contact" />

        {/* Keep original CTA and Footer as requested */}
        <div>
          <CTA />
        </div>
      </main>
      <div>
        <Footer />
      </div>
      <div className="relative z-30">
        <ScrollToTopButton />
      </div>
    </div>
  );
}