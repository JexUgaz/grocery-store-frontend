import { ValidationErrors } from "@/types/ValidationErrors";

export const formatZodErrors = <T>(treeified: {
  properties?: Record<string, unknown>;
}): ValidationErrors<T> => {
  if (!treeified.properties) return {} as ValidationErrors<T>;

  const result: Record<string, unknown> = {};

  for (const key in treeified.properties) {
    const node = treeified.properties[key];
    if ("properties" in (node as object)) {
      result[key] = formatZodErrors(
        node as {
          properties?: Record<string, unknown>;
        }
      );
      continue;
    }
    result[key] = (node as { errors: string[] }).errors;
  }

  return result as ValidationErrors<T>;
};
