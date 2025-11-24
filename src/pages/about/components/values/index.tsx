import React from "react";
import { useTranslation } from "react-i18next";

const ValuesAbout = () => {
  const { t } = useTranslation();

  const values = [
    { name: t("about_values_name1"), description: t("about_values_description1") },
    { name: t("about_values_name2"), description: t("about_values_description2") },
    { name: t("about_values_name3"), description: t("about_values_description3") },
    { name: t("about_values_name4"), description: t("about_values_description4") },
    { name: t("about_values_name5"), description: t("about_values_description5") },
    { name: t("about_values_name6"), description: t("about_values_description6") },
  ];

  return (
    <section className="text-slate-900 relative">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl">
          {/* Header */}
          <div className="w-full">
            <h2 className="text-[1.5rem] sm:text-[1.7rem] font-semibold tracking-[-0.04em] text-slate-900 leading-[1.25]">
              {t("about_values_title")}
            </h2>

            {/* Paragraph */}
            <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-600 max-w-6xl">
              {t("about_values_paragraph")}
            </p>
          </div>

          {/* Values grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {values.map((item) => (
              <div key={item.name} className="max-w-sm">
                <div className="text-[0.9rem] font-semibold text-slate-900 tracking-[-0.03em]">
                  {item.name}
                </div>
                <div className="mt-2 text-[0.85rem] leading-relaxed text-slate-600">
                  {item.description}
                </div>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ValuesAbout;
