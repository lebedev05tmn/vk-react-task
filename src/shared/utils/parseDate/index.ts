export const parseDate = (date: string): string => {
  return new Date(date).toLocaleDateString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
