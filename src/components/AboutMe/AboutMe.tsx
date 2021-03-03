import { React } from "deps_client";

const LINKS = [
  { text: "LinkedIn", href: "https://www.linkedin.com/in/hossammagdy/" },
  { text: "XING", href: "https://www.xing.com/profile/HossamMagdy" },
  { text: "Github", href: "https://github.com/hossam-magdy" },
];

const TECHS = {
  CURRENT: ["TypeScript", "React", "Node.js", "Docker", "Kubernetes"],
  PAST: ["Vue.js", "Scala", "Java", "PHP", "Symfony", "Laravel"],
  INTEREST: ["Deno", "Rust"],
};

export const AboutMe: React.FC<{ name?: string }> = (
  { name = "👋" },
) => (<article>
  <div>Hey{name ? ` ${name}` : ""},</div>
  <div>
    This is{" "}
    <span className="name">Hossam Magdy</span>, a Software Engineer, working on
    Backend and Frontend web development.
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
        <u>Interest</u>: <i>{TECHS.INTEREST.join(", ")}</i>.
      </li>
    </ul>
  </div>
  <div>
    More about me on: {LINKS.map(({ text, href }, i) =>
      <>
        <a href={href} target="_blank" rel="noopener">{text}</a>
        {i < LINKS.length - 1 ? ", " : ""}
      </>
    )}.
  </div>
</article>);
