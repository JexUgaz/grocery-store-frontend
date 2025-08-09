import slugify from "slugify";

export const generateSlug = (label: string) =>
  slugify(label, { lower: true, strict: true });
