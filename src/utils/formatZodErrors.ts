import { ValidationErrors } from "@/types/ValidationErrors";

export const formatZodErrors = <T>(treeified: {
  properties?: Record<string, any>;
}): ValidationErrors<T> => {
  if (!treeified.properties) return {} as ValidationErrors<T>;

  const result: any = {};

  for (const key in treeified.properties) {
    const node = treeified.properties[key];
    if (node.properties) {
      result[key] = formatZodErrors(node);
    } else {
      result[key] = node.errors;
    }
  }

  return result as ValidationErrors<T>;
};
