import React from "react";
import Image from "next/image"
import { PencilI } from "~/assets";

const About = () => {
  return (
    <div className="max-h-[calc(100vh-64px)] w-full overflow-scroll xl:mr-4 xl:max-w-[400px] sm:p-0 sm:max-h-none sm:mb-2 md:max-h-none xl:pr-3">
      {/* marginTop */}
      <div className="mt-12 md:hidden sm:hidden"></div>
      {/* IntroCard */}
      {/* TODO: add sm: properties later if necessary */}
      <div className="md:max-w-full md:rounded-none md:m-0 relative flex flex-col w-full mx-[5px] max-w-[400px] max-h-[400px] bg-white rounded-xl overflow-hidden box-border shadow-[0_2px_8px_rgba(0,0,0,.12)]">
        <Image src={PencilI} alt="edit profile" className="absolute top-[124px] right-[32px] rounded-[50%] transition-[.25]"/>
        {/* banner */}
        <div className="relative block">
          <Image src="/public/bannerWhite.png" alt="banner placeholder" className="block w-full max-w-full min-w-full" fill/>
          <Image src="/public/profileBanner.png" alt="banner placeholder" className="absolute top-0 left-0 bottom-0 right-0 h-full w-full" fill/>
        </div>
        {/* profile */}
        <div className="h-[156px] w-[156px] rounded-[50%]">
          Profile Section
        </div>
        {/* Information wrapper */}
        <div className="">
          Information Wrapper
        </div>
      </div>
      {/* style spacer */}
      <div className="">
        
      </div>
      {/* style wrapper */}
      <div className=""></div>
      {/* marginTop */}
      <div className="mt-12 md:hidden sm:hidden"></div>

    </div>
  );
};

export default About;
