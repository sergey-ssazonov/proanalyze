export const omit = <T extends object, K extends keyof T>(obj: T, keysToOmit: K[]): Omit<T, K> => {
  const rest = { ...obj };
  keysToOmit.forEach((key) => {
    delete rest[key];
  });
  return rest;
};
