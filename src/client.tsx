import React from "react";
import ReactDOM from "react-dom";

import { App } from "components/App/App.tsx";

declare const Deno: unknown;
console.log(
  "[Test] This a client-side only log,\nvalidating Deno's bundling of React & ReactDOM:\n",
  { React, ReactDOM, Deno },
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
