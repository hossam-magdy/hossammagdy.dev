import React from "https://esm.sh/react";

import { Head } from "https://deno.land/x/aleph/mod.ts";

import GoogleAnalyticsScript from "./components/google-analytics-script.tsx";

export default function App404() {
  return (
    <>
      <Head>
        <meta http-equiv="refresh" content="0;URL='/'" />
        <GoogleAnalyticsScript />
      </Head>
    </>
  );
}
