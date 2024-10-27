/**
 * This module turns any valid string to a slug.
 *
 * ```ts
 * import { slugify } from "@sudeepgumsate/slugify";
 *
 * console.log(slugify("Hello World")); // hello-world
 * ```
 *
 * @param str the string to turn into a slug
 * @returns a slug version of the string
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-");
}
