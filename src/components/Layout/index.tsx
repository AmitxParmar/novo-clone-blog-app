import React, { type FC, type PropsWithChildren } from "react";
import Sidebar from "~/components/shared/Sidebar/Sidebar";
import Header from "~/components/shared/Header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="m-0 bg-light p-0">
        <Header />
        <Sidebar />
        <div className="lg:pl-16">{children ?? null}</div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
