import { FC } from "react";
import { useParams } from "react-router-dom";
import { Details } from "entities";

const DetailsWithData: FC = () => {
  const { id } = useParams();
  return id && <Details id={Number(id)} />;
};

export { DetailsWithData };
