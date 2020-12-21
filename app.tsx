import React, { ComponentType } from "https://esm.sh/react";

import { Head } from "https://deno.land/x/aleph/mod.ts";

import GoogleAnalyticsScript from "./components/google-analytics-script.tsx";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <Head>
        <title>Hossam Magdy</title>
        <link rel="icon" href="/favicon.svg" />
        <GoogleAnalyticsScript />
      </Head>
      <Page {...pageProps} />
    </>
  );
}
