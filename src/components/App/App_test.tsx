import React from "react";
import ReactDOMServer from "react-dom-server";
import * as asserts from "asserts";

import { App } from "./App.tsx";

const test = Deno.test;

test("Assert web page includes text 'Hossam Magdy'", () => {
  const actual = ReactDOMServer.renderToStaticMarkup(<App />);
  const expected = "Hossam Magdy";
  asserts.assertStringIncludes(actual, expected);
});
