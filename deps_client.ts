// #region React

// X(404) @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// X @deno-types="https://cdn.jsdelivr.net/npm/@types/react@16.9.45/index.d.ts"
import * as React from "https://unpkg.com/es-react@16.13.1/index.js"; // BUNDLING WORKS
// import * as React from "https://cdn.pika.dev/react"; // TYPINGS WORKS (BUNDLE NOT)
// import * as React from "https://cdn.skypack.dev/react";
// import * as React from "https://cdn.pika.dev/@pika/react@v16.13.1";

// X(404) @deno-types="https://deno.land/x/types/react-dom/v16.13.1/react-dom.d.ts"
// X @deno-types="https://cdn.jsdelivr.net/npm/@types/react-dom@16.9.8/index.d.ts"
import * as ReactDOM from "https://cdn.pika.dev/react-dom";
// import * as ReactDOM from "https://cdn.skypack.dev/react-dom";
// import * as ReactDOM from "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js"; // can be "* as" (VSCode recognized) or "default as" (unknow in VSCode)
// import * as ReactDOM from "https://cdn.pika.dev/@pika/react-dom@v16.13.1"; // can be "* as" (VSCode recognized) or "default as" (unknow in VSCode)

// X(backup) import { default as ReactDOMServer } from "https://jspm.dev/react-dom/server.js";

// export
export { React, ReactDOM };
// #endregion
