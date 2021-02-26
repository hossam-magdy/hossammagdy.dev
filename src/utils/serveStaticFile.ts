import {
  mediaTypes,
  minifier,
  path,
  ServerRequest,
} from "../../deps_server.ts";

var textDecoder = new TextDecoder("utf-8");

const minifyExt = ["html", "css", "js", "json"] as const;
const allowedExt = [...minifyExt, "svg", "txt"] as const;
const assetCacheMaxAge = 31536000 as const;

export const serveStaticFile = async (req: ServerRequest) => {
  const filePath = `public${req.url}`;
  const fileExt = path
    .extname(filePath)
    .substr(1)
    .toLowerCase() as minifier.Language;
  if (!allowedExt.includes(fileExt)) {
    return;
  }

  const mimeType = mediaTypes.contentType(fileExt);

  const contentUint8Arr = await Deno.readFile(filePath);
  const unminifiedContent = textDecoder.decode(contentUint8Arr);

  let minifiedContent;
  if (minifyExt.includes(fileExt)) {
    try {
      minifiedContent = minifier.minify(fileExt, unminifiedContent);
    } catch (e) {
      console.error(
        `Failed to minify "${filePath}", serving non-minified version`,
      );
    }
  }

  const body = minifiedContent || unminifiedContent;

  return {
    headers: new Headers({
      "Cache-Control": `public, max-age=${assetCacheMaxAge}`,
      "Content-Type": `${mimeType}`,
    }),
    body,
  };
};
