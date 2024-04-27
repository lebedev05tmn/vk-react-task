import { FC, useEffect } from "react";
import { Layout } from "widgets";
import { MainList } from "widgets/MainList";

const MainPage: FC = () => {
  useEffect(() => {
    document.title = "Кино справочник";
  });
  return (
    <Layout>
      <MainList />
    </Layout>
  );
};

export { MainPage };
