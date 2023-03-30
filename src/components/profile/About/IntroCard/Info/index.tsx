import Title from "./Title";
import Counter from "./Counter";
import Detail from "./Detail";
import { PencilI } from "~/assets";

const Info = () => {
  return (
    /* TODO: add margin to medium devices if it causes any issues in small screens. */
    <div className="flex flex-col break-words sm:my-0 sm:mx-4 xl:mx-8">
      <Title />
      <div className="mt-8 flex flex-row items-center break-words text-base leading-normal last:mr-0 ">
        <Counter counter="post" count={1} />
        <Counter counter="comment" count={2} />
        <Counter counter="communities" count={12} />
      </div>
      <Detail svg={PencilI} title="others" />
      <Detail svg={PencilI} title="Class of 2022" />
      <Detail svg={PencilI} title="MBA in Entrepreneurship" />
    </div>
  );
};

export default Info;
