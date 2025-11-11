import React from "react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full flex justify-center px-4 sm:px-6 lg:px-8">
      {/* background subtle brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.16)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
        <div className="absolute right-[20%] top-[20%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.14)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
      </div>

      {/* card */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-white/70 backdrop-blur-xl  border-slate-200 px-6 py-5 sm:px-10 sm:py-5 text-center">
        {/* badge/title row */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm px-3 py-[6px] text-[11px] font-medium text-sky-600 ring-1 ring-slate-200">
          <div className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
          <span className="whitespace-nowrap">{t("jon")}</span>
        </div>

        {/* headline */}
        <h3 className="mt-4 text-[1.4rem] sm:text-[1.6rem] font-semibold tracking-[-0.045em] leading-[1.2] text-slate-900">
          Stay in the loop.
        </h3>

        {/* subcopy */}
        <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-600 max-w-md mx-auto">
          {t("ctasubscribe")}
        </p>

        {/* form */}
        <div className="mt-8 flex w-full justify-center">
          <form
            className="
              flex w-full max-w-md flex-col items-center gap-3
              sm:flex-row sm:gap-2
            "
          >
            {/* input */}
            <div className="relative w-full">
              <input
                type="email"
                placeholder="info@glitzteck.com"
                className="
                  w-full rounded-full border border-slate-300 bg-white/80
                  px-4 py-3 pr-12 text-[0.9rem] text-slate-700
                  placeholder-slate-400 outline-none
                  focus:border-sky-400 focus:ring-2 focus:ring-sky-200
                  transition
                "
              />
              {/* optional little mail icon-style dot */}
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
            </div>

            {/* button */}
            <button
              type="submit"
              className="
                inline-flex items-center justify-center
                rounded-full bg-gradient-to-r from-sky-500 to-cyan-400
                px-5 py-3 text-[0.9rem] font-medium text-white
                ring-1 ring-sky-400/40
                hover:opacity-95 active:opacity-90
                transition
                w-full sm:w-auto
                shadow-[0_20px_40px_rgba(2,132,199,0.35)]
              "
            >
              <span className="flex items-center gap-2">
                <span>{t("subscribe")}</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </form>
        </div>

        {/* reassurance / privacy line */}
        <p className="mt-4 text-[11px] text-slate-400 leading-relaxed">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default CTA;
