import { FC } from "react";
import { withQueryClient } from "./providers/withQueryClient";
import { Routing } from "pages";
import { queryClient } from "shared";
import "@fontsource/montserrat";
import "./styles/global.scss";

// App - компонент из Routing с использованием QueryClient

const App: FC = () => {
  return withQueryClient(Routing)(queryClient);
};

export default App;
