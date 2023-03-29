import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative block">
      <Image
        src="/bannerWhite.png"
        alt="banner placeholder"
        className="block w-full min-w-full max-w-full"
        fill
      />
      <Image
        src="/profileBanner.png"
        alt="banner"
        className="absolute inset-0 h-full w-full"
        fill
      />
    </div>
  );
};

export default Banner;
