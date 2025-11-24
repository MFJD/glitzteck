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
              {t("about_header_badge")}
            </span>
          </div>
          {/* headline */}
          <h1 className="mt-4 text-[1.8rem] sm:text-[2rem] font-semibold tracking-[-0.045em] leading-[1.2] text-slate-900">
            {t("about_header_headline")}
          </h1>

          {/* subtext */}
          <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-600 max-w-md">
            {t("about_header_paragraph")}
          </p>

          {/* trust row */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5 text-[12px] text-slate-500">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-100 to-cyan-50 text-sky-600 text-[11px] font-semibold ring-1 ring-sky-200/60 flex items-center justify-center">
                {t("about_header_years_count")}
              </div>
              <div className="leading-tight">
                <div className="text-slate-900 font-medium text-[13px]">
                  {t("about_header_years_label")}
                </div>
                <div className="text-[11px] text-slate-500">
                  {t("about_header_years_sub")}
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-slate-300/50" />

            <div className="leading-tight">
              <div className="text-slate-900 font-medium text-[13px]">
                {t("about_header_location")}
              </div>
              <div className="text-[11px] text-slate-500">
                {t("about_header_location_sub")}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT : IMAGE MOSAIC */}
        <div className="flex justify-center -mt-10 lg:justify-end">
          <div className="">
            <img src="/images/about_header1.png" className="-mt-5" alt={t("about_header_image_alt")} />
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
    </section>
  );
};

export default AboutHeaderSection;
