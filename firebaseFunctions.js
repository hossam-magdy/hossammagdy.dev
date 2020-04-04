const { relative } = require("path");
const { default: next } = require("next");
const { https } = require("firebase-functions");

const nextJsDistDir = require("./src/next.config.js").distDir; // || "src/.next";
const isDev = process.env.NODE_ENV !== "production";

const nextJsServer = next({
  dev: isDev,
  conf: {
    distDir: `${relative(process.cwd(), __dirname)}/${nextJsDistDir}`,
  },
});
const nextJsHandle = nextJsServer.getRequestHandler();

exports.app = https.onRequest((req, res) => {
  return nextJsServer.prepare().then(() => nextJsHandle(req, res));
});
