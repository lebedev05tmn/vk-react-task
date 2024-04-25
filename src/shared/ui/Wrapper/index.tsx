import { FC, PropsWithChildren } from "react";
import styles from "./Wrapper.module.scss";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.Wrapper}>{children}</main>;
};

export { Wrapper };
