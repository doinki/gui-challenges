import '@/styles/global.css';

import { DefaultSeo } from 'next-seo';

import type { AppPropsWithLayout } from '@/types';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <DefaultSeo />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
