
// #region PReact

// x @deno-types="https://deno.land/std@0.40.0/types/react.d.ts" // FOR BUNDLING .. 0.40.0 is the last std version included react.d.ts
// x @deno-types="https://unpkg.com/preact@10.5.3/src/index.d.ts"
import * as React from 'https://cdn.skypack.dev/preact@^10.4.4'; // WORKING and BUNDLING
// import * as React from 'https://unpkg.com/preact@10.5.3/dist/preact.module.js'; // WORKING and BUNDLING
// import * as React from 'https://unpkg.com/htm@3.0.4/preact/standalone.module.js'; // NOT WORKING (doesn't include .hydrate())
// import * as React from 'https://unpkg.com/preact-render-to-string@5.1.8/dist/jsx.module.js';
export { React };

// This is a "trick" to include react.d.ts during compilation, which defines globals like "JSX"
// if used in "@deno-types=" instead (which it should be!), it breaks the bundling of either React or ReactDOM
import type * as IReact from "https://deno.land/std@0.40.0/types/react.d.ts";
const X: IReact.FC | undefined = undefined;

// #endregion


// #region React
/* 
// X(404) @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// X @deno-types="https://www.unpkg.com/@types/react@16.9.50/index.d.ts"
// X @deno-types="https://cdn.jsdelivr.net/npm/@types/react@16.9.45/index.d.ts"
// / <reference types="https://deno.land/std@0.40.0/types/react.d.ts" />
// x @deno-types="https://deno.land/std@0.40.0/types/react.d.ts" // FOR BUNDLING .. 0.40.0 is the last std version included react.d.ts
import * as React from "https://unpkg.com/es-react@16.13.1/index.js"; // BUNDLING WORKS
// import * as React from "https://cdn.skypack.dev/react@^16.13.1"; // TYPINGS WORKS (BUNDLING ~NOT) // `@^16.13.1` is optional
// import * as React from "https://cdn.skypack.dev/@pika/react@v16.13.1";

// X @deno-types="https://deno.land/std@0.40.0/types/react-dom.d.ts" // includes react.d.ts which defines globals like JSX
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@^16.13.1"; // `@^16.13.1` is optional

// X(404) @deno-types="https://deno.land/x/types/react-dom/v16.13.1/react-dom.d.ts"
// X @deno-types="https://cdn.jsdelivr.net/npm/@types/react-dom@16.9.8/index.d.ts"
// import * as ReactDOM from "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js"; // can be "* as" (VSCode recognized) or "default as" (unknow in VSCode)
// import * as ReactDOM from "https://cdn.skypack.dev/@pika/react-dom@v16.13.1"; // can be "* as" (VSCode recognized) or "default as" (unknow in VSCode)

// X(backup) import { default as ReactDOMServer } from "https://jspm.dev/react-dom/server.js";


// This is a "trick" to include react.d.ts during compilation, which defines globals like "JSX"
// if used in "@deno-types=" instead (which it should be!), it breaks the bundling of either React or ReactDOM
import type * as IReact from "https://deno.land/std@0.40.0/types/react.d.ts";
const X: IReact.FC | undefined = undefined;


// export
export { React, ReactDOM, IReact };
*/
// #endregion
