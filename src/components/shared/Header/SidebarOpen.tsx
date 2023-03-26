import React from "react";


const SidebarOpen = () => {
  return (
    <button className="m-0 flex h-14 w-14 shrink-0 items-center justify-center overflow-visible rounded-none border border-solid border-transparent bg-transparent p-[0.75rem] text-center text-xl font-normal normal-case leading-none lg:absolute lg:top-0 lg:left-0 lg:w-16">
      <span className="align-center inline-flex justify-center">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#9e9e9e"
            d="M21 11.333H3v1.5h18v-1.5zM21 18.167H3v1.5h18v-1.5zM21 4.5H3V6h18V4.5z"
          />
        </svg>
      </span>
    </button>
  );
};

export default SidebarOpen;
