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
} from "shared";

interface IProps {
  page: number;
}

const RatedList: FC<IProps> = ({ page }) => {
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
            rating={parseRating(film.vote_average)}
            key={film.id}
          />
        ))}
    </>
  );
};

export { RatedList };
