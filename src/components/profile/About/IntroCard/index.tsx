import React from "react";
import Banner from "./Banner";
import Image from "next/image";
import { PencilI } from "~/assets";
import ProfilePic from "./ProfilePic";
import Info from "./Info";

const IntroCard = () => {
  return (
    /* TODO: add sm: properties later if necessary */
    <div className="relative mx-[5px] box-border flex max-h-[400px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,.12)] md:m-0 md:max-w-full md:rounded-none">
      <Image
        src={PencilI}
        alt="edit profile"
        className="absolute top-[124px] right-[32px] rounded-[50%] transition-[.25]"
      />
      {/* banner */}
      <Banner />
      {/* profilePic */}
      <ProfilePic />
      {/* Information wrapper */}
      <Info/>
    </div>
  );
};

export default IntroCard;
