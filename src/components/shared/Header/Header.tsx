/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import SidebarOpen from "./SidebarOpen";
import CTA from "./CTA";
import NovoLogo from "./NovoLogo";

const Header: React.FC = () => {
    
  return (
    <React.Fragment>
      <div>
        {/* NAV_SPACER */}
        <div className="max-h-14 block sm:hidden md:hidden"></div>
        {/* NAV/HEADER */}
        <nav className="lg:h-14 z-[1040] flex-row flex-nowrap justify-start flex fixed right-0 left-0 top-0 items-center py-1 px-2 bg-[linear-gradient(280.39deg,_#071530_64.59%,#405a86_109.59%)] shadow-[0_2px_8px_rgba(0,0,0,.12)] ">
          {/* Flex-flow: row nowrap */}
          <div className="lg:flex lg:p-0 md:p-0 sm:p-0 lg:items-center md:max-w-[512px] lg:max-w-[512px] w-full m-auto py-0 pr-10 pl-20">
            {/* ASIDE LOGO */}
            <SidebarOpen />
            {/* HEADER ITEMS */}
            <div className="mx-4 flex flex-wrap items-center justify-between">
              {/* NOVO LOGO */}
            <NovoLogo/>
              {/* Divider */}
              <div className="relative block w-full px-4 lg:block lg:max-w-[33.33%] lg:flex-[0_0_33.33%] xl:max-w-1/2 xl:flex-1/2"></div>
              {/* CTA */}
              <CTA />

            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
