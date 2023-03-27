import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="relative block w-full flex-shrink-0 justify-end overflow-hidden px-4 md:max-w-1/4 md:flex-1/2 lg:max-w-[33.33%] lg:flex-[0_0_33.33%] xl:flex-1/4">
      <div className="mb-0 flex list-none flex-row items-center justify-end pl-0">
        {/* {header_icons.map(({ id, title, icon, path }) => ( */}
        {/* Messages Icon */}

        <div title="Messages" className="ml-2 rounded-full hover:bg-white">
          <Link
            href="/"
            className="color-[#212121] relative flex h-8 w-8 items-center justify-center rounded-full bg-transparent object-contain p-0 transition-[.3s]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#9e9e9e"
                fill-rule="evenodd"
                d="M22.504 11.36c0 5.444-4.414 9.858-9.859 9.858a9.818 9.818 0 01-4.371-1.02L2.246 22.5l-.75-.883 2.398-5.713a9.817 9.817 0 01-1.108-4.545c0-5.445 4.414-9.859 9.86-9.859 5.444 0 9.858 4.414 9.858 9.86zm-1.519.008a8.34 8.34 0 01-12.652 7.139l-4.447 1.822 1.8-4.366a8.34 8.34 0 1115.299-4.596z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#9e9e9e"
                d="M18.258 8.885H7.571v1.5h10.687v-1.5zM14.25 12.885H7.571v1.5h6.68v-1.5z"
              ></path>
            </svg>
          </Link>
        </div>
        {/* Bookmark */}
        <div title="Bookmark" className="ml-2 rounded-full hover:bg-white">
          <Link
            href="/"
            className="color-[#212121] relative flex h-8 w-8 items-center justify-center rounded-full bg-transparent object-contain p-0 transition-[.3s]"
          >
            <span className="inline-flex items-center justify-center align-middle">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 16 24"
              >
                <path
                  fill="#9e9e9e"
                  d="M14 2v17.063L8.675 16.37 8 16.032l-.675.338L2 19.062V2h12zm0-1.5H2A1.5 1.5 0 00.5 2v19.5L8 17.75l7.5 3.75V2A1.5 1.5 0 0014 .5z"
                />
              </svg>
            </span>
          </Link>
        </div>
        {/* Notification */}
        <div title="Notification" className="ml-2 rounded-full hover:bg-white">
          <Link
            href="/"
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-transparent object-contain p-0 text-[#212121] transition-[.3s]"
          >
            <span className="inline-flex items-center justify-center align-middle">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
              >
                <path
                  d="M19.525 15.225L17.5 13.2V9.75C17.4976 7.88758 16.8071 6.09172 15.5612 4.70739C14.3153 3.32306 12.6019 2.44789 10.75 2.25V0.75H9.25001V2.25C7.40326 2.46053 5.69734 3.33944 4.45392 4.72102C3.2105 6.10259 2.51552 7.89135 2.50001 9.75V13.2L0.475012 15.225C0.40181 15.2911 0.343791 15.3722 0.304949 15.4628C0.266108 15.5535 0.247365 15.6514 0.250012 15.75V18C0.243383 18.1002 0.258239 18.2007 0.293585 18.2947C0.328931 18.3887 0.383952 18.474 0.454964 18.545C0.525976 18.6161 0.611339 18.6711 0.705339 18.7064C0.799339 18.7418 0.899805 18.7566 1.00001 18.75H6.25001C6.25001 19.7446 6.6451 20.6984 7.34836 21.4016C8.05162 22.1049 9.00545 22.5 10 22.5C10.9946 22.5 11.9484 22.1049 12.6517 21.4016C13.3549 20.6984 13.75 19.7446 13.75 18.75H19C19.1002 18.7566 19.2007 18.7418 19.2947 18.7064C19.3887 18.6711 19.474 18.6161 19.5451 18.545C19.6161 18.474 19.6711 18.3887 19.7064 18.2947C19.7418 18.2007 19.7566 18.1002 19.75 18V15.75C19.7527 15.6514 19.7339 15.5535 19.6951 15.4628C19.6562 15.3722 19.5982 15.2911 19.525 15.225ZM10 21C9.40327 21 8.83098 20.7629 8.40902 20.341C7.98706 19.919 7.75001 19.3467 7.75001 18.75H12.25C12.25 19.3467 12.013 19.919 11.591 20.341C11.169 20.7629 10.5967 21 10 21ZM18.25 17.25H1.75001V16.05L3.77501 14.025C3.84821 13.9589 3.90623 13.8778 3.94507 13.7872C3.98392 13.6965 4.00266 13.5986 4.00001 13.5V9.75C4.00001 8.1587 4.63215 6.63258 5.75737 5.50736C6.88259 4.38214 8.40871 3.75 10 3.75C11.5913 3.75 13.1174 4.38214 14.2427 5.50736C15.3679 6.63258 16 8.1587 16 9.75V13.5C15.9974 13.5986 16.0161 13.6965 16.0549 13.7872C16.0938 13.8778 16.1518 13.9589 16.225 14.025L18.25 16.05V17.25Z"
                  fill="#9E9E9E"
                ></path>
              </svg>
            </span>
          </Link>
        </div>

        {/* ))} */}
      </div>
    </div>
  );
};

export default CTA;
