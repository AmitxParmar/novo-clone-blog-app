import React, { type PropsWithChildren, useState } from "react";
import { api } from "~/utils/api";
import { signIn, useSession } from "next-auth/react";
import ReactElement from "react";

const CreateCategory: React.FC<PropsWithChildren> = () => {
  const { data: sessionData } = useSession();
  const [title, setCategory] = useState<string>("");
  const [emoji, setEmoji] = useState<string>("");

  /* Get All categories */
  const { data: categories, refetch: refetchCategories } =
    api.category.getAll.useQuery(undefined, {
      enabled: sessionData?.user != undefined,
    });

  /* create Category function */
  const createCategory = api.category.create.useMutation({
    onSuccess: () => {
      void refetchCategories();
    },
  });

  const handleSubmit = () => {
    // make
    console.log({ emoji, title });
    createCategory.mutate({
      emoji,
      title,
    });
  };

  return (
    <>
      <button onClick={() => void signIn()}>Login</button>

      <form onSubmit={handleSubmit} className="grid grid-rows-2 m-7 p-7 ">
        <input
          className="h-12 w-full bg-black tracking-widest text-white"
          type="text"
          placeholder="Enter Emojis"
          onChange={(e) => setEmoji(e.target.value)}
          value={emoji}
        />
        <input
          className="h-12 w-full"
          type="text"
          placeholder="enter community title"
          onChange={(e) => setCategory(e.target.value)}
          value={title}
        />
        <button type="submit" className="bg-light tracking-widest text-black">
          Post
        </button>
      </form>

      <div className="bg-black font-bold leading-6 tracking-wider text-white">
        {categories?.map(({ id, title, emoji }) => (
          <div
            key={id}
            className="grid-col-2 grid h-56 w-full items-center justify-center bg-black align-middle"
          >
            <div className="inline-flex">{emoji}</div>
            <div className="inline-flex">{title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CreateCategory;
