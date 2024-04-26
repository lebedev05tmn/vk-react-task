import { FC, useState } from "react";
import { Pagination, IPagination } from "shared";

const PaginationWithState: FC<IPagination> = ({ page, setPage }) => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count") || "1")
  );

  return (
    <Pagination
      setPage={setPage}
      page={page}
      onStartClick={() => {
        setPage(1);
        localStorage.setItem("page", (1).toString());
        setCount(1);
        localStorage.setItem("count", (1).toString());
      }}
      onEndClick={() => {
        setPage(page + 1);
        localStorage.setItem("page", (page + 1).toString());
        if (page % 5 === 0) {
          setCount(count + 5);
          localStorage.setItem("count", (count + 5).toString());
        }
      }}
      count={count}
    />
  );
};

export { PaginationWithState };
