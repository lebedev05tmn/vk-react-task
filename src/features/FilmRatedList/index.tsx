import { FC } from "react";
import { FilmList, IPropsWithPage } from "shared";
import { RatedList } from "entities";

const FilmRatedList: FC<IPropsWithPage> = ({ page }) => {
  return (
    <FilmList>
      <RatedList page={page} />
    </FilmList>
  );
};

export { FilmRatedList };
