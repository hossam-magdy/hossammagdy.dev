import { http_serve, PORT, React, ReactDOMServer } from "../deps.ts";
import { App } from "./App/App.tsx";

const server = http_serve({ port: PORT });

console.log(`Start listening on port: ${PORT}`);

for await (const req of server) {
  req.respond({
    headers: new Headers({
      "Content-Type": "text/html",
    }),
    // see: https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
    body: ReactDOMServer.renderToString(<App req={req} />),
  });
}
