import { FC, PropsWithChildren } from "react";
import { Button } from "../Button";
import { IPagination } from "shared";
import styles from "./pagination.module.scss";

const Pagination: FC<PropsWithChildren<IPagination>> = ({
  setPage,
  page,
  onStartClick,
  count,
  onEndClick,
}) => {
  return (
    <nav className={styles.pagination}>
      <Button onClick={onStartClick}>В начало</Button>
      {Array(5)
        .fill("")
        .map((_, index) => {
          return (
            <Button
              key={"pagination-" + index}
              isActive={page % 5 === (index + 1) % 5}
              onClick={() => setPage(count! + index)}>
              {count! + index}
            </Button>
          );
        })}
      <Button onClick={onEndClick}>Дальше</Button>
    </nav>
  );
};

export { Pagination };
