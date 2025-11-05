import React from "react";
import { useTranslation } from "react-i18next";

const ValuesAbout = () => {
  const { t } = useTranslation();

  const values = [
    { name: t("valuesname1"), description: t("valuesdescription1") },
    { name: t("valuesname2"), description: t("valuesdescription2") },
    { name: t("valuesname3"), description: t("valuesdescription3") },
    { name: t("valuesname4"), description: t("valuesdescription4") },
    { name: t("valuesname5"), description: t("valuesdescription5") },
    { name: t("valuesname6"), description: t("valuesdescription6") },
  ];

  return (
    <section className="text-slate-900 relative">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl">
          {/* Header */}
          <div className="w-full">
            <h2 className="text-[1.5rem] sm:text-[1.7rem] font-semibold tracking-[-0.04em] text-slate-900 leading-[1.25]">
              {t("valuestitle")}
            </h2>

            {/* Paragraph full width */}
            <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-600 max-w-6xl">
              {t("valuesparagraph")}
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
