// Ref: https://deno.land/x/denon
import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run -c tsconfig_server.json src/server.tsx",
      desc: "Run the main server.",
      inspect: "127.0.0.1:9229",
      // inspectBrk: "127.0.0.1:9229",
      allow: {
        env: true, // --allow-env
        net: true, // --allow-net
        read: true, // --allow-read
      },
    },
    build: {
      cmd:
        "deno bundle -c tsconfig_client.json src/client.tsx public/assets/app.js",
      desc: "Bundle/build the client JS file.",
    },
  },

  watcher: {
    exts: ["js", "jsx", "ts", "tsx", "json"],
    skip: [".git/*", "public/*"],
  },
};

export default config;
