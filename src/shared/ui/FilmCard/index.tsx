import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styles from "./film.module.scss";

interface IProps {
  image: string | undefined;
  path: string;
  title: string;
  rating: number;
  date: string;
}

const FilmCard: FC<PropsWithChildren<IProps>> = ({
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
