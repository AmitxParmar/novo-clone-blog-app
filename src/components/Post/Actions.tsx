import Image from "next/image";
import React, { useState } from "react";
import EmojiTag from "./EmojiTag";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

type EmojiArr = {
  count?: number;
  emoji: string;
};

const Actions = () => {
  const [isEmoji, setIsEmoji] = useState<boolean>(false);
  const emojiArr: EmojiArr[] = [
    {
      count: 1,
      emoji: "👍",
    },
    {
      count: 2,
      emoji: "😀",
    },
    {
      count: 1,
      emoji: "😍",
    },
  ];
  return (
    <div className="mt-4 flex items-center justify-between break-words text-sm text-dark">
      {/* REactions container */}
      <div className="relative mr-6 flex space-x-2 ">
        {emojiArr.map(({ count, emoji }: EmojiArr, index: number) => {
          return <EmojiTag count={count} emoji={emoji} key={index} />;
        })}
        <button
          className="hover:border-[1px flex w-[54px] items-center justify-center space-x-1 rounded-[.9375rem] bg-[#F4F4F4] px-[10px] py-[4px] text-center text-[.75rem] transition ease-in-out"
          onClick={() => setIsEmoji(!isEmoji)}
        >
          <Image
            src={"https://joinnova.co/static/media/smile-icon.dd69bbf7.svg"}
            alt="icon"
            width={100}
            height={100}
            className="h-[16px] w-[16px]"
          />
        </button>
        {isEmoji && (
          <div className="absolute top-8 -left-3 z-10">
            <Picker
              onEmojiSelect={() => setIsEmoji(false)}
              set="native"
              previewPosition="none"
              icons="solid"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Actions;
