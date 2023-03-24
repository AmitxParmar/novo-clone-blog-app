/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { nav_features, communities } from '~/constants';
/* import { useSession } from 'next-auth/react'; */

import { SideOpenI } from 'src/assets';

const Sidebar: React.FC = () => {
    const router = useRouter();
    const [active, setActive] = useState<string>("/");
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        setActive("/");
    }, []);

    /* const updateActive = (val: string) => setActive(val); */
    console.log(active, router.asPath, "active")
    return (
        <aside role="navigation" className={`${sidebarOpen ? "hover:z-[1050] hover:w-64 " : ""} justify-items-center scrollbar-none hidden xl:block z-[1038] hover:z-[1050] hover:w-64 overflow-y-auto overflow-hidden  text-black fixed top-0 left-0 w-16 h-screen p-0 bg-white after:bg-black after:w-full after:h-screen after:z-[-1] after:content-[""] after:fixed after:right-0 shadow-[0_2px_8px_rgb(0_0_0/12%)] `}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="justify-items-center lg:h-14 fill-blue lg:w-15 flex ml-2 items-center justify-center shrink-0 p-3 text-xl transform-none m-0 leading-none">
                <span className="inline-flex items-center justify-items-center text-xl">
                    <Image src={SideOpenI} alt="navbar" />
                </span>
            </button>
            <div className="text-base w-full relative overflow-hidden touch-auto font-normal pb-4 h-[calc(100vh-56px)]">
                {/* NAV CONTAINER */}
                <div className="pb-20">
                    {/* NAV ICONS */}
                    <div className="flex overflow-hidden flex-col mx-3 md:mt-8 pl-0 mb-0 list-none">
                        {/* SIDEBAR FEATURES BUTTONS */}
                        <div>
                            {nav_features.map((feature) => (
                                <div key={feature.id} title={feature.title} className={`${active === feature.path ? ' bg-light ' : ""} mb-4 w-full hover:bg-light rounded-full items-center justify-center `}>
                                    <Link
                                        href={feature.path}
                                        className={`text-gray-dark w-full flex rounded-full justify-center items-center whitespace-nowrap max-w-10 h-10 px-2 transition `}
                                        onClick={() => setActive(feature.path)}>
                                        <div className='w-full pr-4 justify-center items-center overflow-hidden'>
                                            <span className="inline-flex items-center mr-5 justify-center w-6 h-6 leading-none whitespace-nowrap">
                                                <Image src={feature.icon} alt={feature.title} />
                                            </span>
                                            <span>
                                                {feature.title}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* FIXME: complete divider sidebar */}
                    <hr className='bg-black my-4 mx-3 border-t-[#e0e0e0] border-[0] h-0 border-solid border-black overflow-visible block  border-b-gray absolute box-content' />
                    {/* Communities buttons */}
                    {communities.map(({ id, title, path, emoji }) => (
                        <div key={id} title={title} className="mb-4 w-full hover:bg-light rounded-full items-center justify-center">
                            <Link
                                href={path}
                                className={`${active === path ? ' bg-light ' : ""} text-gray-dark w-full flex items-center whitespace-nowrap max-w-10 h-10 px-2 transition `}
                                onClick={() => setActive(path)}>
                                <div className='w-full pr-4 overflow-hidden'>
                                    <span className="inline-flex items-center mr-2 justify-center text-md p-6 w-6 h-6 leading-none whitespace-nowrap">
                                        {emoji}
                                    </span>
                                    <span className=''>
                                        {title}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>


        </aside >
    );
};

export default Sidebar;
