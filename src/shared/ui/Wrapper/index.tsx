import { FC, PropsWithChildren } from "react";
import styles from "./wrap.module.scss";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.Wrapper}>{children}</main>;
};

export { Wrapper };
