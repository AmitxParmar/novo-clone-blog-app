/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { NovoI, SideOpenI } from 'src/assets'
import Image from 'next/image'
import Link from 'next/link';
/* import { signIn, useSession } from 'next-auth/react'; */
import { header_icons } from '../../constants';
import { SignInResponse, signIn, useSession } from 'next-auth/react';


const Header: React.FC = () => {
    const { data: sessionData } = useSession();
    console.log(sessionData);

    return (
        <React.Fragment>
            <div>
                {/* NAV_SPACER */}
                <div className='max-h-14 sm:hidden md:hidden'></div>
                {/* NAV/HEADER */}
                <nav className='z-[1040] max-h-14 flex-start fixed flex flex-nowrap lg:h-14 bg-[linear-gradient(280.39deg,_#071530_64.59%,#405a86_109.59%)] shadow-[0_2px_8px_rgba(0,0,0,.12)]  right-0 left-0 top-0 justify-start items-center py-1 px-2'> {/* Flex-flow: row nowrap */}
                    <div className='w-full m-auto py-0 pr-10 pl-20 grow'>

                        {/* ASIDE LOGO */}
                        <button className='flex border border-solid rounded-none border-transparent normal-case overflow-visible font-normal text-center w-14 h-14 shrink-0 m-0 p-[0.75rem] bg-transparent text-xl leading-none lg:absolute lg:top-0 lg:left-0 items-center justify-center lg:w-16'>
                            <span className='inline-flex align-center justify-center'>
                                <Image src={SideOpenI} alt='open sidebar' />
                            </span>
                        </button>

                        {/* HEADER ITEMS */}
                        <div className='flex flex-wrap justify-between  -mx-4 items-center'>
                            {/* NOVO LOGO */}
                            <div className='static flex xl:flex-1/4 '>
                                <Link href="/" aria-label="home page" className="m-0 text-white inline-block py-[.1925rem] text-xl whitespace-nowrap">
                                    <button onClick={() => signIn()}>
                                        <Image src={NovoI} alt='Join Novo Logo' />
                                    </button>
                                </Link>
                            </div>

                            {/* Divider */}
                            <div className='relative block w-full px-4 lg:block lg:flex-[0_0_33.33%] lg:max-w-[33.33%] xl:flex-1/2 xl:max-w-1/2'></div>

                            {/* CTA */}
                            <div className="relative lg:flex-[0_0_33.33333333%] xl:flex-1/4 w-full flex-shrink-0 justify-end">
                                <div className="flex  pl-0 mb-0 list-none flex-row items-center justify-end">
                                    {/* Messages Icon */}
                                    {header_icons.map(({ id, title, icon, path }) => (
                                        <div key={id} title={title} className="ml-2 rounded-full hover:bg-white">
                                            <Link
                                                className='relative color-[#212121] transition-[.3s] flex items-center bg-transparent rounded-full object-contain justify-center w-8 h-8 p-0'
                                                href={path}
                                            >
                                                <span className='inline-flex items-center justify-center align-middle'>
                                                    <Image
                                                        className='rounded-full'
                                                        src={icon}
                                                        alt='Messages'
                                                        height={27}
                                                        width={27}
                                                    />
                                                </span>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header