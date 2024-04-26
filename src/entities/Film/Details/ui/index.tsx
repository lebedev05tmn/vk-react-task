import { FC } from "react";
import { useQuery } from "react-query";
import { getDetails } from "../lib";

interface IProps {
  id: number;
}

const Details: FC<IProps> = ({ id }) => {
  const { data, isSuccess } = useQuery<any>("details", () => getDetails(id));
  return isSuccess && <div>{data.title}</div>;
};

export { Details };
