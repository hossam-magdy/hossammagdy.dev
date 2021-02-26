import { asserts, React, ReactDOMServer, test } from "../../../deps_server.ts";
import { App } from "./App.tsx";

test("Assert web page includes text 'Hossam Magdy'", () => {
  const actual = ReactDOMServer.renderToStaticMarkup(<App />);
  const expected = "Hossam Magdy";
  asserts.assertStringIncludes(actual, expected);
});
