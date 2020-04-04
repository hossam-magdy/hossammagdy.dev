// import { relative } from "path";
import * as functions from "firebase-functions";
import { nextServer } from "./nextServer";
// import next from "next";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
// export const app = functions.https.onRequest((request, response) => {
//   response.send(`Hello from Firebase! ${Date.now()}`);
// });

// const isDev = process.env.NODE_ENV !== "production";
// const nextApp = next({
//   dev: isDev,
//   conf: { distDir: `${relative(process.cwd(), __dirname)}/src/.next` },
// });
const handle = nextServer.getRequestHandler();

export const app = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl); // log the page.js file that is being requested
  return nextServer.prepare().then(() => handle(req, res));
});
