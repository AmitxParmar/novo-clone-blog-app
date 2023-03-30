import React from "react";
import IntroCard from "./IntroCard";
import OffersNAsks from "./OffersNAsks";

const About = () => {
  return (
    <div className="max-h-[calc(100vh-64px)] w-full overflow-scroll scrollbar-thin sm:mb-2 sm:max-h-none sm:p-0 md:max-h-none xl:mr-4 xl:max-w-[400px] xl:pr-3">
      {/* marginTop */}
      <div className="mt-12 sm:hidden md:hidden"></div>
      <IntroCard />
      {/* style spacer */}
      <div className=""></div>
      {/* style wrapper: Offer and Asks */}
      <OffersNAsks />
      {/* marginTop */}
      <div className="mt-12 sm:hidden md:hidden"></div>
    </div>
  );
};

export default About;
