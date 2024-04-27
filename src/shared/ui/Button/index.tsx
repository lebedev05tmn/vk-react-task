import { FC, PropsWithChildren } from "react";
import { IButton } from "../../interfaces";
import styles from "./button.module.scss";

// Компонент кнопки
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
