import { FC } from "react";
import { FilmList } from "shared";
import { RatedList } from "entities";

interface IProps {
  page: number;
}

const FilmRatedList: FC<IProps> = ({ page }) => {
  return (
    <FilmList>
      <RatedList page={page} />
    </FilmList>
  );
};

export { FilmRatedList };
