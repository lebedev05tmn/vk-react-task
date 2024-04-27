import { FC, PropsWithChildren } from "react";
import styles from "./film-list.module.scss";

const FilmList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h2>Лучшие фильмы</h2>
      <ul className={styles.list}>{children}</ul>
    </>
  );
};

export { FilmList };
