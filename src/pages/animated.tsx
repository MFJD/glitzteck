// ProfessionalAnimatedDashboardV5.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ProfessionalAnimatedDashboardV5
 * - Adds click-to-toggle + click-outside + Esc close behavior for the bell dropdown
 * - Smooth enter/exit popover animation (scale + fade + slide)
 * - Works with SVG elements (refs point to SVG nodes)
 *
 * Usage: <ProfessionalAnimatedDashboardV5 className="w-full max-w-[980px] mx-auto" />
 */

export default function ProfessionalAnimatedDashboardV5({ className = "w-full max-w-[980px] mx-auto" }) {
  const primary = "#2c7081";
  const accent = "#8bd3d8";
  const slate = "#0f1724";
  const lightPanel = "#ffffff";
  const subtleStroke = "rgba(44,112,129,0.06)";

  // Layout
  const svgW = 980;
  const svgH = 600;
  const sidebarX = 21   ;
  const sidebarW = 160;
  const topbarX = sidebarX + sidebarW + 16;
  const topbarW = svgW - topbarX - 28;
  const mainX = topbarX;
  const mainY = 100;
  const leftPanelW = 520;
  const rightPanelW = Math.max(220, svgW - mainX - leftPanelW - 64);

  // Dropdown state + refs
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const bellRef = useRef(null);
  const dropdownRef = useRef(null);

  // Animation variants for popover
  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.24, ease: [0.2, 0.9, 0.2, 1] } },
    exit: { opacity: 0, y: -8, scale: 0.96, transition: { duration: 0.18, ease: "easeInOut" } },
  };

  // Close on click outside or Esc
  useEffect(() => {
    function onPointerDown(e) {
      const downTarget = e.target;
      // If dropdown open and click is outside both bell and dropdown, close
      if (isDropdownOpen) {
        const bellNode = bellRef.current;
        const ddNode = dropdownRef.current;
        if (bellNode && ddNode) {
          // contains works for SVG elements
          if (!bellNode.contains(downTarget) && !ddNode.contains(downTarget)) {
            setDropdownOpen(false);
          }
        }
      }
    }

    function onKeyDown(e) {
      if (e.key === "Escape") setDropdownOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isDropdownOpen]);

  // handle keyboard activate on bell (Enter / Space)
  function onBellKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setDropdownOpen((s) => !s);
    }
    if (e.key === "Escape") setDropdownOpen(false);
  }

  // small helper to toggle
  function toggleDropdown() {
    setDropdownOpen((s) => !s);
  }

  // Recent activity placement
  const recentX = leftPanelW + rightPanelW - 280;
  const recentY = 320;

  return (
    <motion.div className={className + " relative"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full h-auto block"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Glitzteck professional dashboard illustration v5"
      >
        <defs>
          <linearGradient id="bgGradV5" x1="0%" x2="100%">
            <stop offset="0%" stopColor={primary} stopOpacity="0.06" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.04" />
          </linearGradient>

          <linearGradient id="panelGradV5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={lightPanel} />
            <stop offset="100%" stopColor="#f7fdfc" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width={svgW} height={svgH} fill="url(#bgGradV5)" />

        {/* LEFT SIDEBAR */}
        <rect x={sidebarX} y={28} width={sidebarW} height={svgH - 56} rx="16" fill={lightPanel} stroke={subtleStroke} />
        {["Overview", "Users", "Services", "Projects", "Settings"].map((label, i) => (
          <g key={label} transform={`translate(${sidebarX + 18}, ${62 + i * 64})`}>
            <circle cx="0" cy="0" r="8" fill={i === 0 ? primary : "rgba(44,112,129,0.12)"} />
            <text x="24" y="6" fontSize="13" fill={i === 0 ? primary : "#556174"} fontWeight={600}>
              {label}
            </text>
          </g>
        ))}

        {/* TOP BAR */}
        <rect x={topbarX} y={28} width={topbarW} height={64} rx="12" fill={lightPanel} stroke="rgba(44,112,129,0.05)" />
        <g transform={`translate(${topbarX + 18}, ${58})`}>
          <circle cx="0" cy="0" r="6" fill={primary} />
          <text x="14" y="6" fontSize="15" fill={slate} fontWeight={700}>
            Glitzteck — Live Overview
          </text>
        </g>

        {/* Bell icon (click to toggle). keep ref on group */}
        <g
          ref={bellRef}
          transform={`translate(${topbarX + topbarW - 80}, ${44})`}
          role="button"
          tabIndex={0}
          aria-haspopup="dialog"
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
          onKeyDown={onBellKeyDown}
          style={{ cursor: "pointer" }}
        >
          <motion.path
            d="M10 2c-3 0-5 2.5-5 5.5V12l-2.2 2.2A1 1 0 003 16h14a1 1 0 00.9-1.6L16 12V7.5C16 4.5 14 2 11 2h-1z"
            fill={primary}
            initial={{ y: -1 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="26" cy="-2" r="4" fill="#ef4444" />
        </g>

        {/* MAIN GRID (unchanged, omitted below for brevity) */}
        {/* ... (left panel, right panel, recent activity, overview notes) */}
        {/* We'll include the exact same content as your previous component to keep layout stable. */}

        {/* LEFT PANEL */}
        <g transform={`translate(${mainX}, ${mainY})`}>
          <g transform="translate(-2,0)">
            <rect x="0" y="0" width={leftPanelW} height="300" rx="14" fill="url(#panelGradV5)" stroke="rgba(44,112,129,0.04)" />
            <text x="20" y="28" fontSize="15" fontWeight="700" fill={slate}>
              Traffic & Activity
            </text>

            <g transform="translate(20,46)">
              {[
                { label: "Active Users", value: "12,482" },
                { label: "Errors / min", value: "1.2" },
                { label: "Avg Latency", value: "86ms" },
              ].map((k, idx) => (
                <g key={k.label} transform={`translate(${idx * 168},0)`}>
                  <rect x="0" y="0" rx="10" width="160" height="64" fill="#fff" stroke="rgba(15,23,36,0.03)" />
                  <text x="12" y="20" fontSize="12" fill="#64748b">
                    {k.label}
                  </text>
                  <text x="12" y="44" fontSize="18" fontWeight="700" fill={primary}>
                    {k.value}
                  </text>
                </g>
              ))}
            </g>

            <line x1="20" y1="124" x2={leftPanelW - 20} y2="124" stroke="rgba(15,23,36,0.03)" strokeWidth="1" />

            <g transform="translate(24,136)">
              {["Auth", "API", "DB", "UI"].map((label, r) => (
                <text key={label} x="0" y={r * 42 + 18} fontSize="12" fill="#64748b">
                  {label}
                </text>
              ))}

              <g transform="translate(76, -8)">
                {[
                  { pct: 76, color: "#2c7081" },
                  { pct: 58, color: "#195a5f" },
                  { pct: 82, color: "#0b7285" },
                  { pct: 65, color: "#1f7a78" },
                ].map((b, i) => {
                  const width = 360;
                  const percent = b.pct / 100;
                  const xPercentText = Math.max(8, Math.min(width - 44, percent * width - 44));
                  return (
                    <g key={i} transform={`translate(0, ${i * 42})`}>
                      <rect x="0" y="8" width={width} height="28" rx="8" fill="#eef8f9" stroke="rgba(44,112,129,0.03)" />
                      <motion.rect
                        x="0"
                        y="8"
                        height="28"
                        rx="8"
                        width={width}
                        fill={b.color}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: percent }}
                        transformOrigin="left center"
                        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.08 * i }}
                      />
                      <text x={xPercentText} y="28" fontSize="12" fill="#fff" fontWeight="700">
                        {b.pct}%
                      </text>
                    </g>
                  );
                })}
              </g>
            </g>

            <g transform="translate(20,260)">
              <rect x="0" y="0" rx="8" width="120" height="30" fill="#fff" stroke="rgba(15,23,36,0.03)" />
              <text x="12" y="20" fontSize="12" fill="#334155">
                Live traffic
              </text>
            </g>
          </g>

          {/* RIGHT PANEL */}
          <g transform={`translate(${leftPanelW + 15},0)`}>
            <rect x="0" y="0" width={rightPanelW} height="300" rx="14" fill="url(#panelGradV5)" stroke="rgba(44,112,129,0.04)" />
            <text x="16" y="28" fontSize="15" fontWeight="700" fill={slate}>
              Service Throughput
            </text>

            {[{ label: "Requests/min", value: "3.2k", y: 56 }, { label: "Errors/min", value: "1.2", y: 100 }, { label: "Avg Latency", value: "86ms", y: 144 }].map((s) => (
              <g key={s.label} transform={`translate(16, ${s.y})`}>
                <text x="0" y="14" fontSize="12" fill="#64748b">
                  {s.label}
                </text>
                <rect x="110" y="0" rx="8" width={rightPanelW - 140} height="34" fill="#fff" stroke="rgba(15,23,36,0.03)" />
                <text x="118" y="22" fontSize="14" fontWeight="700" fill={primary}>
                  {s.value}
                </text>
              </g>
            ))}

            <g transform={`translate(20, 230)`}>
              <line x1="-6" y1="0" x2={rightPanelW - 40} y2="0" stroke="rgba(15,23,36,0.04)" />
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
                <text key={d} x={i * 24} y="20" fontSize="9" fill="#94a3b8" textAnchor="middle">
                  {d}
                </text>
              ))}

              {[
                { h: 0.6, col: "#2c7081" },
                { h: 0.9, col: "#195a5f" },
                { h: 0.7, col: "#0b7285" },
                { h: 0.8, col: "#1f7a78" },
                { h: 0.66, col: "#2c7081" },
                { h: 0.4, col: "#195a5f" },
                { h: 0.72, col: "#0b7285" },
              ].map((b, idx) => (
                <g key={idx} transform={`translate(${idx * 24},0)`}>
                  <rect x="-6" y="-60" width="12" height="60" rx="4" fill="#eef8f9" />
                  <motion.rect
                    x="-6"
                    y="-60"
                    width="12"
                    height="60"
                    rx="4"
                    fill={b.col}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: b.h }}
                    transformOrigin="bottom center"
                    transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.08 * idx }}
                  />
                </g>
              ))}
            </g>

            <g transform={`translate(16, 260)`}>
              <circle cx="12" cy="12" r="10" fill={primary} />
              <text x="32" y="16" fontSize="12" fill="#334155">
                All systems nominal
              </text>
            </g>
          </g>

          {/* Recent Activity */}
          <g transform={`translate(${Math.max(80, recentX+10)}, ${recentY})`}>
            <rect x="0" y="0" rx="12" width="260" height="140" fill="#fff" stroke="rgba(15,23,36,0.03)" />
            <text x="16" y="24" fontSize="13" fontWeight="700" fill="#334155">
              Recent Activity
            </text>

            {[
              { who: "build@ci", msg: "Pipeline passed in few sec", t: "5m" },
              { who: "alert@monitor", msg: "High memory usage", t: "12m" },
              { who: "alice@client", msg: "New ticket created In less than an hour", t: "1h" },
            ].map((a, i) => (
              <g key={i} transform={`translate(16, ${44 + i * 34})`}>
                <circle cx="0" cy="0" r="6" fill={i === 0 ? primary : accent} />
                <text x="14" y="4" fontSize="12" fill="#334155" fontWeight={600}>
                  {a.who}
                </text>
                <text x="14" y="18" fontSize="11" fill="#64748b">
                  {a.msg} · {a.t}
                </text>
              </g>
            ))}
          </g>

          {/* Overview Notes */}
          <g transform={`translate(0, 320)`}>
            <rect x="0" y="0" rx="12" width="420" height="140" fill="#fff" stroke="rgba(15,23,36,0.03)" />
            <text x="16" y="24" fontSize="13" fontWeight="700" fill="#334155">
              Overview Notes
            </text>
            <text x="16" y="52" fontSize="12" fill="#64748b">
              This area highlights recent deployments, scheduled maintenance and
            </text>
            <text x="16" y="72" fontSize="12" fill="#64748b">
              service health summaries.
            </text>
          </g>
        </g>

        {/* Dropdown rendered last so it sits above all visual elements */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.g
              ref={dropdownRef}
              transform={`translate(${topbarX + topbarW - 74}, ${46})`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              role="dialog"
              aria-label="Notifications dropdown"
            >
              <rect x="-224" y="18" width="220" height="120" rx="10" fill={lightPanel} stroke="rgba(15,23,36,0.04)" />
              <text x="-212" y="36" fontSize="13" fontWeight="700" fill={primary}>
                Notifications
              </text>

              {[
                { from: "alice@client.com", subj: "Deployment succeeded", time: "2m" },
                { from: "ops@glitzteck.com", subj: "New alert: CPU 85%", time: "12m" },
                { from: "pm@client.com", subj: "Feature request", time: "1h" },
              ].map((n, idx) => (
                <g key={idx} transform={`translate(${-212}, ${56 + idx * 28})`}>
                  <text x="0" y="0" fontSize="11" fill="#334155" fontWeight={600}>
                    {n.from}
                  </text>
                  <text x="0" y="14" fontSize="11" fill="#64748b">
                    {n.subj} · {n.time}
                  </text>
                </g>
              ))}
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </motion.div>
  );
}
