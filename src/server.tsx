import React from "react";
import { renderToString } from "react-dom-server";
import { serve, ServerRequest } from "http";

import { App } from "components/App/App.tsx";
import * as config from "config";
import { getServerData } from "utils/getServerData.ts";
import { getSkeleton } from "utils/getSkeleton.ts";
import { isStaticFileRequest } from "utils/isStaticFileRequest.ts";
import { serveStaticFile } from "utils/serveStaticFile.ts";

export const PORT = parseInt(Deno.env.get("PORT") ?? "") || config.defaultPort;

const handle = async (req: ServerRequest) => {
  if (isStaticFileRequest(req)) {
    const resp = await serveStaticFile(req);
    req.respond(resp || { status: 500 });
  } else {
    // see: https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
    const body = getSkeleton(
      `${renderToString(<App />)}\n<!-- ${getServerData(req)} -->`,
      `<script>window.Deno={version:${JSON.stringify(Deno.version)}};</script>`,
    );
    const headers = new Headers({
      "Cache-Control": `public, max-age=${config.cacheControlMaxAge}`,
      "Content-Type": "text/html; charset=utf-8",
    });

    req.respond({ headers, body });
  }
};

const server = serve({ port: PORT });
console.log(`Started listening on port: ${PORT}`);

for await (const req of server) {
  handle(req);
}
