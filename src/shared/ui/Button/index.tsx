import { FC, PropsWithChildren } from "react";
import styles from "./button.module.scss";

interface IButton {
  onClick?: () => void;
  isActive?: boolean;
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
