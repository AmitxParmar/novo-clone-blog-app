import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { useSession, signIn } from 'next-auth/react';
import { defaultImage } from '~/assets';

type PostHeader = {
    profilePic?: string;
    userName: string;
    community: "🌱 ESG & Sustainability";
}

const Header: React.FC<PostHeader> = ({ profilePic, userName, community }) => {
    const { data: sessionData } = useSession();

    return (
        <div className='flex relative mb-3 break-words'>
            {/* User Picture */}
            <div className='mr-4 block text-sm leading-normal'>
                <Link href={"/profile/:id"}>
                    <Image src={defaultImage} height={22} width={22} alt={`user profile pic`} className='rounded-2xl border-0 h-8 w-8 border-solid whitespace-nowrap border-white' />
                </Link>
            </div>
            {/* User Meta */}
            <div className='max-w-[calc(100%-60px)] min-w-0'>
                {/* Top */}
                <div className='flex items-center overflow-hidden whitespace-nowrap text-ellipsis'>
                    <div className="flex flex-wrap overflow-hidden items-center whitespace-nowrap text-ellipsis">
                        {/* UserName */}
                        <Link aria-label="user profile" className="relative z-[6] overflow-hidden whitespace-nowrap min-w-0 " href="/u/mq5V1knsedT9AYf7Ekh7rzmIvTg1">
                            <p className="mr-1 text-gray-dark font-semibold text-xs leading-5  overflow-hidden text-ellipsis whitespace-nowrap my-0 mx-0 block">
                                {userName}
                            </p>
                        </Link>
                        <div className="flex items-center  text-left">
                            <p className="">in</p>
                            {/* ADD Category here */}
                            <Link className="UserPostDetails_group-link__1D2Bz" href="/c/esg-sustainability">
                                <span className="font-semibold text-xs">{community}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <div className='flex items-center text-sm text-gray-dark'>
                    {/* User Tagline */}
                    <p className="mr-1 font-medium text-gray-dark text-xs leading-5  overflow-hidden text-ellipsis whitespace-nowrap mx-0 block">Business Graduate, Carbon Literate, Volunteer</p>
                    {/* Content Meta */}
                    <p className="a-typography p5 UserPostDetails_content-meta__1Fa_4"> • 7h</p>
                </div>
            </div>
            {/* User Post Details options */}
            <div className='mr-0 ml-auto'>
                <div className="relative block">
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