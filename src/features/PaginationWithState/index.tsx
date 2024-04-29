import { FC, useState, useCallback } from "react";
import { handleCount, handlePage } from "./lib";
import { Pagination, IPage } from "shared";

interface IPaginationProps extends IPage {
  isLoad: boolean;
}

// Фича для обработки пагинации
const PaginationWithState: FC<IPaginationProps> = ({
  page,
  setPage,
  isLoad,
}) => {
  //Данные подтягиваются из Локального хранилища

  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count") || "1")
  );

  const handleSetCount = useCallback(
    (count: number) => handleCount(count, setCount),
    []
  );
  const handleSetPage = useCallback(
    (page: number) => handlePage(page, setPage!),
    [setPage]
  );

  return (
    isLoad &&
    page !== -1 && (
      <Pagination
        setPage={setPage}
        page={page}
        onStartClick={() => {
          handleSetPage(1);
          handleSetCount(1);
        }}
        onEndClick={() => {
          handleSetPage(page + 1);
          if (page % 5 === 0) {
            handleSetCount(page + 5);
          }
        }}
        count={count}
      />
    )
  );
};

export { PaginationWithState };
