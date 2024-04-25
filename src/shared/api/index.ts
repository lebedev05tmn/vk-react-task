import axios, { AxiosResponse } from "axios";
import { ApiHeaders } from "../config";

export const createAPI = (url: string) => {
  const api = axios.create({
    baseURL: url,
    ...ApiHeaders,
  });

  const onSuccess = (response: AxiosResponse) => response;

  const onFail = (error: string) => {
    throw new Error(error);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
