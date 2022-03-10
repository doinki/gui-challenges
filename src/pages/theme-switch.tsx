import { NextSeo } from 'next-seo';
import { useCallback } from 'react';

import type { NextPageWithLayout } from '@/types';

const ThemeSwitch: NextPageWithLayout = () => {
  const onClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      const isDark = document.documentElement.classList.toggle('dark');
      const theme = isDark ? 'dark' : 'light';

      localStorage.theme = theme;
      e.currentTarget.ariaLabel = theme;
    },
    []
  );

  return (
    <main className="flex h-screen items-center justify-center">
      <button
        aria-label="light"
        aria-live="polite"
        className="webkit-tap-highlight-transparent h-16 w-16 touch-manipulation rounded-full border-0 text-gray-600 outline-offset-4 hover:text-gray-900 focus-visible:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 dark:focus-visible:text-gray-300"
        title="Toggles light & dark"
        type="button"
        onClick={onClick}
      >
        <svg
          aria-hidden="true"
          className="select-none"
          focusable="false"
          strokeLinecap="round"
          viewBox="0 0 24 24"
        >
          <mask className="origin-center" id="moon-mask">
            <rect fill="white" height="100%" width="100%" x="0" y="0" />
            <circle
              className="motion-safe:transition-transform motion-safe:duration-[250ms] motion-safe:ease-[cubic-bezier(0,0,0,1)] dark:-translate-x-[7px] motion-safe:dark:delay-[250ms] motion-safe:dark:duration-500"
              cx="24"
              cy="10"
              fill="black"
              r="6"
            />
          </mask>
          <circle
            className="origin-center motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(.5,1.25,.75,1.25)] dark:scale-[1.75] motion-safe:dark:duration-[250ms] motion-safe:dark:ease-[cubic-bezier(.25,0,.3,1)]"
            cx="12"
            cy="12"
            fill="currentColor"
            mask="url(#moon-mask)"
            r="6"
          />
          <g
            className="origin-center motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-[cubic-bezier(.25,0,.3,1),cubic-bezier(.5,1.5,.75,1.25)] dark:opacity-0 motion-safe:dark:-rotate-[25deg] motion-safe:dark:duration-150"
            stroke="currentColor"
            strokeWidth="2px"
          >
            <line x1="12" x2="12" y1="1" y2="3" />
            <line x1="12" x2="12" y1="21" y2="23" />
            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
            <line x1="1" x2="3" y1="12" y2="12" />
            <line x1="21" x2="23" y1="12" y2="12" />
            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
          </g>
        </svg>
      </button>
    </main>
  );
};

ThemeSwitch.getLayout = (page) => (
  <>
    <NextSeo title="Theme Switch" />
    {page}
  </>
);
export default ThemeSwitch;
