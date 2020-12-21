import React from "https://esm.sh/react";

import { Import } from "https://deno.land/x/aleph/mod.ts";

import Disclaimer from "../components/disclaimer.tsx";

const LINKS = [
  { text: "Github", href: "https://github.com/hossam-magdy" },
  { text: "LinkedIn", href: "https://www.linkedin.com/in/hossammagdy/" },
  { text: "Xing", href: "https://www.xing.com/profile/HossamMagdy" },
];

const TECHS = {
  CURRENT: ["TypeScript", "React", "Node.js", "Docker", "Kubernetes"],
  PAST: ["Vue.js", "Scala", "PHP", "Symfony", "Laravel"],
  FUTURE: ["Deno", "Rust"],
};

export default function Home(props: { name?: string }) {
  return (<>
    {/* CSS could also be imported globally, in `app.tsx` */}
    <Import from="../style/index.less" />
    <article>
      <div>Hello 👋,</div>
      <div>This is <span className="name">Hossam Magdy</span>.</div>
      <div>
        I am a Software Engineer working on both ends, Backend and Frontend.
      </div>
      <div>
        TechStack:
        <ul>
          <li><u>Current</u>: <i>{TECHS.CURRENT.join(", ")}</i>.</li>
          <li><u>Previous</u>: <i>{TECHS.PAST.join(", ")}</i>.</li>
          <li><u>Interest</u>: <i>{TECHS.FUTURE.join(", ")}</i>.</li>
        </ul>
      </div>
      <div>
        Find me on: {LINKS.map(({ text, href }, i) =>
          <span key={text}>
            <a href={href} target="_blank" rel="external" key={text}>{text}</a>
            {i < LINKS.length - 1 ? ", " : ""}
          </span>
        )}.
      </div>
    </article>
    <Disclaimer />
  </>);
}
