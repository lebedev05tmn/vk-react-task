import { FC, memo } from "react";
import { FilmList, IPropsWithPage } from "shared";
import { RatedList } from "entities";

// Фича, формирующая компонент списка лучших фильмов

const FilmRatedList: FC<IPropsWithPage> = memo(
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
