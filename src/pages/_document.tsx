/* eslint-disable react/no-danger */
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

const dangerouslySetInnerHTML = {
  __html:
    'var e=function(){try{return localStorage&&localStorage.theme}catch(e){return!1}}(),r=document.documentElement.classList;e?"dark"===e?r.add("dark"):r.remove("dark"):matchMedia("(prefers-color-scheme: dark)").matches?r.add("dark"):r.remove("dark");',
};

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/favicon.ico" rel="icon" />
          <script dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
        </Head>
        <body className="bg-white text-black dark:bg-neutral-900 dark:text-neutral-50">
          <Main />
          <div id="__portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
