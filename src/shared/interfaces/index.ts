import { AxiosRequestConfig } from "axios";

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
