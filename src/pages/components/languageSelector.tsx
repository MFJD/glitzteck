import { useEffect, useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const LANG_OPTIONS = [
  { code: "en", flag: "🇺🇸", label: "English", short: "EN" },
  { code: "fr", flag: "🇫🇷", label: "Français", short: "FR" },
  { code: "de", flag: "🇩🇪", label: "Deutsch", short: "DE" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const router = useRouter();

  // shared current lang state
  const [current, setCurrent] = useState(LANG_OPTIONS[0]);

  // mobile-only state
  const [mobileOpen, setMobileOpen] = useState(false);

  // sync initial
  useEffect(() => {
    const storedLang =
      typeof window !== "undefined"
        ? localStorage.getItem("i18nextLng")
        : null;

    const found =
      LANG_OPTIONS.find((opt) => opt.code === storedLang) ||
      LANG_OPTIONS.find((opt) => opt.code === i18n.language) ||
      LANG_OPTIONS[0];

    setCurrent(found);
  }, [i18n.language]);

  const applyLanguage = (opt: (typeof LANG_OPTIONS)[number]) => {
    i18n.changeLanguage(opt.code);
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", opt.code);
    }
    router.push(router.asPath, router.asPath, { locale: opt.code });
    setCurrent(opt);
  };

  // styles shared by buttons
  const triggerClasses = `
    inline-flex items-center gap-2
    rounded-xl border border-gray-200/70 bg-white/80 px-2.5 py-2
    text-[13px] font-medium text-gray-700
    shadow-sm backdrop-blur-sm
    ring-offset-white transition
    hover:bg-white hover:text-gray-900 hover:shadow-md
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c7081]/40
    h-9
  `;

  // DESKTOP VERSION (md and up): use Headless UI Menu, dropdown goes down
  const DesktopSelector = (
    <Menu as="div" className="relative hidden md:inline-block text-left">
      <Menu.Button className={triggerClasses}>
        <span className="text-base leading-none">{current.flag}</span>
        <span className="leading-none">{current.short}</span>
        <span className="text-gray-400 leading-none text-[16px]">
          <i className="ri-arrow-down-s-line" />
        </span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 translate-y-1 scale-95"
        enterTo="opacity-100 translate-y-0 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0 scale-100"
        leaveTo="opacity-0 translate-y-1 scale-95"
      >
        <Menu.Items
          className={`
            absolute right-0 top-full z-[200] mt-2 w-44
            rounded-xl border border-gray-200/70 bg-white/90
            shadow-[0_28px_80px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
            ring-1 ring-black/5 focus:outline-none
            p-2
          `}
        >
          <div className="flex flex-col">
            {LANG_OPTIONS.map((opt) => {
              const active = opt.code === current.code;
              return (
                <Menu.Item key={opt.code}>
                  {({ close }) => (
                    <button
                      onClick={() => {
                        applyLanguage(opt);
                        close();
                      }}
                      className={`
                        flex w-full items-center justify-between
                        rounded-lg px-3 py-2 text-left
                        text-[14px] font-medium
                        transition
                        ${
                          active
                            ? "text-[#2c7081] bg-white ring-1 ring-[#2c7081]/30 shadow-[0_8px_24px_rgba(44,112,129,0.18)]"
                            : "text-gray-700 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-gray-200/70"
                        }
                      `}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-lg leading-none">
                          {opt.flag}
                        </span>
                        <span className="flex flex-col leading-tight text-left">
                          <span className="font-semibold">{opt.label}</span>
                          <span className="text-[11px] text-gray-400 -mt-[1px]">
                            {opt.short}
                          </span>
                        </span>
                      </span>

                      {active && (
                        <span className="text-[#2c7081] text-lg leading-none">
                          <i className="ri-check-line" />
                        </span>
                      )}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );

  // MOBILE VERSION (<md): custom drop-UP with absolute panel ABOVE the trigger button
  // - we control open/close manually with mobileOpen state
  // - we place the dropdown with bottom-full so it appears UP
  const MobileSelector = (
    <div className="relative inline-block md:hidden">
      {/* trigger */}
      <button
        type="button"
        className={triggerClasses}
        onClick={(e) => {
          // VERY IMPORTANT: don't let this click bubble to Disclosure and close the whole hamburger
          e.stopPropagation();
          setMobileOpen((prev) => !prev);
        }}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="leading-none">{current.short}</span>
        <span className="text-gray-400 leading-none text-[16px]">
          <i className={`ri-arrow-${mobileOpen ? 'up' : 'down'}-s-line`} />
        </span>
      </button>

      {mobileOpen && (
        <div
          className={`
            absolute bottom-full mb-2 left-0 z-[9999] w-44
            rounded-xl border border-gray-200/70 bg-white/90
            shadow-[0_28px_80px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
            ring-1 ring-black/5
            p-2
            animate-langPopUp
          `}
          // stop clicks so burger menu doesn't close
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col">
            {LANG_OPTIONS.map((opt) => {
              const active = opt.code === current.code;
              return (
                <button
                  key={opt.code}
                  onClick={(e) => {
                    e.stopPropagation();
                    applyLanguage(opt);
                    setMobileOpen(false);
                  }}
                  className={`
                    flex w-full items-center justify-between
                    rounded-lg px-3 py-2 text-left
                    text-[14px] font-medium
                    transition
                    ${
                      active
                        ? "text-[#2c7081] bg-white ring-1 ring-[#2c7081]/30 shadow-[0_8px_24px_rgba(44,112,129,0.18)]"
                        : "text-gray-700 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-gray-200/70"
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg leading-none">{opt.flag}</span>
                    <span className="flex flex-col leading-tight text-left">
                      <span className="font-semibold">{opt.label}</span>
                      <span className="text-[11px] text-gray-400 -mt-[1px]">
                        {opt.short}
                      </span>
                    </span>
                  </span>

                  {active && (
                    <span className="text-[#2c7081] text-lg leading-none">
                      <i className="ri-check-line" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {DesktopSelector}
      {MobileSelector}

      {/* keyframes for that little pop-up motion */}
      <style jsx global>{`
        @keyframes langPopUpKey {
          0% {
            opacity: 0;
            transform: translateY(6px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-langPopUp {
          animation: langPopUpKey 0.16s ease-out forwards;
          transform-origin: bottom left;
        }
      `}</style>
    </>
  );
}
