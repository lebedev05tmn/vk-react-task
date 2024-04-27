import { FC, PropsWithChildren } from "react";
import styles from "./wrap.module.scss";

// Компонент - обёртка для контента

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  // Весь контент в main

  return <main className={styles.Wrapper}>{children}</main>;
};

export { Wrapper };
