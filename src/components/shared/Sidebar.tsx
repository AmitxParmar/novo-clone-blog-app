import React, { useState } from 'react'
import { SideOpenI, HomeI } from 'src/assets'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { nav_features } from './../../constants';
import { useSession } from 'next-auth/react';

const Sidebar: React.FC = () => {
    const { data: sessionData } = useSession()
    const router = useRouter();
    const [active, setActive] = useState<string>(router.asPath);
    console.log(router.asPath);

    sessionData ? (
        <aside className='lg:block fixed top-0 left-0 w-16 h-screen p-0 bg-white shadow-primary z-[1038]'>
            <button className='lg:h-14 lg:w-15 flex items-center justify-center shrink-0 p-3 text-xl transform-none m-0 leading-none '>
                <span className='inline-flex items-center justify-center text-xl'>
                    <Image src={SideOpenI} alt="navbar" />
                </span>
            </button>
            <div className='text-base w-full relative overflow-hidden touch-auto font-normal pb-4 h-[calc(100vh-56px)]'>
                {/* NAV CONTAINER */}
                <div className='pb-20'>
                    {/* NAV ICONS */}
                    <div className='flex flex-col mx-3 md:mt-8 pl-0 mb-0 list-none'>
                        {/* HOME BUTTON */}
                        <div className='mb-4'>
                            <Link href="/" className=' text-gray-dark flex items-center whitespace-nowrap w-10 h-10 px-2 relative transition rounded-full p-1.5'>
                                <span className='inline-flex items-center justify-center w-6 h-6 leading-none whitespace-nowrap'>
                                    <Image src={HomeI} alt='home icon' />
                                </span>
                            </Link>
                        </div>
                        {/* SIDEBAR FEATURES BUTTONS */}
                        <div className=''>
                            <div className='mb-4 '>
                                <Link href="/get-referred" className={`${active === "/get-referred" ? " bg-white " : ""} 
                                text-gray-dark flex items-center whitespace-nowrap w-10 h-10 px-2 relative transition rounded-full p-1.5`}>
                                    <span className='inline-flex items-center justify-center w-6 h-6 leading-none whitespace-nowrap'>
                                        <Image src={HomeI} alt='get referred' />
                                    </span>
                                </Link>
                            </div>
                            <div className='mb-4 '>
                                <Link href="/" className='bg-light text-gray-dark flex items-center whitespace-nowrap w-10 h-10 px-2 relative transition rounded-full p-1.5'>
                                    <span className='inline-flex items-center justify-center w-6 h-6 leading-none whitespace-nowrap'>
                                        <Image src={HomeI} alt='Job Boards' />
                                    </span>
                                </Link>
                            </div>
                            <div className='mb-4 '>
                                <Link href="/" className='bg-light text-gray-dark flex items-center whitespace-nowrap w-10 h-10 px-2 relative transition rounded-full p-1.5'>
                                    <span className='inline-flex items-center justify-center w-6 h-6 leading-none whitespace-nowrap'>
                                        <Image src={HomeI} alt='Events' />
                                    </span>
                                </Link>
                            </div>
                            <div className='mb-4 '>
                                <Link href="/" className=' text-gray-dark flex items-center whitespace-nowrap w-10 h-10 px-2 relative transition rounded-full p-1.5'>
                                    <span className='inline-flex items-center justify-center w-6 h-6 leading-none whitespace-nowrap'>
                                        {HomeI}
                                    </span>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </aside>) : (
        <aside></aside>
    );
}

export default Sidebar