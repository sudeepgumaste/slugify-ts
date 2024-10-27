import { assertEquals } from "jsr:@std/assert";

import { slugify } from "./mod.ts";

Deno.test("slugify", () => {
  const str = "Hello World";
  assertEquals(slugify("Hello World"), "hello-world");
});

Deno.test("slugify with special characters", () => {
  const str = "Hello World!";
  assertEquals(slugify(str), "hello-world");
});
