import { FC, useEffect, useState } from "react";
import { Layout, DetailsWithData } from "widgets";
import { useParams } from "react-router-dom";
import { Recommendations } from "features";

const DetailsPage: FC = () => {
  const { id } = useParams();
  const [idetntifier, setIdentifier] = useState<undefined | string>(undefined);

  useEffect(() => {
    document.title = `Фильм ${id}`;
    if (id !== idetntifier) {
      setIdentifier(id);
    }
  }, [id]);

  if (id !== idetntifier) {
    return "Loading...";
  }

  return (
    idetntifier && (
      <Layout>
        <DetailsWithData id={Number(idetntifier)} />
        <Recommendations id={Number(idetntifier)} />
      </Layout>
    )
  );
};

export { DetailsPage };
