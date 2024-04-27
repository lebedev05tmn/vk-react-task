import { FC, useEffect } from "react";
import { Layout } from "widgets";
import { MainList } from "widgets";

// Главная страница - Кино справочник лучших фильмов

const MainPage: FC = () => {
  useEffect(() => {
    document.title = "Кино справочник";
  });

  return (
    <Layout>
      <h2>Лучшие фильмы</h2>
      <MainList />
    </Layout>
  );
};

export { MainPage };
