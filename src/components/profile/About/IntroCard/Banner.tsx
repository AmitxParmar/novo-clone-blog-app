import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative block">
      <Image
        src="/bannerWhite.png"
        alt="banner placeholder"
        className="block w-full min-w-full max-w-full"
        width={500}
        height={200}
      />
      <Image
        width={500}
        height={200}
        src="/profileBanner.png"
        alt="banner"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};

export default Banner;
