export const areObjectsEqualLoose = <T extends object>(
  a: Partial<T>,
  b: Partial<T>
): boolean => {
  const keys = new Set([...Object.keys(a ?? {}), ...Object.keys(b ?? {})]);

  for (const key of keys) {
    const valA = (a as Record<string, unknown>)[key];
    const valB = (b as Record<string, unknown>)[key];

    const normA = valA === undefined ? null : valA;
    const normB = valB === undefined ? null : valB;

    if (JSON.stringify(normA) !== JSON.stringify(normB)) {
      return false;
    }
  }

  return true;
};
