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

export interface IPage {
  setPage?: Dispatch<SetStateAction<number>>;
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

export interface IDetailsData extends IPropsWithId {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | IBelongsToCollection;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IBelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
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

export interface IButton {
  onClick?: () => void;
  isActive?: boolean;
}
