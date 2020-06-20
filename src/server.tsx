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
        "Content-Type": "text/html; charset=utf-8",
      }),
      // see: https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
      body: getSkeleton(
        `<pre>PS: This website is under continuous development and experiments, currently using Deno v${Deno.version.deno} 🦕 … For details, "View page source" or check <a href="https://github.com/hossam-magdy/hossammagdy.dev">source code</a>.</pre>
        ${ReactDOMServer.renderToString(<App />)}
        <!-- ${getServerData(req)} -->`,
      ),
    });
  }
}
