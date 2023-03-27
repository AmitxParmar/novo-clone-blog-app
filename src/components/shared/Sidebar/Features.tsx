import React from "react";
import { nav_features } from "~/constants";
import Link from "next/link";
import Image from "next/image";

interface IFeatures {
  active: string;
  setActive: (path:string) => void;
}

const Features: React.FC<IFeatures> = ({ active, setActive }) => {
  return (
    <div className="mx-3 mb-0 flex list-none flex-col overflow-hidden pl-0 md:mt-8">
      {/* SIDEBAR FEATURES BUTTONS */}
      <div>
        {nav_features?.map((feature) => (
          <div
            key={feature.id}
            title={feature.title}
            className={`${
              active === feature.path ? " bg-light " : ""
            } mb-4 w-full items-center justify-center rounded-full hover:bg-light `}
          >
            <Link
              href={feature.path}
              className={`max-w-10 flex h-10 w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-gray-dark transition `}
              onClick={() => setActive(feature.path)}
            >
              <div className="w-full items-center justify-center overflow-hidden align-middle">
                <span className="mr-5 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap leading-none">
                  <Image src={feature.icon} alt={feature.title} />
                </span>
                <span className="h-6 w-6 align-middle leading-none">
                  {feature.title}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
