import { type ReactNode } from "react";
import { Nav } from ".";

interface IProps {
  children: ReactNode;
}

const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <div>
      <Nav />

      {children}
    </div>
  );
};

export default Layout;
