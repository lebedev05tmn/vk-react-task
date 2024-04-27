import { api } from "../../api";
import { API_LOCALE, IFilmData } from "shared";

// Функция для получения списка лучших фильмов

export const getRatedList = async (page: number): Promise<IFilmData[]> => {
  const { data } = await api.get(`/top_rated?${API_LOCALE}&page=${page}`);
  return await data.results;
};
