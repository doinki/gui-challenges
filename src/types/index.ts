import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

// Next
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

// Toast
export interface Toast {
  id: number;
  text: string;
}
export type ToastCloseHandler = (id: Toast['id']) => void;
export type ToastHandler = (text: Toast['text']) => void;
