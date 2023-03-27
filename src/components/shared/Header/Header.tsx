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
        <div className="block max-h-14 sm:hidden md:hidden"></div>
        {/* NAV/HEADER */}
        <nav className="fixed right-0 left-0 top-0 z-[1040] flex flex-row flex-nowrap items-center justify-start bg-[linear-gradient(280.39deg,_#071530_64.59%,#405a86_109.59%)] py-1 px-2 shadow-[0_2px_8px_rgba(0,0,0,.12)] lg:h-14 ">
          {/* Flex-flow: row nowrap */}
          <div className="m-auto flex flex-start w-full py-0 xl:pr-10 xl:pl-20 sm:p-0 md:max-w-[512px] md:p-0 lg:flex lg:max-w-[512px] lg:items-center lg:p-0">
            {/* ASIDE LOGO */}
            <SidebarOpen />
            {/* HEADER ITEMS */}
            <div className="-mx-4 flex flex-wrap items-center xl:justify-between lg:grow md:grow sm:grow">
              {/* NOVO LOGO */}
              <NovoLogo />
              {/* Divider */}
              <div className="md:hidden relative xl:block w-full px-4 lg:block  xl:max-w-1/2 xl:flex-1/2">
              </div>
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
