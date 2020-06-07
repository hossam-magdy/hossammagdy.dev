/* There are some hacky lines here, to get the exported variables from "deps.ts" recognized with their correct typings in VSCode

For JSX (required): the "// @deno-types" lines are for deno runtime, required to recognize JSX

For IDE/VSCode (optional): the "import _Something", "import … _SomethingNameSpace" then "const Something: _SomethingNameSpace"
is for VSCode to recongnize the exported "_Something" with its corrent typing!
*/

//##### Http Server
export { serve as http_serve } from "https://deno.land/std@0.55.0/http/server.ts";
export const PORT = parseInt(Deno.env.get("PORT") || "8080");

//##### React
/// <reference path="https://deno.land/x/types/react/v16.13.1/react.d.ts" />
// or // @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import { default as _ReactNamespace } from "https://deno.land/x/types/react/v16.13.1/react.d.ts";
import { default as _React } from "https://cdn.pika.dev/@pika/react@v16.13.1";
export const React: typeof _ReactNamespace = (_React as any);

//##### ReactDOM
/// <reference path="https://deno.land/x/types/react-dom/v16.13.1/react-dom.d.ts" />
import * as _ReactDOMNamespace from "https://deno.land/x/types/react-dom/v16.13.1/react-dom.d.ts";
import { default as _ReactDOM } from "https://cdn.pika.dev/@pika/react-dom@v16.13.1";
export const ReactDOM: typeof _ReactDOMNamespace = (_ReactDOM as any);

//##### ReactDOMServer
/// <reference path="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts" />
import * as _ReactDOMServerNamespace from "https://deno.land/x/types/react-dom/v16.13.1/server.d.ts";
import { default as _ReactDOMServer } from "https://dev.jspm.io/react-dom@16.13.1/server";
export const ReactDOMServer: typeof _ReactDOMServerNamespace =
  (_ReactDOMServer as any);

//##### Tests
export { assertEquals } from "https://deno.land/std@0.55.0/testing/asserts.ts";
export const test = Deno.test;
