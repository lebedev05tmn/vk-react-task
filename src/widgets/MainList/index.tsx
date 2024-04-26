import { FC, useState } from "react";
import { FilmRatedList, PaginationWithState } from "features";

const MainList: FC = () => {
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page") || "1")
  );
  return (
    <>
      <FilmRatedList page={page} />
      <PaginationWithState setPage={setPage} page={page} />
    </>
  );
};

export { MainList };
