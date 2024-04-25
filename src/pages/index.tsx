import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./Main";
import { DetailsPage } from "./Details";
import { NotFoundPage } from "./NotFound";
import { AppRoute } from "shared";

const routes = [
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

const Routing: FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map(props => (
          <Route {...props} />
        ))}
      </Routes>
    </Router>
  );
};

export { Routing };
