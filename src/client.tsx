import { React } from "../deps_client.ts";
import { App } from "./components/App/App.tsx";

// (() => {
console.log("This a client-side-only JS file:", { PReact: React }); // TODO: both are "undefined" in bundle!

// The hydration is the only thing that is not working with preact setup
React.hydrate(<App name={' from client'} />, document.querySelector("[data-reactroot]"));
// React.hydrate(<App />, document.querySelector("[data-reactroot]"));

// const a = 1;
// export { a };
// })();
