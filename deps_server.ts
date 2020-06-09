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

export * from './deps_client.ts';
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";
// export
export { ReactDOMServer };
// #endregion

// #region Tests     // see: https://deno.land/std/testing
import * as asserts from "https://deno.land/std@0.55.0/testing/asserts.ts";
export { asserts };
export const test = Deno.test;
// #endregion
