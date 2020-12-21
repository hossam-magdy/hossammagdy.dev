import { asserts, React, ReactDOMServer, test } from "./deps.ts";

import App from "../pages/index.tsx";

test("Assert web page includes text 'Hossam Magdy'", () => {
  const actual = ReactDOMServer.renderToStaticMarkup(<App />);
  const expected = "Hossam Magdy";
  asserts.assertStringIncludes(actual, expected);
});
