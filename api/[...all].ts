import type { APIRequest } from "https://deno.land/x/aleph/types.ts";

// Handle all `/api/*` requests, responds by redirection to `/`
export default function handler(req: APIRequest) {
  req.setHeader("Location", "/").status(307).send('');
}
