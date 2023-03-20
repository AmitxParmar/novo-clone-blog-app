import { Dialog, Transition } from '@headlessui/react'
import { Fragment, type FC } from 'react'
import MyEditor from "./Editor"
type PostModal = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const PostModal: FC<PostModal> = ({ isOpen, closeModal, openModal }) => {

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
                                        className="text-2xl font-extrabold leading-6 text-gray-900"
                                    >
                                        Write a new post
                                    </Dialog.Title>
                                    {/* Post Title */}
                                    <div className="my-6">
                                        <input
                                            placeholder='Add a title'
                                            className='placeholder:text-secondary placeholder:opacity-100 lg:h-10 resize-none block w-full h-8 py-[.5714rem] px-[.8571rem] text-base text-secondary bg-white bg-clip-padding border border-solid rounded-lg transition ease-in-out focus:outline-none focus:border-dark border-secondary overflow-visible pointer-events-auto' />
                                    </div>
                                    {/* Post Body */}
                                    <div className='border border-solid border-secondary  rounded-lg'>
                                        {/* Text Formatters */}
                                        <div className='top-0 rounded-xl bg-light border-x-white border-x-8 border-t-white py-0 px-[1px] flex items-center pointer-auto'>
                                        </div>
                                        {/* Text Content Body */}
                                        <div></div>
                                    </div>
                                    {/* Divider */}
                                    <div></div>

                                    <MyEditor />

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="p-0 border-none lg:h-10 rounded-xl text-info inline-flex items-center justify-center scale-100 transition-all transition-delay-1"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </Fragment>
    )
}

export default PostModal;
