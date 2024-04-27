import { FC, useEffect } from "react";
import { Layout } from "widgets";
import { NotFoundText } from "shared";

// 404 страница
const NotFoundPage: FC = () => {
  useEffect(() => {
    document.title = "Ошибка: 404";
  });
  return (
    <Layout>
      <NotFoundText />
    </Layout>
  );
};

export { NotFoundPage };
