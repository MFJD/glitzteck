import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  function isValidEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  // auto-dismiss toast after 4s
  useEffect(() => {
    if (!toast) return;
    const tId = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(tId);
  }, [toast]);

  // helper to show toast
  function showToast(text: string, type: "success" | "error" = "success") {
    setToast({ text, type });
  }

  // small utility to trigger CSS shake by toggling a class
  function triggerShake() {
    const el = formRef.current;
    if (!el) return;
    el.classList.remove("shake");
    // force reflow
    void el.offsetWidth;
    el.classList.add("shake");
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email.");
      setStatus("error");
      showToast("Please enter a valid email.", "error");
      triggerShake();
      return;
    }

    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const body = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        const successMsg = body.message || "Subscribed — check your inbox.";
        setMessage(successMsg);
        showToast(successMsg, "success");

        // animate button to "done" briefly
        if (buttonRef.current) {
          buttonRef.current.classList.add("btn-success");
          setTimeout(() => buttonRef.current && buttonRef.current.classList.remove("btn-success"), 1200);
        }

        setEmail("");
      } else {
        const errMsg = body?.error || "Subscription failed. Try again later.";
        setStatus("error");
        setMessage(errMsg);
        showToast(errMsg, "error");
        triggerShake();
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Network error. Try again later.");
      showToast("Network error. Try again later.", "error");
      triggerShake();
    } finally {
      // allow user to try again after a short delay if loading
      if (status === "loading") {
        // no-op (we will update status above)
      }
    }
  }

  return (
    <>
      <style>{`
        /* small local keyframes used by this component */
        @keyframes shakeX {
          0% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
          100% { transform: translateX(0); }
        }
        .shake {
          animation: shakeX 0.55s ease;
        }

        @keyframes toastIn {
          from { transform: translateY(8px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .toast-animate {
          animation: toastIn 240ms ease;
        }

        /* small green pulse to indicate success on the button */
        @keyframes successPop {
          0% { transform: scale(1); }
          40% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        .btn-success {
          box-shadow: 0 10px 30px rgba(16,185,129,0.18) !important;
          animation: successPop 420ms ease;
        }

        /* rotate animation for spinner */
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <section className="relative w-full flex justify-center px-4 sm:px-6 lg:px-8">
        {/* background subtle brand glow (kept same as your original) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.16)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
          <div className="absolute right-[20%] top-[20%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.14)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
        </div>

        <div className="relative w-full max-w-3xl rounded-2xl bg-white/70 backdrop-blur-xl border-slate-200 px-6 py-5 sm:px-10 sm:py-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm px-3 py-[6px] text-[11px] font-medium text-sky-600 ring-1 ring-slate-200">
            <div className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="whitespace-nowrap">{t("jon")}</span>
          </div>

          <h3 className="mt-4 text-[1.4rem] sm:text-[1.6rem] font-semibold tracking-[-0.045em] leading-[1.2] text-slate-900">
            Stay in the loop.
          </h3>

          <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-600 max-w-md mx-auto">{t("ctasubscribe")}</p>

          <div className="mt-8 flex w-full justify-center">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex w-full max-w-md flex-col items-center gap-3 sm:flex-row sm:gap-2"
              aria-live="polite"
            >
              {/* honeypot */}
              <input name="hp_name" type="text" tabIndex={-1} autoComplete="off" className="hidden" style={{ display: "none" }} />

              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="info@glitzteck.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full rounded-full border border-slate-300 bg-white/80 px-4 py-3 pr-12 text-[0.9rem] text-slate-700 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition
                    ${status === "error" ? "border-red-400" : ""}`}
                  required
                  aria-label="Email"
                />
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
              </div>

              <button
                ref={buttonRef}
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-[0.9rem] font-medium text-white ring-1 ring-sky-400/40 hover:opacity-95 active:opacity-90 transition w-full sm:w-auto shadow-[0_20px_40px_rgba(2,132,199,0.35)] disabled:opacity-70 disabled:cursor-wait"
                aria-live="assertive"
                aria-busy={status === "loading"}
              >
                <span className="flex items-center gap-2">
                  {/* loading spinner */}
                  {status === "loading" && (
                    <svg className="h-4 w-4 spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 12a9 9 0 11-18 0" stroke="white" strokeOpacity="0.9" />
                    </svg>
                  )}

                  {/* success check (briefly added via btn-success class but we can also show inline) */}
                  {status === "success" && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 6L9 17l-5-5" stroke="white" />
                    </svg>
                  )}

                  {/* normal subscribe label (hide while loading to keep layout) */}
                  <span className="min-w-[64px] text-center">
                    {status === "loading" ? "Sending…" : t("subscribe")}
                  </span>

                  {/* right-arrow when not loading */}
                  {status !== "loading" && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
            </form>
          </div>

          <p className="mt-4 text-[11px] text-slate-400 leading-relaxed">
            {status === "success" ? message : "No spam. Unsubscribe anytime."}
          </p>
          {status === "error" && <p className="mt-2 text-[12px] text-red-600">{message}</p>}
        </div>
      </section>

      {/* Toasts */}
      <div aria-live="polite" className="fixed right-4 bottom-6 z-50">
        {toast && (
          <div
            role="status"
            className={`toast-animate mb-2 flex max-w-xs items-start gap-3 rounded-lg px-4 py-3 shadow-lg ${
              toast.type === "success" ? "bg-emerald-50 ring-1 ring-emerald-200" : "bg-red-50 ring-1 ring-red-200"
            }`}
          >
            <div className="mt-0.5">
              {toast.type === "success" ? (
                <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-800">{toast.type === "success" ? "Success" : "Error"}</p>
              <p className="mt-0.5 text-[13px] text-slate-600">{toast.text}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="ml-3 rounded-md px-2 py-1 text-sm text-slate-500 hover:text-slate-700 focus:outline-none"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </>
  );
}
