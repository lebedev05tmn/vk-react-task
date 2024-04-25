import { FC, useState } from "react";
import { getRatedList } from "../../entities";
import { getImageUrl, ImagesType } from "../../shared";
import { useQuery } from "react-query";
import { IFilmData, FilmCard } from "../../shared";

const MainPage: FC = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery<IFilmData[]>(
    ["rated-films", page],
    () => getRatedList(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    data &&
    data.map(film => (
      <FilmCard
        image={getImageUrl(film, ImagesType.POSTER)}
        path={"/film/" + film.id}
        title={film.title}
        date={film.release_date}
        rating={film.vote_average}
      />
    ))
  );
};

export { MainPage };
