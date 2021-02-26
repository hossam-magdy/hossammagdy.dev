import { ServerRequest } from "../../deps_server.ts";

export const isStaticFileRequest = (req: ServerRequest) =>
  req.url.startsWith("/assets/") || req.url === "/robots.txt";
