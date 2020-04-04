const { relative } = require("path");
const { default: next } = require("next");

const nextJsDistDir = "src/.next";
const isDev = process.env.NODE_ENV !== "production";

const nextJsServer = next({
  dev: isDev,
  conf: {
    distDir: `${relative(process.cwd(), __dirname)}/${nextJsDistDir}`,
  },
});

const functions = require("firebase-functions");
const nextJsHandle = nextJsServer.getRequestHandler();

exports.app = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl); // log the page.js file that is being requested
  return nextJsServer.prepare().then(() => nextJsHandle(req, res));
});
