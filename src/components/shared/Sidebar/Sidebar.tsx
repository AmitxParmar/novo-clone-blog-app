/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { SideOpenI } from "src/assets";
import Features from "./Features";

const Sidebar: React.FC = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const [active, setActive] = useState<string>("/");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [createCommunity, setCreateCommunity] = useState<string>("");

  const { data: categories } = api.category.getAll.useQuery(undefined, {
    enabled: sessionData?.user != undefined,
  });

  useEffect(() => {
    setActive("/");
  }, []);

  /* const updateActive = (val: string) => setActive(val); */
  return (
    <aside
      role="navigation"
      className={`${
        sidebarOpen ? "hover:z-[1050] hover:w-64 " : "z-[1038]"
      } fixed top-0 left-0  hidden h-screen w-16 justify-items-center overflow-hidden overflow-y-auto bg-white p-0 text-black shadow-[0_2px_8px_rgb(0_0_0/12%)] after:fixed after:right-0 after:z-[1037] after:h-screen after:w-full after:bg-black after:content-[""] hover:z-[1050] hover:w-64 xl:block `}
    >
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:w-15 m-0 ml-2 flex shrink-0 transform-none items-center justify-center justify-items-center fill-blue p-3 text-xl leading-none lg:h-14"
      >
        <span className="inline-flex items-center justify-items-center text-xl">
          <Image src={SideOpenI} alt="navbar" />
        </span>
      </button>
      <div className="relative h-[calc(100vh-56px)] w-full touch-auto overflow-hidden pb-4 text-base font-normal">
        {/* NAV CONTAINER */}
        <div className="pb-20">
          {/* NAV ICONS */}
          <Features setActive={setActive} active={active} />
          {/* FIXME: complete divider sidebar */}
          <hr />
          {/* Communities buttons */}
          <div className="nav-item mb-4 block ">
            <Link
              href="/"
              className="nav-link rounded-pill flex items-center whitespace-nowrap w-10 h-10 px-2 relative text-dark rounded-full p-1.5 "
              aria-label="add communities"
            >
              <span className="nav-icon inline-flex items-center justify-center w-6 h-6 leading-none whitespace-nowrap text-dark ">
                <span className="a-icon inline-flex items-center justify-center align-middle leading-none whitespace-nowrap ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="none"
                    viewBox="0 0 28 28"
                  >
                    <path
                      fill="#9e9e9e"
                      d="M21 13.125h-6.125V7h-1.75v6.125H7v1.75h6.125V21h1.75v-6.125H21v-1.75z"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="nav-text hidden overflow-hidden text-ellipsis whitespace-nowrap pl-4 text-dark">
                <span className="a-typography span">My Communities</span>
              </span>
            </Link>
          </div>

          {categories?.map(({ id, title, emoji }) => (
            <div
              key={id}
              title={title}
              className="mb-4 w-full items-center justify-center rounded-full hover:bg-light"
            >
              <Link
                href={"/"}
                className={`max-w-10 flex h-10 w-full items-center whitespace-nowrap px-2 text-gray-dark transition`}
              >
                <div className="w-full overflow-hidden pr-4">
                  <span className="text-md mr-2 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap p-6 leading-none">
                    {emoji}
                  </span>
                  <span className="">{title}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
