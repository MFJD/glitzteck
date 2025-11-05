import React from "react";
import { useTranslation } from "react-i18next";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Address = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full">
      {/* section heading */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-3">
          <p className="text-3xl md:text-4xl font-semibold tracking-[-0.045em] md:mt-0 mt-10 text-slate-900">
            {t("Contact")}
          </p>
          <span className="hidden md:inline-block h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
        </div>

        <p className="mt-4 text-base leading-relaxed text-slate-600 max-w-md">
          {t("contactnh")}
        </p>
      </div>

      {/* contact detail cards */}
      <div className="relative z-10 mt-10 space-y-6 text-[15px] leading-relaxed">
        {/* phone */}
        <div className="flex items-start gap-4 rounded-xl bg-white/70 ring-1 ring-slate-200 backdrop-blur-sm p-4 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-sky-500/20 text-sky-600 ring-1 ring-sky-400/30">
            <PhoneIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-500">
              Phone
            </div>
            <div className="text-base font-medium text-slate-900">
              +1 (347) 341-1589
            </div>
          </div>
        </div>

        {/* address */}
        <div className="flex items-start gap-4 rounded-xl bg-white/70 ring-1 ring-slate-200 backdrop-blur-sm p-4 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400/20 to-fuchsia-500/20 text-violet-600 ring-1 ring-violet-400/30">
            <MapPinIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-500">
              {t("contactaddress")}
            </div>
            <div className="text-base font-medium text-slate-900">
              1117 Marquette Ave
              <br />
              Minneapolis, MN 55403
              <br />
              USA
            </div>
          </div>
        </div>

        {/* email */}
        <div className="flex items-start gap-4 rounded-xl bg-white/70 ring-1 ring-slate-200 backdrop-blur-sm p-4 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-emerald-600 ring-1 ring-emerald-400/30">
            <EnvelopeIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-500">
              {t("contactemail")}
            </div>
            <div className="text-base font-medium text-slate-900 break-all">
              info@glitzteck.com
            </div>
          </div>
        </div>
      </div>

      {/* soft gradient aura behind the info */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18)_0%,rgba(255,255,255,0)_70%)] blur-3xl"
      />
    </section>
  );
};

export default Address;
