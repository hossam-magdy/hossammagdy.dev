import React from "react";

import { AboutMe } from "components/AboutMe/AboutMe.tsx";
import { Disclaimer } from "components/Disclaimer/Disclaimer.tsx";

export const App: React.FC<{ name?: string }> = ({ name }) => (
  <>
    <AboutMe name={name} />
    <Disclaimer />
  </>
);
