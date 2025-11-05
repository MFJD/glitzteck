import React from "react";
import { useTranslation } from "react-i18next";

const AboutHeaderSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative text-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* LEFT : TEXT */}
        <div className="max-w-xl">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm px-3 py-[6px] text-[11px] font-medium text-sky-600 ring-1 ring-slate-200">
            <div className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="whitespace-nowrap">
              {t("headerabouttitle")}
            </span>
          </div>

          {/* headline */}
          <h1 className="mt-4 text-[1.8rem] sm:text-[2rem] font-semibold tracking-[-0.045em] leading-[1.2] text-slate-900">
            We design and build digital products that actually get used.
          </h1>

          {/* subtext */}
          <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-600 max-w-md">
            {t("headeraboutparagraph")}
          </p>

          {/* trust row */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5 text-[12px] text-slate-500">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-100 to-cyan-50 text-sky-600 text-[11px] font-semibold ring-1 ring-sky-200/60 flex items-center justify-center">
                5+
              </div>
              <div className="leading-tight">
                <div className="text-slate-900 font-medium text-[13px]">
                  Years in market
                </div>
                <div className="text-[11px] text-slate-500">
                  Shipping, not pitching.
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-slate-300/50" />

            <div className="leading-tight">
              <div className="text-slate-900 font-medium text-[13px]">
                Minneapolis, USA
              </div>
              <div className="text-[11px] text-slate-500">
                Serving global clients
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT : IMAGE MOSAIC */}
        <div className="flex justify-center lg:justify-end">
          <div className="grid grid-cols-3 gap-3 max-w-sm">
            {/* column 1 */}
            <div className="col-span-1 flex flex-col gap-3">
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
                  alt="Team session"
                  className="h-36 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=600&q=80"
                  alt="Planning board"
                  className="h-36 w-full object-cover"
                />
              </div>
            </div>

            {/* column 2-3 */}
            <div className="col-span-2 flex flex-col gap-3">
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?auto=format&fit=crop&w=800&q=80"
                  alt="Collaboration"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1670272504528-790c24957dda?auto=format&fit=crop&w=800&q=80"
                  alt="Engineering focus"
                  className="h-24 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
    </section>
  );
};

export default AboutHeaderSection;
