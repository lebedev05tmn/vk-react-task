import { FC, PropsWithChildren } from "react";
import { DetailsWithDiv } from "features";
import { IPropsWithId } from "shared/interfaces";

const DetailsWithData: FC<PropsWithChildren<IPropsWithId>> = ({ id }) => {
  return <DetailsWithDiv id={id} />;
};

export { DetailsWithData };
