import { useEffect } from 'react';

import { setTheme } from '@/utils';

const useTheme = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', setTheme);
    } else {
      mediaQuery.addListener(setTheme);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', setTheme);
      } else {
        mediaQuery.removeListener(setTheme);
      }
    };
  }, []);
};

export default useTheme;
