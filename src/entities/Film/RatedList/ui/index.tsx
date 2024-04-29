import { FC, Dispatch, SetStateAction, useEffect } from "react";
import { useQuery } from "react-query";
import { getRatedList } from "../lib";
import {
  FilmCard,
  getImageUrl,
  IFilmData,
  ImagesType,
  parseDate,
  parseRating,
  IPage,
} from "shared";

export interface IRatedListProps extends IPage {
  setIsLoad: Dispatch<SetStateAction<boolean>>;
}

// Компонент, отображающий список лучших фильмов

const RatedList: FC<IRatedListProps> = ({ page, setIsLoad }) => {
  const { data, isSuccess, isError, isLoading } = useQuery<IFilmData[]>(
    ["rated-films", page],
    () => getRatedList(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (isSuccess) setIsLoad(true);
  }, [isSuccess]);

  if (isLoading) {
    return "Загрузка...";
  }
  if (isError) {
    return "Ошибка, нет данных";
  }

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
