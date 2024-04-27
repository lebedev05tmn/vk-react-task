import { FC, PropsWithChildren } from "react";
import styles from "./film-list.module.scss";

// Компонент списка лучших фильмов
const FilmList: FC<PropsWithChildren> = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export { FilmList };
