export const formatValue = (origin: string): string => {
  return origin.replace(/<[^>]+>|@\w+@/g, "");
};
