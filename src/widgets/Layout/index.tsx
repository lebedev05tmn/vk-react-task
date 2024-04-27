import { FC, PropsWithChildren } from "react";
import { Header, Wrapper } from "shared";

// Обёртка для страницы

const Layout: FC<PropsWithChildren> = ({ children }) => {
  // Контент попадает в Wrapper

  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export { Layout };
