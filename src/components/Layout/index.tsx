import React, { type FC, type PropsWithChildren } from "react";
import Sidebar from "~/components/shared/Sidebar/Sidebar";
import Header from "~/components/shared/Header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="m-0 bg-light p-0">
        <Header />
        <Sidebar />
        <div className="lg:pl-16">
          <div className="md:px-4 md:h-full lg:px-8 xl:px-[72px]">
            <div className="m-auto w-full md:h-full sm:h-full lg:max-w-[1400px]">
              <div className="sm:h-full md:h-full pt-16 flex flex-wrap px-[16px] md:pt-8 lg:px-4 md:px-0">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
