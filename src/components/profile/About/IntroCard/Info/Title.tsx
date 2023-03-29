import React from "react";

const Title = () => {
  return (
    <>
      {/* Name */}
      <div className="flex w-full flex-row items-center whitespace-normal break-words leading-snug ">
        <h2 className="text-[28px]mt-0 mb-1 block max-w-[230px] font-semibold">
          Innovative Changemaker
        </h2>
        <p className="mb-[2px] mt-0 pl-2 text-xl font-normal text-secondary ">
          (He/Him)
        </p>
      </div>

      {/* Bio */}
      <p className="mb-0 mt-2 text-xl font-normal text-dark">
        Building Hirable
      </p>

      {/* Username */}
      <p className="mt-2 mb-0 block text-base leading-normal  text-secondary">
        @changemaker
      </p>
    </>
  );
};

export default Title;
