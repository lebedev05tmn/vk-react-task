import axios, { AxiosResponse } from "axios";
import { ApiHeaders } from "../config";

// Функция собирающая API axios

export const createAPI = (url: string) => {
  const api = axios.create({
    baseURL: url,
    ...ApiHeaders,
  });

  // Обработчик ответов
  const onSuccess = (response: AxiosResponse) => response;

  // Обработчик ошибок
  const onFail = (error: string) => {
    throw new Error(error);
  };

  // Подписка на ответы
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
