import React, { version as REACT_VERSION } from "https://esm.sh/react";

import { useDeno } from "https://deno.land/x/aleph/mod.ts";
import { version as ALEPH_VERSION } from "https://deno.land/x/aleph/version.ts";

const REPO_URL = "https://github.com/hossam-magdy/hossammagdy.dev";

export default function Disclaimer() {
  const DENO_VERSION = useDeno(() => {
    return Deno.version.deno;
  });

  return (
    <footer>
      <b>PS</b>: This website is under continuous development and experiments,
      and currently running on
      <i> Deno🦕 {DENO_VERSION}</i>, <i> React⚛️ {REACT_VERSION}</i>, and
      <i> aleph△ {ALEPH_VERSION}</i>. For more details, check the{" "}
      <a href={REPO_URL} rel="external" target="_blank">
        source code
      </a>
      .
    </footer>
  );
}
