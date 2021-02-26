import { React, ReactDOM } from "../deps_client.ts";
import { App } from "./components/App/App.tsx";

console.log(
  "[Test] This a client-side-only JS execution, to validate Deno bundling of React & ReactDOM:",
  { React, ReactDOM },
);

const domRootNode = document.querySelector("[data-reactroot]");

const hydrationResult = ReactDOM.hydrate(<App name={"👋"} />, domRootNode);

if (
  domRootNode &&
  typeof ReactDOM.hydrate === "function" &&
  hydrationResult === null
) {
  console.log("✅ ReactDOM hydration succeeded!");
} else {
  console.log("❌ ERROR: possible ReactDOM hydration failure!");
}
// React.hydrate(<App />, document.querySelector("[data-reactroot]"));
