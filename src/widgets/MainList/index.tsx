import { FC, useState, memo } from "react";
import { FilmRatedList, PaginationWithState } from "features";

// Виджет компонентов списка лучших фильмов

const MainList: FC = memo(() => {
  // Состояние подтягивается из локального хранилища

  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page") || "1")
  );
  const [isLoad, setIsLoad] = useState(false);
  return (
    <>
      <FilmRatedList page={page} setPage={setPage} setIsLoad={setIsLoad} />
      <PaginationWithState setPage={setPage} page={page} isLoad={isLoad} />
    </>
  );
});

export { MainList };
