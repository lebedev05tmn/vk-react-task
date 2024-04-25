import { FC } from "react";
import { Layout } from "widgets";
import { RatedList } from "entities/Film/RatedList/ui";
import { FilmList } from "shared/ui";

const MainPage: FC = () => {
  const page = 1;
  return (
    <Layout>
      <FilmList>
        <RatedList page={page} />
      </FilmList>
    </Layout>
  );
};

export { MainPage };
