/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { communities, nav_features } from "~/constants";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { SideOpenI } from "src/assets";

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
        sidebarOpen ? "hover:z-[1050] hover:w-64 " : ""
      } fixed top-0 left-0 z-[1038] hidden h-screen w-16 justify-items-center overflow-hidden overflow-y-auto bg-white p-0 text-black shadow-[0_2px_8px_rgb(0_0_0/12%)] after:fixed after:right-0 after:z-[1037] after:h-screen after:w-full after:bg-black after:content-[""] hover:z-[1050] hover:w-64 xl:block `}
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
          <div className="mx-3 mb-0 flex list-none flex-col overflow-hidden pl-0 md:mt-8">
            {/* SIDEBAR FEATURES BUTTONS */}
            <div>
              {nav_features.map((feature) => (
                <div
                  key={feature.id}
                  title={feature.title}
                  className={`${
                    active === feature.path ? " bg-light " : ""
                  } mb-4 w-full items-center justify-center rounded-full hover:bg-light `}
                >
                  <Link
                    href={feature.path}
                    className={`max-w-10 flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-gray-dark transition `}
                    onClick={() => setActive(feature.path)}
                  >
                    <div className="w-full items-center justify-center align-middle overflow-hidden">
                      <span className="mr-5 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap leading-none">
                        <Image src={feature.icon} alt={feature.title} />
                      </span>
                      <span className="h-6 w-6 align-middle leading-none">{feature.title}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* FIXME: complete divider sidebar */}
          <hr />
          {/* Communities buttons */}
          <div className="mb-4 w-full items-center justify-center rounded-full hover:bg-light">
            <button
              className={` max-w-10 flex h-10 w-full items-center whitespace-nowrap px-2 text-gray-dark transition `}
            >
              <div className="w-full overflow-hidden pr-4">
                <span className="text-4xl font-light mr-2 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap p-6 align-middle leading-none text-gray">
                  +
                </span>
                <span className="align-middle">Add Communities</span>
              </div>
            </button>
          </div>

          {categories?.map(({ id, title, emoji }) => (
            <div
              key={id}
              title={title}
              className="mb-4 w-full items-center justify-center rounded-full hover:bg-light"
            >
              <Link
                href={"/"}
                className={`max-w-10 flex h-10 w-full items-center whitespace-nowrap px-2 text-gray-dark transition `}
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
