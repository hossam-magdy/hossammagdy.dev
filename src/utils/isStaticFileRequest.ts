import { ServerRequest } from "http";

export const isStaticFileRequest = (req: ServerRequest) =>
  req.url.startsWith("/assets/") || req.url === "/robots.txt";
