import React from "react";

type Props = {
  counter: string;
  count: number;
};

const Counter = ({ counter, count }: Props) => {
  return (
    <>
      <label className="my-0 mr-1 font-semibold text-dark">{count}</label>
      <p className="my-0 mr-4 font-normal text-secondary">{counter}</p>
    </>
  );
};

export default Counter;
