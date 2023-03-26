import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { defaultImage } from "~/assets";

type PostHeader = {
  profilePic?: string;
  userName: string;
  community: string;
};

const Header: React.FC<PostHeader> = ({ profilePic, userName, community }) => {
  const { data: sessionData } = useSession();

  return (
    <div className="relative mb-3 flex break-words">
      {/* User Picture */}
      <div className="mr-4 block text-sm leading-normal">
        <Link href={"/profile/:id"}>
          <Image
            src={defaultImage}
            height={22}
            width={22}
            alt={`user profile pic`}
            className="h-8 w-8 whitespace-nowrap rounded-2xl border-0 border-solid border-white"
          />
        </Link>
      </div>
      {/* User Meta */}
      <div className="min-w-0 max-w-[calc(100%-60px)]">
        {/* Top */}
        <div className="flex items-center overflow-hidden text-ellipsis whitespace-nowrap">
          <div className="flex flex-wrap items-center overflow-hidden text-ellipsis whitespace-nowrap">
            {/* UserName */}
            <Link
              aria-label="user profile"
              className="relative z-[6] min-w-0 overflow-hidden whitespace-nowrap "
              href="/u/mq5V1knsedT9AYf7Ekh7rzmIvTg1"
            >
              <p className="my-0 mx-0 mr-1 block overflow-hidden  text-ellipsis whitespace-nowrap text-xs font-semibold leading-5 text-gray-dark">
                {userName}
              </p>
            </Link>
            <div className="flex items-center  text-left">
              <p className="">in</p>
              {/* ADD Category here */}
              <Link
                className="UserPostDetails_group-link__1D2Bz"
                href="/c/esg-sustainability"
              >
                <span className="text-xs font-semibold">{community}</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex items-center text-sm text-gray-dark">
          {/* User Tagline */}
          <p className="mx-0 mr-1 block overflow-hidden text-ellipsis  whitespace-nowrap text-xs font-medium leading-5 text-gray-dark">
            Business Graduate, Carbon Literate, Volunteer
          </p>
          {/* Content Meta */}
          <p className="a-typography p5 UserPostDetails_content-meta__1Fa_4">
            {" "}
            • 7h
          </p>
        </div>
      </div>
      {/* User Post Details options */}
      <div className="mr-0 ml-auto">
        <div className="relative block">
          <Link href="" className="relative z-[6] ">
            <span className="inline-flex origin-center  rotate-90 items-center justify-center break-words align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#9e9e9e"
                  d="M12 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
