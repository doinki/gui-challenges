import { useEffect } from 'react';

import { setTheme } from '@/utils';

const useTheme = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', setTheme);

    return () => {
      mediaQuery.removeEventListener('change', setTheme);
    };
  }, []);
};

export default useTheme;
