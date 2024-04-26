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

export interface IFilmData {
  id: number;
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
  rating: number;
  date: string;
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
