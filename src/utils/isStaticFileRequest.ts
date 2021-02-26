import { http } from "deps_server";

export const isStaticFileRequest = (req: http.ServerRequest) =>
  req.url.startsWith("/assets/") || req.url === "/robots.txt";
