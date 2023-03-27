import React, { useState } from "react";
import Image from "next/image";
import PostModal from "./Modals/CreatePost";
import { defaultImage } from "~/assets";

const CreatePost: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    /* Logic to post request data */
    setIsOpen(false);
  }; // also handle post submit logic here.

  const openModal = () => setIsOpen(true);

  return (
    <div className="mb-4 block font-graphik font-normal text-gray-dark antialiased">
      <PostModal setIsOpen={setIsOpen} isOpen={isOpen} openModal={openModal} />
      <div className="relative mb-2.5 flex min-w-0 flex-col break-words rounded-xl border-0 border-solid border-[#e0e0e0] bg-white shadow-[0_2px_8px_rgb(0_0_0/12%)]">
        {/* background-clip: border-box */}
        <div className="min-h-[1px] flex-[1_1_auto] break-words p-4 xl:p-8">
          <div className="flex items-center break-words">
            {/* User Profile Icon */}
            <div>
              <Image
                alt={`User Image`}
                className="h-8 w-8 rounded-full border-[0px] border-solid border-white bg-white "
                src={defaultImage}
                height={32}
                width={32}
                /* TODO: check and add opacity */
              />
            </div>
            {/* TODO: reduce hover opacity */}
            <button
              onClick={() => openModal()}
              className="m-0 ml-4 flex h-11 w-full cursor-text items-center justify-start overflow-visible rounded-lg bg-light p-0 pl-3.5 text-base font-normal leading-4 tracking-wider text-secondary hover:bg-gray/20"
            >
              Write a Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
