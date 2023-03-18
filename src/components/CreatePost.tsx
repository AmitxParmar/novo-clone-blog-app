import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { defaultImg } from 'src/assets';


const CreatePost: React.FC = () => {
    return (
        <div className='mb-4 mt-56'>
            <div className='relative flex flex-col min-w-0 break-words bg-white border-0 border-solid border-[#e0e0e0] rounded-xl mb-2.5'>{/* background-clip: border-box */}
                <div className='xl:p-8 flex-[1_1_auto] min-h-[1px] p-4 break-words'>
                    <div className='items-center flex break-words'>
                        {/* User Profile Icon */}
                        <div>
                            <Image
                                className='bg-white w-8 h-8 rounded-full border-solid border-[0px] border-white '
                                src={`https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media&token=cfc326ef-1ceb-401e-8060-6209a5faafd0`}
                                alt={`default_user_img`}
                                height={2000}
                                width={2000}
                            /* TODO: check and add opacity */
                            />
                        </div>
                        {/* TODO: reduce hover opacity */}
                        <button className='w-full bg-light hover:bg-white  rounded-lg flex justify-start items-center h-11 cursor-text pl-3.5 text-base ml-4 overflow-visible text-gray'
                        >
                            Create a Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;