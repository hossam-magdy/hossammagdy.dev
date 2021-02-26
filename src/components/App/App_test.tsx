import { asserts, React, ReactDOMServer } from "deps_server";
import { App } from "./App.tsx";

const test = Deno.test;

test("Assert web page includes text 'Hossam Magdy'", () => {
  const actual = ReactDOMServer.renderToStaticMarkup(<App />);
  const expected = "Hossam Magdy";
  asserts.assertStringIncludes(actual, expected);
});
