import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

interface IHeader {
  path: string;
}

const Header: FC<IHeader> = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        <h2>Кино справочник</h2>
      </Link>
    </header>
  );
};

export { Header };
