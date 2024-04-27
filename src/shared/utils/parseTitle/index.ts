export const parseTitle = (title: string): string => {
  const titleStr = title.split(" ");
  const parsed = title.slice(0, 33).split(" ");
  if (title.slice(0, 33).length === 33) {
    if (titleStr.length === parsed.length) {
      parsed.pop();
    }
  } else return title;
  return `${parsed.join(" ")}...`;
};
