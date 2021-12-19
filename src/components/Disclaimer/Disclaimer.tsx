import React from "react";

// variable is globally declared from server
declare const Deno: undefined | {
  version: {
    "deno": string;
    "v8": string;
    "typescript": string;
  };
};

const RunningOnVersions = {
  Deno: Deno?.version?.deno,
  TypeScript: Deno?.version?.typescript,
  React: React.version,
};

export const Disclaimer: React.FC = () => (
  <footer>
    <b>PS</b>: This website is under continuous development and experiments.
    Currently running on:{" "}
    {Object.entries(RunningOnVersions).map(([k, v]) => (
      <i key={k}>
        {k}
        {v ? ` v${v}` : ""}
      </i>
    )).reduce<React.ReactNode[]>(
      (acc, c) => acc.length ? [...acc, ", ", c] : [c],
      [],
    )}
    . For more details, check the{" "}
    <a
      href="https://github.com/hossam-magdy/hossammagdy.dev"
      rel="noopener"
      target="_blank"
    >
      source code
    </a>.
  </footer>
);
