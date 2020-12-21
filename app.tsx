import React, { ComponentType } from "https://esm.sh/react";

import { Head, Scripts } from "https://deno.land/x/aleph/mod.ts";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <Head>
        <title>Hossam Magdy</title>
        <link rel="icon" href="/favicon.svg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-6009068-7" />
        <script>
          {`window.dataLayer = window.dataLayer || [];`}
          {`function gtag(){dataLayer.push(arguments);}`}
          {`gtag('js', new Date());`}
          {`gtag('config', 'UA-6009068-7');`}
        </script>
      </Head>
      <Page {...pageProps} />
    </>
  );
}
