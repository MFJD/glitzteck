import React, { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MissionSection: React.FC = () => {
  const { t } = useTranslation();

  interface Stat {
    label: number;
    title: string;
    desc: string;
  }

  const baseStats: Stat[] = [
    { label: 24, title: t("missionProjects"), desc: "Launched successfully" },
    { label: 18, title: t("missionClients"), desc: "Active collaborations" },
    { label: 10, title: t("missionExperts"), desc: "Core engineering team" },
  ];

  const [animatedStats, setAnimatedStats] = useState(
    baseStats.map((s) => ({ ...s, label: 0 }))
  );

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {});

  useEffect(() => {
    let id: ReturnType<typeof setInterval> | null = null;
    if (inView) {
      id = setInterval(() => {
        setAnimatedStats((prev) =>
          prev.map((stat, i) => {
            if (stat.label < baseStats[i].label) {
              return { ...stat, label: stat.label + 1 };
            }
            return stat;
          })
        );
      }, 50);
    } else {
      setAnimatedStats(baseStats.map((s) => ({ ...s, label: 0 })));
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, [inView]);

  return (
    <section ref={ref} className="text-slate-900 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* LEFT TEXT */}
        <div className="max-w-xl -mt-14" >
          <h2 className="text-[1.5rem] sm:text-[1.7rem] font-semibold tracking-[-0.04em] text-slate-900 leading-[1.25]">
            {t("missiontitle")}
          </h2>

          <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-600">
            {t("missionparagraph1")}
          </p>

         {/*  <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-600">
            {t("missionparagraph2")}
          </p>

          <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-600">
            {t("missionparagraph3")}
          </p> */}

          <div className="mt-6 text-[10px] uppercase tracking-wide text-slate-500">
            We focus on outcomes, not slides.
          </div>
        </div>

        {/* RIGHT KPI CARDS */}
        <div className="grid grid-cols-3 gap-3">
          {animatedStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              className="rounded-xl bg-white/60 backdrop-blur-md border border-slate-200 p-4 flex flex-col justify-between"
            >
              <div className="text-[2rem] font-semibold leading-none tracking-[-0.04em] bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                {stat.label}
              </div>

              <div className="mt-3 text-[0.8rem] font-medium text-slate-900 leading-snug">
                {stat.title}
              </div>

              <div className="text-[10px] leading-relaxed text-slate-500 mt-1">
                {stat.desc}
              </div>

              <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* divider */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
    </section>
  );
};

export default MissionSection;
