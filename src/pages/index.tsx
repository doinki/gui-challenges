import Link from 'next/link';
import { NextSeo } from 'next-seo';

import type { NextPageWithLayout } from '@/types';

const Home: NextPageWithLayout = () => {
  return (
    <nav className="flex h-screen items-center justify-center text-3xl">
      <ul className="list-disc">
        <style jsx>{`
          ::marker {
            color: currentColor;
          }
        `}</style>
        <li className="transition-colors hover:text-violet-700 dark:hover:text-violet-200">
          <Link href="/toast">
            <a className="hover:underline">Toast</a>
          </Link>
        </li>
        <li className="transition-colors hover:text-violet-700 dark:hover:text-violet-200">
          <Link href="/theme-switch">
            <a className="hover:underline">Theme Switch</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Home.getLayout = (page) => (
  <>
    <NextSeo title="Home" />
    {page}
  </>
);
export default Home;
