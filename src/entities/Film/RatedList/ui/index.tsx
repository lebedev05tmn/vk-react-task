import { FC } from "react";
import { useQuery } from "react-query";
import { getRatedList } from "../lib";
import {
  FilmCard,
  getImageUrl,
  IFilmData,
  ImagesType,
  parseDate,
  parseRating,
  IPropsWithPage,
} from "shared";

const RatedList: FC<IPropsWithPage> = ({ page }) => {
  const { data, isSuccess } = useQuery<IFilmData[]>(
    ["rated-films", page],
    () => getRatedList(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      {isSuccess &&
        data.map(film => (
          <FilmCard
            image={getImageUrl(film, ImagesType.POSTER)}
            path={"/film/" + film.id}
            title={film.title}
            date={parseDate(film.release_date)}
            rating={parseRating(film.vote_average, 1)}
            key={film.id}
          />
        ))}
    </>
  );
};

export { RatedList };
