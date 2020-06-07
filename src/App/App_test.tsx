import { asserts, React, ReactDOMServer, test } from "../../deps.ts";
import { App } from "./App.tsx";

test("Assert web page has title 'Hossam Magdy'", () => {
  const actual = ReactDOMServer.renderToStaticMarkup(<App />);
  const expected = "<title>Hossam Magdy</title>";
  asserts.assertStrContains(actual, expected);
});
