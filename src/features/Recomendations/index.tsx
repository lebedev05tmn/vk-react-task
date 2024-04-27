import { FC, PropsWithChildren } from "react";
import { IPropsWithId } from "shared";
import { RecommendationsList } from "entities";
import styles from "./recommendations.module.scss";

const Recommendations: FC<PropsWithChildren<IPropsWithId>> = ({ id }) => {
  return (
    <>
      <h2>Похожие фильмы</h2>
      <ul className={styles.recommendations}>
        <RecommendationsList id={id} />
      </ul>
    </>
  );
};

export { Recommendations };
