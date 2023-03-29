import React from "react";
import IntroCard from "./IntroCard";

const About = () => {
  return (
    <div className="max-h-[calc(100vh-64px)] w-full overflow-scroll xl:mr-4 xl:max-w-[400px] sm:p-0 sm:max-h-none sm:mb-2 md:max-h-none xl:pr-3">
      {/* marginTop */}
      <div className="mt-12 md:hidden sm:hidden"></div>
      <IntroCard/>
      {/* style spacer */}
      <div className="">
        
      </div>
      {/* style wrapper: Offer and Asks */}
      <div className=""></div>
      {/* marginTop */}
      <div className="mt-12 md:hidden sm:hidden"></div>
    </div>
  );
};

export default About;
