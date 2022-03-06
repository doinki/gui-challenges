import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <nav className="flex h-screen items-center justify-center text-3xl">
      <ul className="list-disc">
        <li className="transition-colors hover:text-violet-700 dark:hover:text-violet-200">
          <style jsx>{`
            ::marker {
              color: currentColor;
            }
          `}</style>
          <Link href="/toast">
            <a className="hover:underline">Toast</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
