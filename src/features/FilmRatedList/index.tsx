import { FC, memo } from "react";
import { FilmList, IPage } from "shared";
import { RatedList } from "entities";

// Фича, формирующая компонент списка лучших фильмов

const FilmRatedList: FC<IPage> = memo(
  ({ page }) => {
    return (
      <FilmList>
        <RatedList page={page} />
      </FilmList>
    );
  },
  (prev, next) => prev.page === next.page
);

export { FilmRatedList };
