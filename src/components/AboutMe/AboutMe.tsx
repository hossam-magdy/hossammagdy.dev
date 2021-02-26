import { React } from "deps_client";

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

export const AboutMe: React.FC<{ name?: string }> = (
  { name = "👋" },
) => (<article>
  <div>Hello{name ? ` ${name}` : ""},</div>
  <div>
    This is <span className="name">Hossam Magdy</span>.
  </div>
  <div>
    I am a Software Engineer working on both ends, Backend and Frontend.
  </div>
  <div>
    TechStack:
    <ul>
      <li>
        <u>Current</u>: <i>{TECHS.CURRENT.join(", ")}</i>.
      </li>
      <li>
        <u>Previous</u>: <i>{TECHS.PAST.join(", ")}</i>.
      </li>
      <li>
        <u>Interest</u>: <i>{TECHS.FUTURE.join(", ")}</i>.
      </li>
    </ul>
  </div>
  <div>
    Find me on: {LINKS.map(({ text, href }, i) =>
      <>
        <a href={href} target="_blank" rel="noopener">{text}</a>
        {i < LINKS.length - 1 ? ", " : ""}
      </>
    )}.
  </div>
</article>);
