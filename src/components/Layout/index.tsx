import React, { type FC, type PropsWithChildren } from "react";
import Sidebar from "~/components/shared/Sidebar/Sidebar";
import Header from "~/components/shared/Header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="m-0 p-0">
        <Header />
        <Sidebar />
        <div className="bg-light  md:p-0 lg:pl-16">
          <div className="px-4 md:h-full lg:px-8 xl:px-20">
            <div className="m-auto w-full md:h-full sm:h-full lg:max-w-[1400px]">
              <div className="sm:h-full pt-16 flex xl:flex-wrap px-[16px] md:pt-8 lg:px-4 ">
                {children ?? null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
