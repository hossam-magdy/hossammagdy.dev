// @ts-nocheck
const { relative } = require("path");
const next = require("next");
const Server = require("next/dist/next-server/server/next-server");

const isDev = process.env.NODE_ENV !== "production";

/** @type Server */
const nextServer = next({
  dev: isDev,
  conf: { distDir: `${relative(process.cwd(), __dirname)}/src/.next` },
});

const functions = require("firebase-functions");
const handle = nextServer.getRequestHandler();

exports.app = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl); // log the page.js file that is being requested
  return nextServer.prepare().then(() => handle(req, res));
});
