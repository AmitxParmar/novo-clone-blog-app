import React, { Fragment } from 'react'
import { NotiI, MsgI, BookI, SideOpenI } from 'public'
import Image from 'next/image'

const Header = () => {
    return (
        <Fragment>
            <div className='block h-[56px] box-border bg-[background: linear-gradient(280.39deg,#071530 64.59%,#405a86 109.59%);] z-auto float-none leading-6 static shadow-[0_2px_8px_rgba(0,0,0,.12)]'></div>
            <nav className='z-[1040] flex fixed right-0 left-0 top-0 flex-nowrap justify-start items-center flex-row py-1 px-2'> {/* Flex-flow: row nowrap */}
                <div className='w-full m-auto py-0 pr-10 pl-20'>
                    <button className='md:w-[64px]'>
                        <Image src={SideOpenI} />
                    </button>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header