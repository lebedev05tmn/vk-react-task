import { api } from "../../api";
import { API_LOCALE } from "../../../../../shared";

export const getDetails = async (id: number): Promise<any[]> => {
  const { data } = await api.get(`/${id}?${API_LOCALE}`);
  return await data.results;
};
