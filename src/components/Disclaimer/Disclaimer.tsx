import React from "react";

export const Disclaimer: React.FC = () => (
  <footer>
    <b>PS</b>: This website is under continuous development and experiments, and
    currently running on <i>Deno</i>, and{" "}
    <i>React {React.version}</i>. For more details, check the{" "}
    <a
      href="https://github.com/hossam-magdy/hossammagdy.dev"
      rel="noopener"
      target="_blank"
    >
      source code
    </a>.
  </footer>
);
