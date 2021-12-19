import { minifyHTML } from "minifier";

const SKELETON_FILEPATH = "src/skeleton.html";

const decoder = new TextDecoder("utf-8");

const skeletonUint8Arr = await Deno.readFile(SKELETON_FILEPATH);
const unminifiedSkeleton = decoder.decode(skeletonUint8Arr);
const minifiedSkeleton = minifyHTML(unminifiedSkeleton);

export const getSkeleton = (
  htmlBodyContent?: string,
  htmlHeadContent?: string,
) =>
  htmlBodyContent
    ? minifiedSkeleton
      .replace("__PLACEHOLDER_BODY__", htmlBodyContent)
      .replace("__PLACEHOLDER_HEAD__", htmlHeadContent || "")
    : minifiedSkeleton;
