// AnimatedDiagram.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Copy this component into your project and render <AnimatedDiagram />
 * It uses framer-motion to animate SVG elements:
 * - paths draw themselves
 * - nodes float/shake and pulse
 * - connector dots travel along paths to imply active data flow
 *
 * Primary color used: #2c7081
 */

export default function AnimatedDiagram({ className = "w-full max-w-[640px] mx-auto" }) {
  const primary = "#2c7081";
  const accent = "#8bd3d8";

  // common path draw animation (from 0 -> 1 pathLength)
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 1) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.1 * i, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] },
        opacity: { delay: 0.05 * i, duration: 0.6 },
      },
    }),
  };

  // gentle float/hover for nodes
  const float = {
    animate: {
      y: [0, -8, 0, 6, 0],
      rotate: [0, 1.2, 0, -0.8, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // subtle shake used during hover / to give 'active' feeling
  const microShake = {
    animate: {
      x: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
    },
  };

  // small dot that moves along a path using pathLength (framer-motion supports offset via pathLength)
  const movingDot = {
    animate: {
      offsetDistance: ["0%", "100%"],
      transition: { duration: 3.4, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <motion.div
      className={className + " relative"}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      style={{ willChange: "transform, opacity" }}
    >
      <svg
        viewBox="0 0 900 640"
        className="w-full h-auto block"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Glitzteck animated diagram"
      >
        <defs>
          <linearGradient id="gradPrimary" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={primary} stopOpacity="1" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.95" />
          </linearGradient>

          <radialGradient id="nodeGlow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor={primary} stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <filter id="softBlur">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feBlend in="SourceGraphic" in2="b" />
          </filter>
        </defs>

        {/* Background soft panel */}
        <rect x="40" y="20" rx="18" width="820" height="560" fill="url(#gradPrimary)" opacity="0.07" />

        {/* Main device / panel */}
        <g transform="translate(80,60)">
          <rect x="240" y="40" rx="18" width="420" height="260" fill="#fff" opacity="0.98" stroke="rgba(44,112,129,0.06)" />
          <rect x="260" y="68" width="380" height="36" rx="9" fill="#f6fafb" />
        </g>

        {/* --- Network/diagram layer --- */}
        <g transform="translate(60,160)">
          {/* Connector paths (curved lines describing flows) */}
          <motion.path
            d="M20 40 C120 0, 260 120, 380 80 C480 45, 560 120, 680 40"
            fill="none"
            stroke={primary}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.18"
            variants={draw}
            custom={1}
            initial="hidden"
            animate="visible"
          />

          <motion.path
            d="M60 170 C170 120, 300 230, 420 190 C520 162, 600 210, 720 150"
            fill="none"
            stroke={primary}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.12"
            variants={draw}
            custom={2}
            initial="hidden"
            animate="visible"
          />

          {/* Decorative dashed backbone (gives sense of lanes) */}
          <motion.path
            d="M10 260 C140 210, 320 310, 470 260 C620 215, 750 295, 820 260"
            fill="none"
            stroke={primary}
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="6 8"
            strokeOpacity="0.08"
            variants={draw}
            custom={3}
            initial="hidden"
            animate="visible"
          />

          {/* Moving pulse/dot on top path (gives active flow) */}
          <motion.circle
            r="6"
            fill={accent}
            style={{ offsetDistance: "0%" }}
            // frame-motion supports `offsetDistance` with CSS Motion Path. Use animate to move along path via path() trick below.
            // We'll use <use> with pathLength trick below instead (see anchored circle with strokeDashoffset approach).
            className="motion-dot"
            // small pulse
            animate={{ scale: [0.9, 1.15, 0.95], opacity: [0.85, 1, 0.9] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            cx="120"
            cy="40"
            transform="translate(0,-10)"
            opacity="0.98"
          />

          {/* Nodes (systems/services) - they float and slightly shake */}
          <motion.g variants={float} animate="animate">
            {/* Node A */}
            <motion.g whileHover={microShake.animate as any}>
              <circle cx="40" cy="40" r="22" fill={primary} opacity="0.98" />
              <circle cx="40" cy="40" r="36" fill="url(#nodeGlow)" opacity="0.28" />
              <text x="40" y="46" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="700">API</text>
            </motion.g>

            {/* Node B */}
            <motion.g whileHover={microShake.animate as any} transform="translate(240,20)">
              <circle cx="40" cy="40" r="22" fill="#195a5f" />
              <circle cx="40" cy="40" r="36" fill="url(#nodeGlow)" opacity="0.18" />
              <text x="40" y="46" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="700">DB</text>
            </motion.g>

            {/* Node C */}
            <motion.g whileHover={microShake.animate as any} transform="translate(480,-10)">
              <circle cx="40" cy="40" r="26" fill={primary} />
              <circle cx="40" cy="40" r="48" fill="url(#nodeGlow)" opacity="0.14" />
              <text x="40" y="46" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="700">AI</text>
            </motion.g>

            {/* Node D */}
            <motion.g whileHover={microShake.animate as any} transform="translate(680,40)">
              <circle cx="40" cy="40" r="20" fill="#1f7a78" />
              <circle cx="40" cy="40" r="34" fill="url(#nodeGlow)" opacity="0.12" />
              <text x="40" y="46" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">UI</text>
            </motion.g>
          </motion.g>

          {/* Animated connectors drawn on top with little moving particles */}
          {/* Using small moving circles that animate along approximate coordinates to simulate data moving */}
          <motion.circle
            r="5"
            fill="#fff"
            stroke={primary}
            strokeWidth="1"
            initial={{ cx: 40, cy: 40, opacity: 0.9 }}
            animate={{
              cx: [40, 140, 260, 390, 520, 640, 740],
              cy: [40, 28, 60, 42, 56, 48, 60],
              opacity: [0.85, 0.95, 0.7, 0.95, 0.8, 0.95, 0.85],
            }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
          />

          <motion.circle
            r="4"
            fill={accent}
            initial={{ cx: 660, cy: 62, opacity: 0.9 }}
            animate={{
              cx: [640, 560, 430, 320, 220, 120, 40],
              cy: [62, 52, 70, 58, 64, 46, 40],
              opacity: [0.85, 0.7, 0.9, 0.7, 0.95, 0.9, 0.85],
            }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "linear", delay: 0.4 }}
          />

          {/* small labels / badges */}
          <g transform="translate(12,320)">
            <rect x="0" y="0" rx="8" width="140" height="38" fill="#fff" opacity="0.98" stroke="rgba(44,112,129,0.06)" />
            <text x="12" y="24" fontSize="12" fill="#2b3940">Realtime sync</text>
          </g>

          <g transform="translate(580,300)">
            <rect x="0" y="0" rx="8" width="160" height="38" fill="#fff" opacity="0.98" stroke="rgba(44,112,129,0.06)" />
            <text x="12" y="24" fontSize="12" fill="#2b3940">Secure pipelines</text>
          </g>
        </g>
      </svg>
    </motion.div>
  );
}
