import { FC } from "react";
import { Link } from "react-router-dom";

interface IHeader {
  path: string;
}

const Header: FC<IHeader> = ({ path }) => {
  return (
    <header>
      <Link to={path}>Фильмы</Link>
    </header>
  );
};

export { Header };
