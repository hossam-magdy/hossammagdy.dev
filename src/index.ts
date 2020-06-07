import { http_serve, PORT } from "../deps.ts";

const server = http_serve({ port: PORT });

console.log(`Start listening on port: ${PORT}`);

const dumpObj = { VERSION: Deno.version, ENV: Deno.env.toObject() };

for await (const req of server) {
  req.respond({
    headers: new Headers({
      "Content-Type": "text/html",
    }),
    body: `Hello World from Deno<br />\nat "${new Date().toUTCString()}"
<pre>${JSON.stringify(dumpObj, null, 2)}</pre>`,
  });
}
