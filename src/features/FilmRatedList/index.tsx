import { FC, memo } from "react";
import { FilmList } from "shared";
import { RatedList, IRatedListProps } from "entities";

// Фича, формирующая компонент списка лучших фильмов

const FilmRatedList: FC<IRatedListProps> = memo(
  ({ page, setIsLoad }) => {
    return (
      <FilmList>
        <RatedList page={page} setIsLoad={setIsLoad} />
      </FilmList>
    );
  },
  (prev, next) => prev.page === next.page
);

export { FilmRatedList };
