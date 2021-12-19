import { ServerRequest } from "http";

const getDenoData = () => ({
  "version": Deno.version,
  "K_REVISION": Deno.env.get("K_REVISION"),
});

export const getServerData = (req?: ServerRequest) => (JSON.stringify(
  {
    req: {
      processedAt: new Date().toUTCString(),
      method: req?.method,
      url: req?.url,
      headers: req?.headers,
    },
    server: getDenoData(),
  },
  null,
  2,
));
