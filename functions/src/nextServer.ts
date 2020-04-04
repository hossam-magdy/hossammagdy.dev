import { relative } from "path";
// import { nextServer } from "../../src";
import next from "next";

const isDev = process.env.NODE_ENV !== "production";
export const nextServer = next({
  dev: isDev,
  conf: { distDir: `${relative(process.cwd(), __dirname)}/src/.next` },
});
