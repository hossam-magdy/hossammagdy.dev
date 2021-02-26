// #region Http Server
export {
  serve as http_serve,
  ServerRequest,
} from "https://deno.land/std@0.88.0/http/server.ts";
export type { Response } from "https://deno.land/std@0.88.0/http/server.ts";
export const PORT = parseInt(Deno.env.get("PORT") || "8080");
// #endregion

export * from "./deps_client.ts";

// #region ReactDOMServer
export * as ReactDOMServer from "https://esm.sh/react-dom@17.0.1/server";
// #endregion

// #region Tests     // see: https://deno.land/std/testing
import * as asserts from "https://deno.land/std@0.88.0/testing/asserts.ts";
export { asserts };
export const test = Deno.test;
// #endregion

export * as mediaTypes from "https://deno.land/x/media_types/mod.ts";
export * as path from "https://deno.land/std/path/mod.ts";
export * as minifier from "https://deno.land/x/minifier/mod.ts";
