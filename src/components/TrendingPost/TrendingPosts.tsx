import React from "react";
import TrendingPost from './TrendingPost';

const TrendingPosts = () => {
  return (
    <div className="relative block w-full px-4 leading-6 antialiased sm:hidden md:hidden lg:block lg:max-w-[33.33%] lg:flex-[0_0_33.33333333%] xl:max-w-1/4 xl:flex-1/4">
      <div className="inline">
        <div className="">
          <div className="sticky top-[-600px]">
            <p className="ml-4 font-bold ">
              <span className="mr-1 text-xs font-semibold leading-normal tracking-normal text-[#3f52e1]">
                TRENDING POSTS
              </span>
            </p>
            <TrendingPost/>
            <TrendingPost/>
            <TrendingPost/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPosts;
