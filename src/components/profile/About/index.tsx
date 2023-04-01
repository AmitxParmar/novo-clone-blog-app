import React from "react";
import IntroCard from "./IntroCard";
import OffersNAsks from "./OffersNAsks";

const About = () => {
  return (
    <div className="max:mb-4 max-h-[calc(100vh-64px)] w-full overflow-scroll sm:max-h-none sm:max-w-3xl sm:p-0 lg:mb-2 lg:mr-4 lg:max-w-[400px] lg:pr-3 xl:mb-0">
      {/* marginTop */}
      <div className="sm:hidden md:hidden lg:mt-12"></div>
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
