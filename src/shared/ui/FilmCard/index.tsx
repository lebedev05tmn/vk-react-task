import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { IFilmCard } from "../../interfaces";
import { parseTitle } from "../../utils";
import { TITLE_LIMIT } from "../../config";
import styles from "./film-card.module.scss";

// Компонент карточки фильма
const FilmCard: FC<PropsWithChildren<IFilmCard>> = ({
  image,
  path,
  title,
  rating,
  date,
}) => {
  return (
    image && (
      <Link to={path} className={styles.Link}>
        <img src={image} alt="poster" />

        <div className={styles.info}>
          {rating && <span className={styles.rating}>{rating}</span>}
          <span>{parseTitle(title, TITLE_LIMIT)}</span>
          {date && <span className={styles.date}>{date}</span>}
        </div>
      </Link>
    )
  );
};

export { FilmCard };
