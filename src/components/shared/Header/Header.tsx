/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { NovoI, SideOpenI } from "src/assets";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import SidebarOpen from "./SidebarOpen";
import CTA from "./CTA";

const Header: React.FC = () => {
    
  return (
    <React.Fragment>
      <div>
        {/* NAV_SPACER */}
        <div className="max-h-14 block sm:hidden md:hidden"></div>
        {/* NAV/HEADER */}
        <nav className="lg:h-14 lg:z-[1040] flex-row flex-nowrap justify-start flex fixed right-0 left-0 top-0 items-center py-1 px-2 bg-[linear-gradient(280.39deg,_#071530_64.59%,#405a86_109.59%)] shadow-[0_2px_8px_rgba(0,0,0,.12)] ">
          {/* Flex-flow: row nowrap */}
          <div className="lg:flex lg:items-center md:max-w-[512px] lg:max-w-[512px] lg:w-full lg:m-auto">
            {/* ASIDE LOGO */}
            <SidebarOpen />
            {/* HEADER ITEMS */}
            <div className="mx-4 flex flex-wrap items-center justify-between">
              {/* NOVO LOGO */}
              <div className="static flex xl:flex-1/4">
                <Link
                  href="/"
                  aria-label="home page"
                  className="m-0 ml-9 inline-block whitespace-nowrap py-[.1925rem] text-xl text-white"
                >
                  <Image
                    onClick={() => void signIn("google")}
                    src={NovoI}
                    alt="Join Novo Logo"
                  />
                </Link>
              </div>
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
