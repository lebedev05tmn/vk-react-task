import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./not-fond-text.module.scss";

// Компонент 404 ошибки

const NotFoundText: FC = () => {
  // Перелинкация не на AppRoute ради полного переиспользоавания компонента

  return (
    <div className={styles.block}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export { NotFoundText };
