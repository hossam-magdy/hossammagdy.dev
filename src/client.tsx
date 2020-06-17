import { React, ReactDOM } from "../deps_client.ts";
import { App } from "./components/App/App.tsx";

// (() => {
console.log("This a client-side-only JS file:", { React, ReactDOM }); // TODO: both are "undefined" in bundle!

ReactDOM.hydrate(<App />, document.querySelector("[data-reactroot]"));

// const a = 1;
// export { a };
// })();
