import { FC, PropsWithChildren } from "react";
import { Header, Wrapper } from "shared";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header path="/" />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export { Layout };
