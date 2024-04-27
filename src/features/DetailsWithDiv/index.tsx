import { FC } from "react";
import { Details } from "entities";
import styles from "./details.module.scss";
import { IPropsWithId } from "shared";

// Обёртка для компонента Details

const DetailsWithDiv: FC<IPropsWithId> = ({ id }) => {
  return (
    <div className={styles.block}>
      <Details id={id} />
    </div>
  );
};

export { DetailsWithDiv };
