import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { defaultImg } from 'src/assets';


const CreatePost: React.FC = () => {
    return (
        <div className='mb-4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white border-0 border-solid border-[#e0e0e0] rounded-xl mb-2.5'>
                <div className='xl:p-8 flex-[1_1_auto] min-h-[1px] p-4 break-words'>
                    <div className='items-center flex break-words'>
                        {/* User Profile Icon */}
                        <div>
                            <div className="md:ml-4 ml-2">
                                <Link className='relative color-[#212121] transition-[.3s] flex items-center justify-center w-8 h-8 p-0 rounded-full bg-white object-cover'
                                    href="/"
                                >
                                    <span className='inline-flex items-center justify-center align-middle '>
                                        <Image className='rounded-full bg-white' src={defaultImg} alt='Messages' />
                                    </span>
                                </Link>
                            </div>
                            <button className='w-full rounded-lg flex justify-start items-center h-11 cursor-text pl-3.5 text-secondary text-base ml-4 overflow-visible text-'>

                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreatePost;