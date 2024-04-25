import { QueryClient } from "react-query";
import { IHeaders, IConst } from "../interfaces";

export const API_URL: string = import.meta.env.VITE_API_URL;

export const IMAGES_URL: string = import.meta.env.VITE_IMAGES_URL;

export const API_AUTH_KEY: string = import.meta.env.VITE_API_AUTH_KEY;

export const API_LOCALE = "language=ru-RU";

export const ApiHeaders: IHeaders = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_AUTH_KEY}`,
  },
};

export const queryClient: QueryClient = new QueryClient();

export const AppRoute: IConst = {
  HOME: "/",
  DETAILS: "/film/",
  NOT_FOUND: "*",
};

export const ImagesType: IConst = {
  BACKDROP: "backdrop_path",
  POSTER: "poster_path",
};
