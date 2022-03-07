import '@/styles/global.css';

import { DefaultSeo } from 'next-seo';

import { useTheme } from '@/hooks';
import type { AppPropsWithLayout } from '@/types';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  useTheme();

  return (
    <>
      <DefaultSeo
        defaultTitle="GUI Challenges"
        description="https://github.com/doinki/gui-challenges"
        titleTemplate="%s - GUI Challenges"
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
