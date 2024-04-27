import { FC, PropsWithChildren } from "react";
import { parseRating, parseDate, IDetailsCard, IGenre } from "shared";
import styles from "./descripiton.module.scss";

const DetailsDescription: FC<PropsWithChildren<IDetailsCard>> = ({
  rating,
  title,
  description,
  popularity,
  runtime,
  date,
  genres,
}) => {
  return (
    <article className={styles.article}>
      <h2>{`${parseRating(rating, 1)} ${title}`}</h2>
      <p>{description}</p>
      <p>
        <span>Длительность:</span> {runtime} мин
      </p>
      <p>
        <span>Популярность:</span> {parseRating(popularity, 2)}
      </p>
      <p>
        <span>Дата выхода:</span> {parseDate(date)}
      </p>
      <p>
        <span>Жанр:</span>
        {genres.map((genre: IGenre) => ` ${genre.name},`)}
      </p>
    </article>
  );
};

export { DetailsDescription };
