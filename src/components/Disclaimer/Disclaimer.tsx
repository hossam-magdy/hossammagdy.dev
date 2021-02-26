import { React } from "../../../deps_client.ts";

export const Disclaimer = () => (<footer>
  <b>PS</b>: This website is under continuous development and experiments, and
  currently running on <i>Deno 🦕</i>,{"  "}
  <i>React⚛️ ${React.version}</i>. For more details, check the{" "}
  <a
    href="https://github.com/hossam-magdy/hossammagdy.dev"
    rel="noopener"
    target="_blank"
  >
    source code
  </a>.
</footer>);
