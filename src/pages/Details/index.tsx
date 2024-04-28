import { FC, useEffect, useState } from "react";
import { Layout } from "widgets";
import { Recommendations, DetailsWithDiv } from "features";
import { useParams } from "react-router-dom";

// Страница фильма

const DetailsPage: FC = () => {
  // Забираем id из URL
  const { id } = useParams();

  // Идентификатор для перерендера страницы
  const [idetntifier, setIdentifier] = useState<undefined | string>(undefined);

  useEffect(() => {
    document.title = `Фильм ${id}`;

    // Изменение состояния
    if (id !== idetntifier) {
      setIdentifier(id);
    }
  }, [id, idetntifier]);

  // Реализация загрузки данных
  if (id !== idetntifier || !idetntifier) {
    return "Загрузка...";
  }

  // Форматирование индетификатора
  const idFormatted: number = parseInt(idetntifier!);

  return (
    idetntifier && (
      <Layout>
        <DetailsWithDiv id={idFormatted} />
        <Recommendations id={idFormatted} />
      </Layout>
    )
  );
};

export { DetailsPage };
