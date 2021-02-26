import { React } from "../../../deps_client.ts";

import { AboutMe } from "../AboutMe/AboutMe.tsx";
import { Disclaimer } from "../Disclaimer/Disclaimer.tsx";

export const App: React.FC<{ name?: string }> = ({ name }) => (
  <>
    <AboutMe name={name} />
    <Disclaimer />
  </>
);
