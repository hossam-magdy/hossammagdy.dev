// Ref: https://deno.land/x/denon
import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run -c tsconfig_server.json src/server.tsx",
      desc: "Run the main server.",
      // "inspect": "127.0.0.1:9229",
      // "inspectBrk": "127.0.0.1:9229"
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
      // "inspect": "127.0.0.1:9229",
      // "inspectBrk": "127.0.0.1:9229"
    },
  },

  watcher: {
    // The file extensions that it will scan for.
    exts: ["js", "jsx", "ts", "tsx", "json"],
    // The globs that it will scan for.
    // match: ["*.*"],
    // The globs that it will not scan for.
    skip: [".git/*", "public/*"],
  },
};

export default config;
