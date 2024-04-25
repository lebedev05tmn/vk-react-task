import { FC } from "react";
import { withQueryClient } from "./providers/withQueryClient";
import { Routing } from "pages";
import { queryClient } from "shared";
import "./styles/global.scss";

const App: FC = () => {
  return withQueryClient(Routing)(queryClient);
};

export default App;
