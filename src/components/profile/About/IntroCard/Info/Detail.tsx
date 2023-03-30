import React from "react";
import Image from "next/image";

type Props = {
  svg: string;
  title: string;
};

const Detail = ({ svg, title }: Props) => {
  return (
    <div className="mt-8 flex flex-col break-words">
      <Image src={svg} alt={title} />
      <p className="my-0 ml-2 break-words text-base font-normal leading-normal text-gray-dark">
        {title}
      </p>
    </div>
  );
};

export default Detail;
