const decoder = new TextDecoder("utf-8");
const skeleton = decoder.decode(await Deno.readFile("src/skeleton.html"));
export const getSkeleton = (content?: string) => content ? skeleton.replace("__PLACEHOLDER__", content) : skeleton;
