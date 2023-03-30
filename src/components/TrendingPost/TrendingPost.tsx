import React, { type PropsWithChildren } from "react";
import Link from "next/link";

const TrendingPost = () => {
  return (
    <div>
      {/* TODO: REMOVE PADDING IF NECESSARY */}
      <Link
        href="/post/:id"
        className="block bg-transparent text-left font-normal leading-normal text-black"
      >
        <div className="mt-3 mr-0 mb-5 ml-4 rounded-xl bg-white p-5 leading-10 text-black shadow-[0_2px_8px_rgb(0_0_0/12%)] hover:bg-light">
          <div className="text-sm text-black">
            {/* Community  */}
            <div className="text-xs font-bold">
              {/* Community Icon */}
              <span className="mr-1 text-xs text-gray-dark ">🌱</span>
              ESG & Sustainability
            </div>
            {/* Title */}
            {/* TODO: add line clamp here */}
            <div className="my-2 mx-0 flex overflow-hidden break-words text-left text-xs font-normal leading-normal text-black line-clamp-3">
              Are you a student or a teacher? Host a UN Youth Climate Dialogue
              with your class 📚 Are you a student or a teacher? Host a UN Youth
              Climate Dialogue with your class 📚
            </div>
            {/* Meta */}
            <div className="text-xs text-black">2d • 113 views</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TrendingPost;
