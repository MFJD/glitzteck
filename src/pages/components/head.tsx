import React, { useEffect, useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './languageSelector';

const Head = () => {
  const { t } = useTranslation();
  const { asPath } = useRouter();
  const link = asPath.split('/');

  const [isVisible, setIsVisible] = useState(false);

  // scroll shadow intensifier
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // active route helper
  const isActive = (slug: string | undefined) => {
    if (!slug && (link[1] === undefined || link[1] === '')) return true;
    return link[1] === slug;
  };

  // desktop nav link
  const DesktopNavLink = ({
    href,
    label,
    activeKey,
  }: {
    href: string;
    label: string;
    activeKey: string | undefined;
  }) => {
    const active = isActive(activeKey);

    return (
      <Link href={href} legacyBehavior>
        <a
          className={`
            relative inline-flex items-center px-1 pt-1 text-[16px] transition
            ${
              active
                ? 'primaryText font-bold text-gray-900'
                : 'text-gray-600 hover:text-gray-800'
            }
          `}
        >
          <span className="relative z-[2]">{label}</span>

          {active && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#2c7081]" />
          )}
        </a>
      </Link>
    );
  };

  // mobile nav link
  const MobileNavLink = ({
    href,
    label,
    activeKey,
  }: {
    href: string;
    label: string;
    activeKey: string | undefined;
  }) => {
    const active = isActive(activeKey);

    return (
      <Link href={href} legacyBehavior>
        <a
          className={`
            relative block w-full rounded-xl px-4 py-3 text-[16px] font-medium sm:px-5
            ${
              active
                ? 'text-[#2c7081] font-semibold'
                : 'text-gray-700 hover:bg-white hover:text-gray-900'
            }
          `}
        >
          <span className="relative">{label}</span>
          {active && (
            <span className="absolute left-4 right-auto bottom-1 h-[2px] w-8 rounded-full bg-[#2c7081]" />
          )}
        </a>
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex w-full justify-center px-4 sm:px-6 lg:px-8">
      <Disclosure
        as="nav"
        className={`
          w-full
          max-w-7xl
          mt-3
          rounded-2xl
          border
          backdrop-blur-xl
          transition-all duration-500
          ${
            isVisible
              ? 'border-gray-200/70 bg-white/80 shadow-[0_24px_60px_rgba(0,0,0,0.12)]'
              : 'border-gray-200/50 bg-white/60 shadow-[0_16px_40px_rgba(0,0,0,0.08)]'
          }
        `}
      >
        {({ open }) => (
          <>
            {/* Top bar */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* LEFT: logo */}
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" legacyBehavior>
                    <a className="flex items-center">
                      <img
                        className={`${
                          isVisible
                            ? 'md:h-6 h-8 w-auto'
                            : 'md:h-8 h-8 w-auto'
                        } transition-all duration-300`}
                        src="./images/logos/logoHeader.png"
                        alt="Your Company"
                      />
                    </a>
                  </Link>
                </div>

                {/* CENTER: desktop nav */}
                <div className="hidden md:flex md:items-center">
                  <div className="md:ml-6 md:flex md:space-x-6 lg:space-x-8">
                    <DesktopNavLink
                      href="/"
                      label={t('headhome')}
                      activeKey={undefined}
                    />
                    <DesktopNavLink
                      href="/about"
                      label={t('headabout')}
                      activeKey="about"
                    />
                    <DesktopNavLink
                      href="/services"
                      label={t('headservice')}
                      activeKey="services"
                    />
                    <DesktopNavLink
                      href="/team"
                      label={t('headteam')}
                      activeKey="team"
                    />
                    <DesktopNavLink
                      href="/news"
                      label={t('headnew')}
                      activeKey="news"
                    />
                    <DesktopNavLink
                      href="/contact"
                      label={t('headcontact')}
                      activeKey="contact"
                    />
                  </div>
                </div>

                {/* RIGHT: language + burger (burger only visible on mobile) */}
                <div className="flex items-center">
                  {/* desktop language */}
                  <div className="hidden md:block mr-3">
                    <LanguageSelector />
                  </div>

                  {/* burger mobile on the right */}
                  <div className="flex md:hidden">
                    <DisclosureButton
                      className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/70 bg-white/80 text-gray-600 shadow-sm ring-offset-white transition hover:bg-white hover:text-gray-900 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c7081]/40"
                    >
                      <span className="sr-only">Toggle menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6 text-[#2c7081]" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile panel (collapsible) */}
            <Transition
              show={open}
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-2 scale-[0.98]"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 -translate-y-2 scale-[0.98]"
            >
              <DisclosurePanel
                static={false}
                className="
                  md:hidden
                  px-4 pb-5 pt-3 sm:px-5 sm:pb-6 sm:pt-4
                "
              >
                {/* floating mobile sheet */}
                <div
                  className="
                    rounded-2xl border border-gray-200/70 bg-white/90
                    shadow-[0_32px_80px_rgba(0,0,0,0.18)]
                    backdrop-blur-xl
                    divide-y divide-gray-100/70
                    overflow-hidden
                  "
                >
                  {/* nav list */}
                  <div className="flex flex-col">
                    <MobileNavLink
                      href="/"
                      label={t('headhome')}
                      activeKey={undefined}
                    />
                    <MobileNavLink
                      href="/about"
                      label={t('headabout')}
                      activeKey="about"
                    />
                    <MobileNavLink
                      href="/services"
                      label={t('headservice')}
                      activeKey="services"
                    />
                    <MobileNavLink
                      href="/team"
                      label={t('headteam')}
                      activeKey="team"
                    />
                    <MobileNavLink
                      href="/news"
                      label={t('headnew')}
                      activeKey="news"
                    />
                    <MobileNavLink
                      href="/contact"
                      label={t('headcontact')}
                      activeKey="contact"
                    />
                  </div>

                  {/* language selector mobile */}
                  <div className="bg-white/80 px-4 py-4 sm:px-5">
                    <div className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                      {t('language') || 'Language'}
                    </div>
                    <div className="max-w-[160px]">
                      <LanguageSelector />
                    </div>
                  </div>
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Head;
