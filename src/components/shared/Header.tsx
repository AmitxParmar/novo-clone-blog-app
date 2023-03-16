import React from 'react'
import { NovoI, NotiI, MsgI, BookI, SideOpenI } from 'public'
import Image from 'next/image'
import Link from 'next/link';

interface IHeader {
    userProfile: string
}

const Header: React.FC<IHeader> = ({ userProfile }) => {
    return (
        <div>
            {/* NAV_SPACER */}
            <div className='block h-14 box-border bg-[background: linear-gradient(280.39deg,#071530 64.59%,#405a86 109.59%);] z-auto float-none  leading-6 static shadow-[0_2px_8px_rgba(0,0,0,.12)]'></div>
            {/* NAV/HEADER */}
            <nav className='z-[1040] flex fixed right-0 left-0 top-0 flex-nowrap justify-start items-center flex-row py-1 px-2'> {/* Flex-flow: row nowrap */}
                <div className='w-full m-auto py-0 pr-10 pl-20'>

                    {/* ASIDE LOGO */}
                    <button className='flex border border-solid rounded-none border-transparent normal-case overflow-visible font-normal text-left m-0 p-[0.75rem] bg-transparent text-xl leading-none lg:absolute lg:top-0 lg:left-0 items-center justify-center lg:w-16'>
                        <span className='inline-flex align-center justify-center'>
                            <Image src={SideOpenI} alt='open sidebar' />
                        </span>
                    </button>

                    {/* HEADER ITEMS */}
                    <div className='flex flex-wrap mx-4 items-center'>
                        {/* NOVO LOGO */}
                        <div className='static flex max-w-1/4 xl: xl:flex-25 '>
                            <Link href="/" aria-label="home page" className="m-0 text-white inline-block py-[.1925rem] text-xl whitespace-nowrap">
                                <Image src={NovoI} alt='Join Novo Logo' />
                            </Link>
                        </div>
                        <div className='lg:block xl:flex-50 xl:max-w-1/2 '></div>
                        <div></div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header