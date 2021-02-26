import { React, ReactDOM } from "deps_client";
import { App } from "components/App/App.tsx";

console.log(
  "[Test] This a client-side-only JS execution,\nto validate Deno's bundling of React & ReactDOM:\n",
  { React, ReactDOM },
);

const domNode = document.querySelector("[data-reactroot]");

const hydrationResult = ReactDOM.hydrate(<App name={"👋"} />, domNode);

if (
  domNode &&
  typeof ReactDOM.hydrate === "function" &&
  hydrationResult === null
) {
  console.log("✅ ReactDOM hydration succeeded!");
} else {
  console.error("❌ ERROR: possible ReactDOM hydration failure!", {
    domNode,
    "ReactDOM.hydrate": ReactDOM.hydrate,
    hydrationResult,
  });
}
