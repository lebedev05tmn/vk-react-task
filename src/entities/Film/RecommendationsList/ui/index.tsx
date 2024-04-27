import { FC, PropsWithChildren } from "react";
import { getRecommendationsList } from "../lib";
import {
  IPropsWithId,
  IFilmData,
  FilmCard,
  getImageUrl,
  ImagesType,
} from "shared";
import { useQuery } from "react-query";

const RecommendationsList: FC<PropsWithChildren<IPropsWithId>> = ({ id }) => {
  const { data, isSuccess } = useQuery<IFilmData[]>(["recomendations"], () =>
    getRecommendationsList(id)
  );
  return (
    <>
      {isSuccess &&
        data
          .slice(0, 5)
          .map((film: IFilmData) => (
            <FilmCard
              image={getImageUrl(film, ImagesType.POSTER)}
              path={"/film/" + film.id}
              title={film.title}
              key={film.id}
            />
          ))}
    </>
  );
};

export { RecommendationsList };
