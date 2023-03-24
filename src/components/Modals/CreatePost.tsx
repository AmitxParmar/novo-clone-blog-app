import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, type FC } from "react";
import MyEditor from "../Editor";

/* ***
*  openModal: string 
*  isOpen: boolean
*  closeModal: void doesn't return anything run the function when the modal is closed 
*****/

type PostModal = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    setIsOpen: (Boolean: boolean) => void;
};

const PostModal: FC<PostModal> = ({ isOpen, closeModal, setIsOpen }) => {
    const cancelModal = () => setIsOpen(false);

    return (
        <Fragment>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-gray-900 text-2xl font-extrabold leading-6"
                                    >
                                        Write a new post
                                    </Dialog.Title>
                                    {/* Post Title */}
                                    <div className="my-6">
                                        <input
                                            placeholder="Add a title"
                                            className="pointer-events-auto block h-8 w-full resize-none items-center justify-center overflow-visible rounded-lg border border-solid border-secondary bg-white bg-clip-padding py-[.5714rem] px-[.8571rem] text-base text-secondary transition ease-in-out placeholder:text-secondary placeholder:opacity-100 focus:border-dark focus:outline-none lg:h-10"
                                        />
                                    </div>
                                    {/* Post Body */}
                                    <div className="rounded-lg border border-solid  border-secondary">
                                        {/* Text Formatters */}
                                        <div className="pointer-auto top-0 flex items-center rounded-xl border-x-8 border-x-white border-t-white bg-light py-0 px-[1px]"></div>
                                        {/* Text Content Body */}
                                        <div></div>
                                    </div>
                                    {/* Divider */}
                                    <div className=""></div>
                                    <MyEditor />
                                    {/* Modal footer */}
                                    <div className="flex-start pointer-events-auto flex flex-wrap items-center rounded-b-xl border-t-0 px-8 pb-8 pt-0">
                                        {/* Footer checkbox */}
                                        <div className="m-0 flex">
                                            <label className="flex items-center align-middle relative mb-0">
                                                <input className="box-border p-0 absolute z-[10] top-0 left-0 w-full h-full opacity-0 overflow-visible m-0  bg-inherit border-[initial] inline-block text-field align-start" type="checkbox" />
                                                <div className="bg-cyan border-cyan shrink-0 flex items-center justify-center w-5 h-5 border-2 border-solid  rounded-sm">
                                                    <span className="opacity-100 inline-flex items-center justify-center align-middle ">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="14"
                                                            height="10"
                                                            fill="none"
                                                            viewBox="0 0 14 10"
                                                        >
                                                            <path
                                                                fill="#ffffff"
                                                                stroke="#ffffff"
                                                                stroke-width="0.33"
                                                                d="M5.383 9.117l.117.116.117-.116 7.5-7.5.116-.117-.116-.117-.707-.707-.117-.116-.117.116L5.5 7.352 1.824 3.676l-.117-.116-.117.116-.707.707-.116.117.116.117 4.5 4.5z"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </label>
                                            <p className="text-secondary leading-normal font-normal my-0 ml-2 block">
                                                Allow anonymous comments
                                            </p>
                                        </div>

                                        <div className="m-0 ml-auto block">
                                            <button
                                                type="button"
                                                className="transition-delay-1 inline-flex scale-100 items-center justify-center rounded-xl border border-info border-none p-0 text-info transition-all lg:h-10"
                                                onClick={cancelModal}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="transition-delay-1 inline-flex scale-100 items-center justify-center rounded-xl border-none p-0 text-info transition-all lg:h-10"
                                                onClick={closeModal}
                                            >
                                                Post
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </Fragment>
    );
};

export default PostModal;
