import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Features from "./Features";
import CreateCommunity from "~/components/Modals/CreateCommunity";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [title, setCategory] = useState<string>("");
  const [emoji, setEmoji] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // verify session
  const { data: sessionData } = useSession();

  /* Get All categories and verify session user */
  const { data: categories, refetch: refetchCategories } =
    api.category.getAll.useQuery(undefined, {
      enabled: sessionData?.user != undefined,
    });

  // createCategory
  const createCategory = api.category.create.useMutation({
    onSuccess: () => {
      void refetchCategories();
    },
  });

  const closeModal = () => {
    setIsOpen(false);
    createCategory.mutate({
      emoji,
      title,
    });
  };

  return (
    <aside
      role="navigation"
      className={`${
        sidebarOpen ? "hover:z-[1050] hover:w-64" : "z-[1038]"
      } fixed top-0 left-0 hidden h-screen w-16 justify-items-center overflow-hidden overflow-y-auto bg-white p-0 text-black shadow-[0_2px_8px_rgb(0_0_0/12%)] after:fixed after:right-0 after:z-[1037] after:h-screen after:w-full after:bg-black after:content-[""] hover:z-[1050] hover:w-64 xl:block`}
    >
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:w-15 m-0 ml-2 flex shrink-0 transform-none items-center justify-center justify-items-center fill-blue p-3 text-xl leading-none lg:h-14"
      >
        <span className="inline-flex items-center justify-items-center text-xl">
          {/* TODO: add three lines svg */}
        </span>
      </button>
      <div className="relative h-[calc(100vh-56px)] w-full touch-auto overflow-hidden pb-4 text-base font-normal">
        {/* NAV CONTAINER */}
        <div className="pb-20">
          {/* NAV ICONS */}
          <Features />
          <hr />
          <div className="mx-3 mb-0 flex list-none flex-col overflow-hidden pl-0 md:mt-8">
            {/* Communities buttons */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              title={"invite friends"}
              className={`mb-4 w-full items-center justify-center rounded-full hover:bg-light`}
            >
              <div
                className={`max-w-10 flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-gray-dark transition `}
              >
                <div className="w-full items-center justify-center justify-items-center overflow-hidden align-middle">
                  <span className="mr-5 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap leading-none">
                    <CreateCommunity
                      closeModal={closeModal}
                      setIsOpen={setIsOpen}
                      isOpen={isOpen}
                      setEmoji={setEmoji}
                      setCategory={setCategory}
                    />
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
                  <span className="h-6 w-6 leading-none">Add Communities</span>
                </div>
              </div>
            </div>

            {categories?.map(({ id, title, emoji }) => (
              <div
                key={id}
                title={title}
                className="mb-4 w-full items-center justify-center rounded-full hover:bg-light"
              >
                <Link
                  href={`/${title}`}
                  className={`max-w-10 flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-gray-dark transition `}
                >
                  <div className="w-full items-center justify-center overflow-hidden align-middle">
                    <span className="mr-5 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap leading-none">
                      {emoji}
                    </span>
                    <span className="h-6 w-6 items-center justify-center leading-none">
                      {title}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
