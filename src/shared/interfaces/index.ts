import { AxiosRequestConfig } from "axios";
import { ReactElement, Dispatch, SetStateAction } from "react";

export interface IHeaders extends AxiosRequestConfig {
  headers: {
    Accept: string;
    Authorization: string;
  };
}

export interface IConst {
  [key: string]: string;
}

export interface IFilmData extends IPropsWithId {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFilmCard {
  image: string | undefined;
  path: string;
  title: string;
  rating?: number;
  date?: string;
  onClick?: Dispatch<SetStateAction<boolean>>;
}

export interface IRoute {
  key: string;
  path: string;
  element: ReactElement;
}

export interface IPagination {
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  onStartClick?: () => void;
  onEndClick?: () => void;
  count?: number;
}

export interface IPropsWithId {
  id: number;
}

export interface IGenre extends IPropsWithId {
  name: string;
}

export interface IPropsWithPage {
  page: number;
}

export interface IDetailsListProps extends IPropsWithId {
  setStatus: Dispatch<SetStateAction<boolean>>;
}

export interface IDetailsCard {
  rating: number;
  title: string;
  description: string;
  popularity: number;
  runtime: number;
  date: string;
  genres: IGenre[];
}
