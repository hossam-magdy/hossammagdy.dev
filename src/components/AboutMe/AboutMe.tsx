import React from "react";
import { LINKS, TECHS } from "config";

// TODO: add duration of using with each technology, and notes (like, using in side projects, etc.)

export const AboutMe: React.FC<{ name?: string }> = (
  { name = "👋" },
) => (
  <article>
    <div>Hey{name ? ` ${name}` : ""},</div>
    <div>
      This is{" "}
      <span className="name">Hossam Magdy</span>, a Software Engineer, working
      on Backend and Frontend web development.
    </div>
    <div>
      TechStack:
      <ul className="techstack">
        {Object.entries(TECHS).map(([label, techs]) => (
          <li className="group" key={label}>
            <span className="label">{label.toLowerCase()}</span>:{" "}
            <span className="items">{techs.join(", ")}</span>.
          </li>
        ))}
      </ul>
    </div>
    <div>
      For more: {LINKS.map(({ text, href }, i) => (
        <>
          <a href={href} target="_blank" rel="noopener">{text}</a>
          {i < LINKS.length - 1 ? ", " : ""}
        </>
      ))}.
    </div>
  </article>
);
