// Функция для парсинга даты

export const parseDate = (date: string): string => {
  // Формат даты

  return new Date(date).toLocaleDateString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
