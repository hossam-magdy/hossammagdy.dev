/*
!Important!
- see: https://deno.land/manual/getting_started/typescript#compiler-hint
- the "// @deno-types" lines are compiler hints, the one for React is required to recognize JSX syntax
*/

// #region Http Server
export {
  serve as http_serve,
  ServerRequest,
} from "https://deno.land/std@0.73.0/http/server.ts";
export const PORT = parseInt(Deno.env.get("PORT") || "8080");
// #endregion

export * from "./deps_client.ts";

// #region ReactDOMServer
/*
// The following way to use ReactDOMServer is temporarily untill PikaCDN supports react-dom/server with types
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-dom/server/index.d.ts
import _ReactDOMServer from "https://dev.jspm.io/react-dom/server";
interface ReactDOMServer {
  renderToString(element: JSX.Element): string;
  renderToStaticMarkup(element: JSX.Element): string;
}
const ReactDOMServer: ReactDOMServer = _ReactDOMServer as any;

// see https://www.reddit.com/r/Deno/comments/gqft4o/wrapping_existing_npm_packages/frswus7/
// X @den o-types="https://cdn.jsdelivr.net/npm/@types/react-dom@16.9.8/server/index.d.ts"
// X @den o-types="https://cdn.skypack.dev/-/react-dom@v16.13.1-qv1YB4ZAVXJG84jEgino/dist=es2019/server,mode=types/server.d.ts"
// import _ReactDOMServer from "https://cdn.skypack.dev/react-dom/server"; // imports ReactDOM not ReactDOMServer!
// import * as _ReactDOMServer from "https://jspm.dev/react-dom@16.13.1/server";
// import ReactDOMServer from "https://dev.jspm.io/react-dom/server";
// import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";

// export
export { ReactDOMServer };
*/
// #endregion

import { renderToString } from 'https://cdn.skypack.dev/preact-render-to-string@^5.1.9';
export { renderToString }

// #region Tests     // see: https://deno.land/std/testing
import * as asserts from "https://deno.land/std@0.73.0/testing/asserts.ts";
export { asserts };
export const test = Deno.test;
// #endregion
