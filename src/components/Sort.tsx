import React from 'react'
import { EyeI } from '~/assets';
import Image from 'next/image'
const Sort = () => {
    return (
        <div className='w-full mb-7 flex items-center justify-center'>
            <div className='text-sm text-gray-dark flex items-center justify-start'>
                <small className='font-bold text-xs my-0 text-inherit'>Sort posts by</small>
                <div className='pl-2 relative text-xs text-gray-dark'>
                    <button className='p-0 border-none after:content-none after:display-none bg-[linear-gradient(93.44deg,#3f52e1_44.18%,#6553ea_99.96%)] border border-[#3f52e1] text-white lg:h-6 lg:px-4 flex py-1 px-3 rounded-2xl delay-150 items-center whitespace-nowrap overflow-visible font-md'>
                        <span className='text-white mr-2 text-xs font-extrabold mb-0 mt-0.5 tracking-wide whitespace-nowrap text-left'>
                            HOT
                        </span>
                        <span className='inline-flex items-center justify-center align-middle text-white whitespace-nowrap'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" fill="none" viewBox="0 0 6 5">
                                <path fill="#fff" d="M6 .5L3 4.25 0 .5h6z">
                                </path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className='flex ml-auto'>
                <button className='p-0 border-none bg-transparent m-0 overflow-visible'>
                    <Image src={EyeI} width={32} height={32} alt="hide anonymous content" />
                </button>
            </div>
        </div>
    )
}

export default Sort;