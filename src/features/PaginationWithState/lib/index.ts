import { Dispatch } from "react";

// Мемоизированные функции изменения стейта

export const handlePage = (num: number, setPage: Dispatch<number>): void => {
  setPage(num);
  localStorage.setItem("page", num.toString());
};

export const handleCount = (num: number, setCount: Dispatch<number>): void => {
  setCount(num);
  localStorage.setItem("count", num.toString());
};
