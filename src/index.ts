import { http_serve, PORT } from "../deps.ts";
import { RenderedApp } from "./App/App.tsx";

const server = http_serve({ port: PORT });

console.log(`Start listening on port: ${PORT}`);

const dumpObj = {
  "Deno.version": Deno.version,
  "Deno.env.toObject": Deno.env.toObject(),
};

for await (const req of server) {
  req.respond({
    headers: new Headers({
      "Content-Type": "text/html",
    }),
    body: `Hello World from Deno<br />
at "${new Date().toUTCString()}"<br />
${RenderedApp}
<pre>${JSON.stringify(dumpObj, null, 2)}</pre>
`,
  });
}
