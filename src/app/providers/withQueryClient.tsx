import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// HOC - компонент с поддержкой react-query

const withQueryClient: CallableFunction =
  (Component: FC) => (client: QueryClient) => {
    return (
      <QueryClientProvider client={client}>
        <Component />
      </QueryClientProvider>
    );
  };

export { withQueryClient };
