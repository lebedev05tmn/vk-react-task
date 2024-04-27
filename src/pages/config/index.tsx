import { MainPage } from "../Main";
import { DetailsPage } from "../Details";
import { NotFoundPage } from "../NotFound";
import { AppRoute, IRoute } from "shared";

// Конфиг для роутов приложения

export const routes: IRoute[] = [
  {
    path: AppRoute.HOME,
    element: <MainPage />,
    key: "main_page",
  },
  {
    path: AppRoute.DETAILS + ":id",
    element: <DetailsPage />,
    key: "details_page",
  },
  {
    path: AppRoute.NOT_FOUND,
    element: <NotFoundPage />,
    key: "404_page",
  },
];
