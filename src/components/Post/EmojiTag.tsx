import React from "react";

interface Props {
  emoji: string;
  count?: number;
}

const EmojiTag = ({ emoji, count }: Props) => {
  return (
    <button className="flex items-center justify-center space-x-1 rounded-[.9375rem] border-[1px] border-[#5866E3] bg-[#ECEDFB] px-[10px] py-[4px] text-center text-[.75rem] transition ease-in-out hover:bg-white">
      <p className="leading-none">{emoji}</p>
      <span className="text-[.75rem]  font-semibold leading-none text-[#5866E3]">
        {count}
      </span>
    </button>
  );
};

export default EmojiTag;
