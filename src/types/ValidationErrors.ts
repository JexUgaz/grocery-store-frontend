export type ValidationErrors<T> = {
  [K in keyof T]?: T[K] extends object
    ? ValidationErrors<T[K]> | undefined
    : string[] | undefined;
};
