import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { IFilmCard } from "../../interfaces";
import styles from "./film-card.module.scss";

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
        <p>{title}</p>
        <p>{rating}</p>
        <p>{date}</p>
      </Link>
    )
  );
};

export { FilmCard };
