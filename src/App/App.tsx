import { React } from "../../deps.ts";
import { sortObject } from "../utils/sortObject.ts";

const serverData = {
  "Deno.version": Deno.version,
  // "Deno.args": Deno.args, // always [] in GoogleCloudRun
  // "Deno.build": Deno.build, // always on "linux x86_64 gnu" in GoogleCloudRun
  "Deno.env.toObject()": sortObject(Deno.env.toObject()),
  // "Deno.execPath": Deno.execPath(), // --allow-read
  // "Deno.hostname()": Deno.hostname(), // --unstable
  // "Deno.permissions": Deno.permissions.query({ name: "env" }), // many permissions
  // "Deno.pid": Deno.pid, // always 1 in GoogleCloudRun
};

export const App = (<html>
  <head>
    <title>Hossam Magdy</title>
    <link
      rel="icon"
      href={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" font-weight="bold" font-family="sans-serif" fill="white" stroke="black">H</text></svg>`}
    />
  </head>
  <body>
    <h3>Hello World from Deno ...</h3>
    <p>with React SSR</p>
    <p>processed at {new Date().toUTCString()}</p>
    <hr />
    <pre>Server data:<br />{JSON.stringify(serverData, null, 2)}</pre>
  </body>
</html>);
