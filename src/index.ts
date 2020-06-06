import { serve } from "https://deno.land/std@0.55.0/http/server.ts";

const PORT = parseInt(Deno.env.get('PORT') || '8080');

const server = serve({ port: PORT });

console.log(`Start listening on port: ${PORT}`);

for await (const req of server) {
  req.respond({ body: `
  Hello World from Deno
  <pre>${JSON.stringify({VERSION: Deno.version, ENV: Deno.env.toObject()}, null, 2)}</pre>
  ` });
}
