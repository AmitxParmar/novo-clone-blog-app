import React from 'react'
import { SideOpenI } from 'public'
import Image from 'next/image'


const Sidebar: React.FC = () => {
    return (
        <aside className='lg:block fixed top-0 left-0 w-16 h-screen p-0 bg-white shadow-primary z-[1038]'>
            <button className='lg:h-14 lg:w-15 flex items-center justify-center shrink-0 p-3 text-xl transform-none m-0 leading-none '>
                <span className='inline-flex items-center justify-center text-xl'>
                    <Image src={SideOpenI} alt="navbar" />
                </span>
            </button>
        </aside>
    )
}

export default Sidebar