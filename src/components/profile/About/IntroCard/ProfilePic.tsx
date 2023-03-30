import Image from "next/image";
import React from "react";
import defaultImage from "public/DefaultProfilePic.jpg";

const ProfilePic = () => {
  return (
    <div className="filter-[drop-shadow(0_2px_8px_rgba(0,0,0,.12))] flex h-[156px] w-[156px] rounded-[50%] border-4  border-solid border-white outline-black sm:md:m-[-80px_0_30px_16px]">
      <Image
        height={156}
        width={156}
        src={defaultImage}
        alt="profilePic"
        className="relative rounded-full bg-[50%_50%/cover_no-repeat_white]"
      />
    </div>
  );
};

export default ProfilePic;
