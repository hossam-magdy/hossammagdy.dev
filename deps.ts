/*
!Important!
- see: https://deno.land/manual/getting_started/typescript#compiler-hint
- the "// @deno-types" lines are compiler hints, the one for React is required to recognize JSX syntax
*/

// #region Http Server
export {
  serve as http_serve,
  ServerRequest,
} from "https://deno.land/std@0.55.0/http/server.ts";
export const PORT = parseInt(Deno.env.get("PORT") || "8080");
// #endregion

// #region React     // see: https://deno.land/x/types/react-dom
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import * as React from "https://cdn.pika.dev/@pika/react@v16.13.1";
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/react-dom.d.ts"
import * as ReactDOM from "https://cdn.pika.dev/@pika/react-dom@v16.13.1"; // can be "* as" (VSCode recognized) or "default as" (unknow in VSCode)
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";
// export
export { React, ReactDOM, ReactDOMServer };
// #endregion

// #region Tests     // see: https://deno.land/std/testing
import * as asserts from "https://deno.land/std@0.55.0/testing/asserts.ts";
export { asserts };
export const test = Deno.test;
// #endregion
