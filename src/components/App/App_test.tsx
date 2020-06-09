import { asserts, React, ReactDOMServer, test } from "../../../deps_server.ts";
import { App } from "./App.tsx";

test("Assert web page has title 'Hossam Magdy'", () => {
  const actual = ReactDOMServer.renderToStaticMarkup(<App />);
  const expected = "Hello World";
  asserts.assertStrContains(actual, expected);
});
