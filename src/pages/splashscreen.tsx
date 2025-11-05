import React, { useEffect } from "react";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  // optional auto-close; remove if parent handles it
  useEffect(() => {
    const t = setTimeout(() => {
      finishLoading();
    }, 1800);
    return () => clearTimeout(t);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-gray-50 text-slate-900">
      {/* subtle brand glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
      </div>

      {/* soft accents */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.12)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.12)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />

      {/*
        Center group:
        We avoid flexbox vertical centering entirely.
        We lock this box to exact center using translate(-50%, -50%).
      */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {/* Animated inner group */}
        <div className="flex flex-col items-center animate-enterSplash">
          {/* Logo tile */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-slate-200 backdrop-blur-md shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <img
              src="/icons/favicon.png"
              alt="logo"
              className="h-8 w-8 object-contain"
            />
          </div>

          {/* Text / tagline */}
          <div className="mt-1 flex flex-col items-center text-center">
            <div className="text-lg font-semibold tracking-[-0.04em] text-slate-900">
              Glitzteck LLC
            </div>
          </div>

          {/* Progress area */}
          <div className="mt-2 w-44">
            {/* TRACK */}
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-200 ring-1 ring-slate-300/60">
              {/* FILLED BAR */}
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-300 shadow-[0_0_24px_4px_rgba(56,189,248,0.45)] animate-barPulse" />

              {/* SOFT HIGHLIGHT SWEEP */}
              <div className="pointer-events-none absolute top-0 h-full w-1/3 min-w-[40px] rounded-full bg-white/40 blur-[6px] opacity-60 animate-barSweep" />
            </div>

            {/* loading label */}
            <div className="mt-1 flex flex-col items-center text-[10px] font-medium tracking-wide text-slate-500">
              <div className="flex items-center">
                <span>Loading</span>
                <span className="inline-flex w-[18px] justify-start pl-1">
                  <span className="dot dot-1 small" />
                  <span className="dot dot-2 small" />
                  <span className="dot dot-3 small" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* version stamp */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center text-[10px] font-normal text-slate-400">
        v1.0.0
      </div>

      {/* keyframes / extra styling */}
      <style jsx>{`
        /* entrance: ONLY fade + translateY.
           (no scale, scale is what can cause slight subpixel drift on iOS) */
        @keyframes enterSplash {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        .animate-enterSplash {
          animation: enterSplash 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* bar subtle breathing glow */
        @keyframes barPulse {
          0% {
            filter: brightness(1) drop-shadow(0 0 8px rgba(56, 189, 248, 0.4));
          }
          50% {
            filter: brightness(1.35)
              drop-shadow(0 0 16px rgba(56, 189, 248, 0.7));
          }
          100% {
            filter: brightness(1) drop-shadow(0 0 8px rgba(56, 189, 248, 0.4));
          }
        }

        .animate-barPulse {
          animation: barPulse 2s ease-in-out infinite;
        }

        /* bar highlight sweep */
        @keyframes barSweep {
          0% {
            transform: translateX(-60%);
          }
          100% {
            transform: translateX(260%);
          }
        }

        .animate-barSweep {
          animation: barSweep 1.8s linear infinite;
        }

        /* dots typing animation */
        @keyframes dotBlink {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .dot {
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background-color: rgb(100 116 139 / 1); /* slate-500 */
          margin-right: 2px;
        }

        .dot.small {
          width: 3px;
          height: 3px;
          background-color: rgb(100 116 139 / 1);
        }

        .dot-1 {
          animation: dotBlink 1.4s infinite;
          animation-delay: 0s;
        }
        .dot-2 {
          animation: dotBlink 1.4s infinite;
          animation-delay: 0.2s;
        }
        .dot-3 {
          animation: dotBlink 1.4s infinite;
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
