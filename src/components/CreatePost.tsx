import React, { useState } from 'react'
import Image from 'next/image'
import PostModal from './PostModal'
import { defaultImage } from '~/assets'

const CreatePost: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)

    return (
        <div className='mb-4'>
            <PostModal isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
            <div className='relative flex flex-col min-w-0 break-words bg-white border-0 border-solid border-[#e0e0e0] rounded-xl shadow-[0_2px_8px_rgb(0_0_0/12%)] mb-2.5'>{/* background-clip: border-box */}
                <div className='xl:p-8 flex-[1_1_auto] min-h-[1px] p-4 break-words'>
                    <div className='items-center flex break-words'>
                        {/* User Profile Icon */}
                        <div>
                            <Image
                                alt={`User Image`}
                                className='bg-white w-8 h-8 rounded-full border-solid border-[0px] border-white '
                                src={defaultImage}
                                height={32}
                                width={32}
                            /* TODO: check and add opacity */
                            />
                        </div>
                        {/* TODO: reduce hover opacity */}
                        <button
                            onClick={() => openModal()}
                            className='w-full bg-light hover:bg-white  rounded-lg flex justify-start items-center h-11 cursor-text pl-3.5 text-base ml-4 overflow-visible text-gray'
                        >
                            Write a Post
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;