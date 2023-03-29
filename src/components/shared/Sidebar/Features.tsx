import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Features: React.FC = () => {
  const router = useRouter();

  return (
    <div className="mx-3 mb-0 flex list-none flex-col overflow-hidden pl-0 md:mt-8">
      {/* SIDEBAR FEATURES BUTTONS */}
      {/* Home */}
      <div>
        <div
          title={"Home"}
          className={`${
            router.pathname === "/" ? " bg-light " : ""
          } mb-4 w-full items-center justify-center rounded-full hover:bg-light `}
        >
          <Link
            href="/"
            /* href={feature.path} */
            className={`max-w-10 flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-gray-dark transition `}
          >
            <div className="w-full items-center justify-center overflow-hidden align-middle">
              <span className="mr-5 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 20"
                >
                  <path
                    fill="#9e9e9e"
                    d="M12.457.657a.75.75 0 00-.93 0L.75 9.065l.93 1.185L3 9.215V18.5A1.5 1.5 0 004.5 20h15a1.5 1.5 0 001.5-1.5V9.222l1.32 1.028.93-1.178L12.457.657zM13.5 18.5h-3v-6h3v6zm1.5 0v-6a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 12.5v6H4.5V8.045L12 2.202l7.5 5.85V18.5H15z"
                  ></path>
                </svg>
              </span>
              <span className="h-6 w-6 align-middle leading-none">Home</span>
            </div>
          </Link>
        </div>
        
        {/* Referrals */}
        <div
          title={"Referrals"}
          className={`${
            router.pathname === "/GetReferred" ? " bg-light " : ""
          } mb-4 w-full items-center justify-center rounded-full hover:bg-light `}
        >
          <Link
            href="/GetReferred"
            /* href={feature.path} */
            className={`max-w-10 flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-gray-dark transition `}
          >
            <div className="w-full items-center justify-center overflow-hidden align-middle">
              <span className="mr-5 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#9e9e9e"
                    d="M20.25 18.75h-4.5A2.25 2.25 0 0013.5 21v1.5H15V21a.75.75 0 01.75-.75h4.5A.75.75 0 0121 21v1.5h1.5V21a2.25 2.25 0 00-2.25-2.25zM15 15a3 3 0 105.999 0A3 3 0 0015 15zm4.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4.5 15.75V15H3v.75A5.25 5.25 0 008.25 21h2.25v-1.5H8.25a3.75 3.75 0 01-3.75-3.75zM19.5 8.25V9H21v-.75A5.25 5.25 0 0015.75 3H13.5v1.5h2.25a3.75 3.75 0 013.75 3.75zM8.25 8.25h-4.5A2.25 2.25 0 001.5 10.5V12H3v-1.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75V12h1.5v-1.5a2.25 2.25 0 00-2.25-2.25zM6 7.5a3 3 0 100-6 3 3 0 000 6zM6 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                  ></path>
                </svg>
              </span>
              <span className="h-6 w-6 align-middle leading-none">
                Referrals
              </span>
            </div>
          </Link>
        </div>

        {/* Jobs */}
        <div
          title={"Jobs"}
          className={`${
            router.pathname === "/Job" ? " bg-light " : ""
          } mb-4 w-full items-center justify-center rounded-full hover:bg-light `}
        >
          <Link
            href="/Job"
            className={`max-w-10 flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-gray-dark transition `}
          >
            <div className="w-full items-center justify-center overflow-hidden align-middle">
              <span className="mr-5 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#9e9e9e"
                    d="M21 7.5h-4.5v-3A1.5 1.5 0 0015 3H9a1.5 1.5 0 00-1.5 1.5v3H3A1.5 1.5 0 001.5 9v10.5A1.5 1.5 0 003 21h18a1.5 1.5 0 001.5-1.5V9A1.5 1.5 0 0021 7.5zm-12-3h6v3H9v-3zm-6 15V9h18v10.5H3z"
                  ></path>
                </svg>
              </span>
              <span className="h-6 w-6 align-middle leading-none">Jobs</span>
            </div>
          </Link>
        </div>

        {/* Events */}
        <div
          title={"Events"}
          className={`${
            router.pathname === "/Events" ? " bg-light " : ""
          } mb-4 w-full items-center justify-center rounded-full hover:bg-light `}
        >
          <Link
            href="/Events"
            className={`max-w-10 flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-gray-dark transition `}
          >
            <div className="w-full items-center justify-center overflow-hidden align-middle">
              <span className="mr-5 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#9e9e9e"
                    d="M21 4.5A1.5 1.5 0 0019.5 3h-3V1.5H15V3H9V1.5H7.5V3h-3A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h3v-1.5h-3v-15h3V6H9V4.5h6V6h1.5V4.5h3V9H21V4.5z"
                  ></path>
                  <path
                    fill="#9e9e9e"
                    d="M15.75 11.25l1.912 3.704 4.088.593-3 2.883.75 4.07-3.75-1.922L12 22.5l.75-4.07-3-2.883 4.2-.594 1.8-3.703z"
                  ></path>
                </svg>
              </span>
              <span className="h-6 w-6 align-middle leading-none">Events</span>
            </div>
          </Link>
        </div>

        {/* invites */}
        <div
          title={"Invite Friends"}
          className={`${
            router.pathname === "/InviteFriends" ? " bg-light " : ""
          } mb-4 w-full items-center justify-center rounded-full hover:bg-light `}
        >
          <Link
            href="/InviteFriends"
            className={`max-w-10 flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-gray-dark transition `}
          >
            <div className="w-full items-center justify-center overflow-hidden align-middle">
              <span className="mr-5 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#9e9e9e"
                    d="M19.5 7.50073H17.4287C17.9169 6.77921 18.1062 5.8965 17.9569 5.03825C17.8076 4.18 17.3313 3.4131 16.6281 2.89886C15.9249 2.38461 15.0497 2.16311 14.1866 2.28093C13.3234 2.39875 12.5396 2.84672 12 3.5306C11.4592 2.8501 10.6761 2.40523 9.8146 2.28917C8.95315 2.17311 8.08021 2.39486 7.37858 2.90797C6.67696 3.42108 6.20107 4.18576 6.05059 5.04187C5.9001 5.89797 6.08669 6.7791 6.57127 7.50073H4.5C4.10233 7.50122 3.72109 7.65942 3.43989 7.94061C3.15869 8.22181 3.0005 8.60305 3 9.00073V12.0007C3.0005 12.3984 3.15869 12.7796 3.43989 13.0608C3.72109 13.342 4.10233 13.5002 4.5 13.5007V21.0007C4.5005 21.3984 4.65869 21.7796 4.93989 22.0608C5.22109 22.342 5.60233 22.5002 6 22.5007H18C18.3977 22.5002 18.7789 22.342 19.0601 22.0608C19.3413 21.7796 19.4995 21.3984 19.5 21.0007V13.5007C19.8977 13.5002 20.2789 13.342 20.5601 13.0608C20.8413 12.7796 20.9995 12.3984 21 12.0007V9.00073C20.9995 8.60305 20.8413 8.22181 20.5601 7.94061C20.2789 7.65942 19.8977 7.50122 19.5 7.50073ZM12.75 5.62573C12.75 5.25489 12.86 4.89237 13.066 4.58403C13.272 4.27569 13.5649 4.03537 13.9075 3.89345C14.2501 3.75154 14.6271 3.71441 14.9908 3.78675C15.3545 3.8591 15.6886 4.03768 15.9508 4.2999C16.213 4.56212 16.3916 4.89622 16.464 5.25993C16.5363 5.62365 16.4992 6.00065 16.3573 6.34326C16.2154 6.68587 15.975 6.9787 15.6667 7.18473C15.3584 7.39076 14.9958 7.50073 14.625 7.50073H12.75V5.62573ZM9.375 3.75073C9.8721 3.75132 10.3487 3.94906 10.7002 4.30056C11.0517 4.65206 11.2494 5.12863 11.25 5.62573V7.50073H9.375C8.87772 7.50073 8.40081 7.30318 8.04917 6.95155C7.69754 6.59992 7.5 6.12301 7.5 5.62573C7.5 5.12845 7.69754 4.65153 8.04917 4.2999C8.40081 3.94827 8.87772 3.75073 9.375 3.75073ZM4.5 9.00073H11.25V12.0007H4.5V9.00073ZM6 13.5007H11.25V21.0007H6V13.5007ZM18.0009 21.0007H12.75V13.5007H18L18.0009 21.0007ZM12.75 12.0007V9.00073H19.5L19.5009 12.0007H12.75Z"
                  ></path>
                </svg>
              </span>
              <span className="h-6 w-6 align-middle leading-none">
                Invite Friends
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
