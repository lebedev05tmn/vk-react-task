import { api } from "../../api";
import { API_LOCALE } from "shared";

export const getRatedList = async (page: number): Promise<any[]> => {
  const { data } = await api.get(`/top_rated?${API_LOCALE}&page=${page}`);
  return await data.results;
};
