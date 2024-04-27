import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./config";
import { IRoute } from "shared";

// Формирование роутера
const Routing: FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((props: IRoute) => (
          <Route {...props} />
        ))}
      </Routes>
    </Router>
  );
};

export { Routing };
