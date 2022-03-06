import { NextSeo } from 'next-seo';

import { ToastProvider } from '@/contexts';
import { useToast } from '@/hooks';
import type { NextPageWithLayout } from '@/types';

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomAction = () => {
  const actions = [
    'Saved',
    'Added to cart',
    'In cart',
    'User removed',
    'Timer set',
    'Added to Favorites',
    'Multi-Line Support 👍',
    'This is just really long and completely  ',
  ];
  return actions[getRandomInt(0, actions.length - 1)];
};

const Toast: NextPageWithLayout = () => {
  const onToast = useToast();

  return (
    <main className="flex h-screen items-center justify-center">
      <button
        className="bg-gray-300 p-2 px-4 text-2xl dark:bg-gray-600 dark:text-gray-50"
        type="button"
        onClick={() => {
          onToast(getRandomAction());
        }}
      >
        Toast
      </button>
    </main>
  );
};

Toast.getLayout = (page) => (
  <ToastProvider>
    <NextSeo title="Toast" />
    {page}
  </ToastProvider>
);

export default Toast;
