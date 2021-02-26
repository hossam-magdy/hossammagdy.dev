import { minifier } from "deps_server";

const SKELETON_FILEPATH = "src/skeleton.html";

const decoder = new TextDecoder("utf-8");

const skeletonUint8Arr = await Deno.readFile(SKELETON_FILEPATH);
const unminifiedSkeleton = decoder.decode(skeletonUint8Arr);
const minifiedSkeleton = minifier.minifyHTML(unminifiedSkeleton);

export const getSkeleton = (content?: string) =>
  content
    ? minifiedSkeleton.replace("__PLACEHOLDER__", content)
    : minifiedSkeleton;
