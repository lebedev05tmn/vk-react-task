import { api } from "../../api";
import { API_LOCALE, IDetailsData } from "shared";

// Функция для получения  данных фильма

export const getDetails = async (id: number): Promise<IDetailsData> => {
  const { data } = await api.get(`/${id}?${API_LOCALE}`);
  return await data;
};
