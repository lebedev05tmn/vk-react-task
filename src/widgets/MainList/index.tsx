import { FC, useState, memo } from "react";
import { FilmRatedList, PaginationWithState } from "features";

// Виджет компонентов списка лучших фильмов

const MainList: FC = memo(() => {
  // Состояние подтягивается из локального хранилища

  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page") || "1")
  );
  return (
    <>
      <FilmRatedList page={page} />
      <PaginationWithState setPage={setPage} page={page} />
    </>
  );
});

export { MainList };
