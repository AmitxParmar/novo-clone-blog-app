import React from "react";
import { header_icons } from "../../../constants";
import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="relative grid grid-col-3 overflow-hidden w-full flex-shrink-0 justify-end lg:flex-[0_0_33.33333333%] xl:flex-1/4">
      <div className="mb-0 flex list-none flex-row items-center justify-end pl-0">
        {/* Messages Icon */}
        {header_icons.map(({ id, title, icon, path }) => (
          <div
            key={id}
            title={title}
            className="ml-2 rounded-full hover:bg-white"
          >
            <Link
              className="color-[#212121] relative flex h-8 w-8 items-center justify-center rounded-full bg-transparent object-contain p-0 transition-[.3s]"
              href={path}
            >
              <span className="inline-flex items-center justify-center align-middle">
                <Image
                  className="rounded-full"
                  src={icon}
                  alt="Messages"
                  height={27}
                  width={27}
                />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTA;
