// App
export { serve as http_serve } from "https://deno.land/std@0.55.0/http/server.ts";
export const PORT = parseInt(Deno.env.get("PORT") || "8080");

// Tests
export { assertEquals } from "https://deno.land/std@0.55.0/testing/asserts.ts";
export const test = Deno.test;
