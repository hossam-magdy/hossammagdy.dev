import { http_serve, PORT, React, ReactDOMServer } from "../deps_server.ts";
import { App } from "./components/App/App.tsx";
import { getServerData } from "./utils/getServerData.ts";
import { getSkeleton } from "./utils/getSkeleton.ts";

const server = http_serve({ port: PORT });

console.log(`Start listening on port: ${PORT}`);

for await (const req of server) {
  const assetFile = `public${req.url}`;
  if (req.url.startsWith("/assets/")) {
    req.respond({
      body: await Deno.readFile(assetFile),
    });
  } else {
    req.respond({
      headers: new Headers({
        "Content-Type": "text/html",
      }),
      // see: https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
      body: getSkeleton(
        ReactDOMServer.renderToString(<App />) +
          `<hr /><pre>${getServerData(req)}</pre>`,
      ),
    });
  }
}
