import { QueryClient } from "react-query";
import { IHeaders, IConst } from "../interfaces";

// URL для API

export const API_URL: string = import.meta.env.VITE_API_URL;

// URL для получения картинок

export const IMAGES_URL: string = import.meta.env.VITE_IMAGES_URL;

// URL для авторизации запросов к API

export const API_AUTH_KEY: string = import.meta.env.VITE_API_AUTH_KEY;

// Локализации для запрсоов к API

export const API_LOCALE = "language=ru-RU";

// Headers для запросов к API

export const ApiHeaders: IHeaders = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_AUTH_KEY}`,
  },
};

// Инициализация клиента для react-query

export const queryClient: QueryClient = new QueryClient();

// Зависимости роутинга приложения

export const AppRoute: IConst = {
  HOME: "/",
  DETAILS: "/film/",
  NOT_FOUND: "*",
};

// Константы типов картинок

export const ImagesType: IConst = {
  BACKDROP: "backdrop_path",
  POSTER: "poster_path",
};

// Константа длины заголовка карточки

export const TITLE_LIMIT: number = 33;
