import { http, React, ReactDOMServer } from "deps_server";
import { App } from "components/App/App.tsx";
import * as config from 'config';
import { getServerData } from "utils/getServerData.ts";
import { getSkeleton } from "utils/getSkeleton.ts";
import { isStaticFileRequest } from "utils/isStaticFileRequest.ts";
import { serveStaticFile } from "utils/serveStaticFile.ts";

export const PORT = parseInt(Deno.env.get("PORT") ?? "") || config.defaultPort;
const server = http.serve({ port: PORT });

console.log(`Start listening on port: ${PORT}`);

for await (const req of server) {
  if (isStaticFileRequest(req)) {
    const resp = await serveStaticFile(req);
    req.respond(resp || { status: 500 });
  } else {
    // see: https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
    const body = getSkeleton(
      `${ReactDOMServer.renderToString(<App />)}\n<!-- ${
        getServerData(req)
      } -->`,
    );
    const headers = new Headers({
      "Cache-Control": `public, max-age=${config.cacheControlMaxAge}`,
      "Content-Type": "text/html; charset=utf-8",
    });

    req.respond({ headers, body });
  }
}
