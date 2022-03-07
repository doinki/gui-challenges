/* eslint-disable react/no-danger */
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

const dangerouslySetInnerHTML = {
  __html:
    'var e=document.documentElement.classList;(function(e){var a;try{a=window[e];var r="__storage__";return a.setItem(r,r),a.removeItem(r),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==a?.length}})("localStorage")&&"theme"in localStorage?"dark"===localStorage.theme?e.add("dark"):e.remove("dark"):window.matchMedia("(prefers-color-scheme: dark)").matches?e.add("dark"):e.remove("dark");',
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
