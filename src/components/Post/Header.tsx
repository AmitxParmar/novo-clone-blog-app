import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { useSession } from 'next-auth/react';

type PostHeader = {
    profilePic: string;
    userName: string;
}

const Header: React.FC<PostHeader> = ({ profilePic, userName }) => {
    const { data: sessionData } = useSession();
    
    return (
        <div className='flex relative mb-3 break-words'>
            {/* User Picture */}
            <div className='mr-4 block text-sm leading-normal'>
                <Link href={"/profile/:id"}>
                    <div className='bg-black'>
                        <Image src={profilePic} height={22} width={22} alt={`user profile pic`} className='rounded-2xl' />
                    </div>
                </Link>
            </div>
            {/* User Meta */}
            <div className='max-w-[calc(100%-60px)] min-w-0'>

            </div>
            {/* User Post Details options */}
            <div className='mr-0 ml-auto'>
                <div className="relative block ">
                    <Link href="" className='z-[6] relative '>
                        <span className='inline-flex items-center  justify-center align-middle origin-center rotate-90 break-words'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#9e9e9e" d="M12 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header