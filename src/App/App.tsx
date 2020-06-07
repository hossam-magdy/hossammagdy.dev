import { React, ServerRequest } from "../../deps.ts";
import { sortObject } from "../utils/sortObject.ts";

const getDenoData = () => ({
  "version": Deno.version,
  // "args": Deno.args, // always [] in GoogleCloudRun
  // "build": Deno.build, // always on "linux x86_64 gnu" in GoogleCloudRun
  "env.toObject()": sortObject(Deno.env.toObject()),
  // "execPath": Deno.execPath(), // --allow-read
  // "hostname()": Deno.hostname(), // --unstable
  // "permissions": Deno.permissions.query({ name: "env" }), // many permissions
  // "pid": Deno.pid, // always 1 in GoogleCloudRun
});

export const App = ({ req }: { req?: ServerRequest }) => (<html>
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
    <pre>
      Server data:<br />
      {JSON.stringify(
        {
          req: {
            method: req?.method,
            url: req?.url,
            headers: req?.headers,
          },
          Deno: getDenoData(),
        },
        null,
        2,
      )}
    </pre>
  </body>
</html>);
