import { api } from "../../api";
import { API_LOCALE } from "shared";

export const getRecommendationsList = async (id: number): Promise<any[]> => {
  const { data } = await api.get(`/${id}/recommendations?${API_LOCALE}`);
  return await data.results;
};
