import { FC } from "react";
import { Layout } from "widgets";
import { NotFoundText } from "shared";

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <NotFoundText />
    </Layout>
  );
};

export { NotFoundPage };
