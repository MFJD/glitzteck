import React, { useState } from "react";
import { useEmail } from "@/pages/api/email";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { EmailServer, isLoading } = useEmail();

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = await EmailServer({
      email,
      name,
      subject,
      message,
    });

    // if success => wipe fields
    if (ok) {
      setEmail("");
      setName("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section className="relative w-full">
      {/* floating glow behind card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.16)_0%,rgba(255,255,255,0)_70%)] blur-3xl"
      />

      {/* form card */}
      <div className="relative z-10 w-full rounded-2xl bg-white/70 p-6 md:p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 backdrop-blur-md">
        {/* header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold tracking-[-0.04em] text-slate-900">
            {t("Contact")}
          </h2>
          <p className="mt-1 text-sm text-slate-500 leading-relaxed">
            {t("contactnh")}
          </p>
        </div>

        <form onSubmit={handleEmail} className="space-y-5">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700 mb-1">
              {t("contactname")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white/60 px-3 py-2.5 text-[15px] text-slate-800 outline-none placeholder-slate-400 shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition"
              placeholder={t("contactname")}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white/60 px-3 py-2.5 text-[15px] text-slate-800 outline-none placeholder-slate-400 shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition"
              placeholder="Email@gmail.com *"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700 mb-1">
              {t("contactsubject")}
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white/60 px-3 py-2.5 text-[15px] text-slate-800 outline-none placeholder-slate-400 shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition"
              placeholder={t("contactsubject")}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700 mb-1">
              {t("contactmessage")}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full rounded-lg border border-slate-300 bg-white/60 px-3 py-2.5 text-[15px] text-slate-800 outline-none placeholder-slate-400 shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition resize-none"
              placeholder={t("contactmessage")}
            />
          </div>

          {/* Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="
                group
                inline-flex w-full items-center justify-center
                rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400
                px-4 py-2.5 text-[15px] font-semibold text-white
                shadow-[0_18px_40px_rgba(2,132,199,0.45)]
                ring-1 ring-sky-400/50
                transition
                hover:shadow-[0_22px_50px_rgba(2,132,199,0.6)]
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span>{t("contactbuttonsending")}</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>{t("contactbuttonsend")}</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </form>

        {/* trust / note */}
        <p className="mt-4 text-[11px] text-slate-400 leading-relaxed text-center">
          We typically respond within 1-2 business days.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
