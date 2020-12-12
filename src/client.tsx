import { React, ReactDOM } from "../deps_client.ts";
import { App } from "./components/App/App.tsx";

console.log("This a client-side-only JS file:", { React, ReactDOM });

// The hydration is the only thing that is not working with current setup
ReactDOM.hydrate(<App name={' from client'} />, document.querySelector("[data-reactroot]"));
// React.hydrate(<App />, document.querySelector("[data-reactroot]"));
