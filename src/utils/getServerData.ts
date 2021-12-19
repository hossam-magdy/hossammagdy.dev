import { ServerRequest } from "http";
import { reformObject } from "utils/reformObject.ts";

const getDenoData = () => ({
  "version": Deno.version,
  // "args": Deno.args, // always [] in GoogleCloudRun
  // "build": Deno.build, // always on "linux x86_64 gnu" in GoogleCloudRun
  "env.toObject()": reformObject(Deno.env.toObject()),
  // "execPath": Deno.execPath(), // --allow-read
  // "hostname()": Deno.hostname(), // --unstable
  // "permissions": Deno.permissions.query({ name: "env" }), // many permissions
  // "pid": Deno.pid, // always 1 in GoogleCloudRun
});

export const getServerData = (req?: ServerRequest) => (JSON.stringify(
  {
    req: {
      processedAt: new Date().toUTCString(),
      method: req?.method,
      url: req?.url,
      headers: req?.headers,
    },
    Deno: getDenoData(),
  },
  null,
  2,
));
