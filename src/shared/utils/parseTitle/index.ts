// Функция для парсинга заголовка с учетом лимита

export const parseTitle = (title: string, limit: number): string => {
  // Получаем слова из заголовка
  const titleWords = title.split(" ");

  // Получаем слова из заголовка с учетом лимита
  const parsedWords = title.slice(0, limit).split(" ");

  // Реализуем обрезку под лимит
  if (title.slice(0, limit).length === limit) {
    if (titleWords.length === parsedWords.length) {
      parsedWords.pop();
    }
  } else return title;

  return `${parsedWords.join(" ")}...`;
};
