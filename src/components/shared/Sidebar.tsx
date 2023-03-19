/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { nav_features } from './../../constants';
/* import { useSession } from 'next-auth/react'; */

import { SideOpenI, HomeI } from 'src/assets';

const Sidebar: React.FC = () => {
    const router = useRouter();
    const [active, setActive] = useState<string>("/");

    useEffect(() => {
        setActive("/");
    }, []);

    /* const updateActive = (val: string) => setActive(val); */
    console.log(active, router.asPath, "active")
    return (
        <aside className="lg:block overflow-hidden hover:pr-4 hover:absolute hover:w-screen hover:overflow-visible text-black fixed top-0 left-0 w-16 h-screen p-0 bg-white shadow-[0_2px_8px_rgb(0_0_0/12%)] z-[1038]">
            <button className="lg:h-14 lg:w-15 flex items-center justify-center shrink-0 p-3 text-xl transform-none m-0 leading-none ">
                <span className="inline-flex items-center justify-center text-xl">
                    <Image src={SideOpenI} alt="navbar" />
                </span>
            </button>
            <div className="text-base w-full relative overflow-hidden touch-auto font-normal pb-4 h-[calc(100vh-56px)]">
                {/* NAV CONTAINER */}
                <div className="pb-20">
                    {/* NAV ICONS */}
                    <div className="flex overflow-hidden hover:overflow-visible flex-col mx-3 md:mt-8 pl-0 mb-0 list-none">
                        {/* HOME BUTTON */}
                        <div className="mb-4" title='Home'>
                            <Link href="/"
                                onClick={() => setActive("/")}
                                className={
                                    `${router.asPath === "/" ? "bg-light " : ""}text-gray-dark flex items-center whitespace-nowrap  hover:bg-light w-10 h-10 px-2 relative transition rounded-full p-1.5`}>
                                <span className="inline-flex items-center justify-center w-6 h-6 leading-none whitespace-nowrap">
                                    <Image src={HomeI} alt="home icon" />
                                </span>
                                <p className={`hidden hover:block text-sm`}>Home</p>
                            </Link>
                        </div>
                        {/* SIDEBAR FEATURES BUTTONS */}
                        <div>
                            {nav_features.map((feature) => (
                                <div key={feature.id} title={feature.path} className="mb-4">
                                    <Link
                                        href={feature.path}
                                        className={`${active === feature.path ? ' bg-light ' : ""} 
                                        text-gray-dark hover:bg-light flex items-center whitespace-nowrap w-10 h-10 px-2 relative transition rounded-full p-1.5`}
                                        onClick={() => setActive(feature.path)}>
                                        <span className="inline-flex            items-center justify-center w-6 h-6 leading-none whitespace-nowrap">
                                            <Image
                                                src={feature.icon}
                                                alt={feature.name}
                                            />
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr className='bg-black h-12 my-4 mx-3 border-t border-solid border-black overflow-visible border-b-gray absolute box-content' />
        </aside >
    );
};

export default Sidebar;
