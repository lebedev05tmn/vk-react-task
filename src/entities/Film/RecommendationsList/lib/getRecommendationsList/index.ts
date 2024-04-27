import { api } from "../../api";
import { API_LOCALE, IFilmData } from "shared";

// Функция для получения списка похожих фильмов

export const getRecommendationsList = async (
  id: number
): Promise<IFilmData[]> => {
  const { data } = await api.get(`/${id}/recommendations?${API_LOCALE}`);
  return await data.results;
};
