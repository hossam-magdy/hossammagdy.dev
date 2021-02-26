import { React } from "../../../deps_client.ts";

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

export const App = (props: { name?: string }) => (<pre>
  <h3>Hello{props.name},</h3>
  <h3>This is Hossam Magdy.</h3>
  <h3>I am a Software Engineer working on both ends, Backend and Frontend.</h3>
  <h3>
    Technologies:
    <ul>
      <li>Currently using: <i>{TECHS.CURRENT.join(", ")}</i>.</li>
      <li>Previously used: <i>{TECHS.PAST.join(", ")}</i>.</li>
      <li>Would like to use: <i>{TECHS.FUTURE.join(", ")}</i>.</li>
    </ul>
  </h3>
  <h3>
    Find me on: {LINKS.map(({ text, href }, i) =>
      <><a href={href}>{text}</a>{i < LINKS.length - 1 ? ", " : ""}</>
    )}.
  </h3>
</pre>);
