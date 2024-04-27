import { FC } from "react";
import { useQuery } from "react-query";
import { getDetails } from "../lib";
import {
  DetailsDescription,
  ImagesType,
  getImageUrl,
  IPropsWithId,
} from "shared";

const Details: FC<IPropsWithId> = ({ id }) => {
  const { data, isSuccess } = useQuery<any>("details", () => getDetails(id));
  return (
    isSuccess && (
      <>
        <DetailsDescription
          rating={data.vote_average}
          title={data.original_title}
          description={data.overview}
          popularity={data.popularity}
          runtime={data.runtime}
          date={data.release_date}
          genres={data.genres}
        />
        <img src={getImageUrl(data, ImagesType.BACKDROP)} alt="backrop" />
      </>
    )
  );
};

export { Details };
