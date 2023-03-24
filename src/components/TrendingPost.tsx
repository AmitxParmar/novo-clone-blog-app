import React from 'react'
import Link from 'next/link'

const TrendingPost = () => {
    return (
        <div className='relative sm:hidden md:hidden leading-6 antialiased w-full px-4 lg:block lg:max-w-[33.33%] lg:flex-[0_0_33.33333333%] xl:flex-1/4 xl:max-w-1/4'>
            <div className='inline'>
                <div className=''>
                    <div className='sticky top-[-600px]'>
                        <p className='font-bold ml-4 '>
                            <span className='mr-1 font-extrabold text-xs text-[#3f52e1] leading-normal tracking-normal'>
                                TRENDING POSTS
                            </span>
                        </p>
                        <div>{/* TODO: REMOVE PADDING IF NECESSARY */}
                            <Link href="/post/:id" className='text-black leading-normal text-left font-normal whitespace-nowrap overflow-ellipsis bg-transparent block'>
                                <div className='bg-white hover:hover:bg-primary/10 shadow-[0_2px_8px_rgb(0_0_0/12%)] leading-10 rounded-xl p-5 mt-3 mr-0 mb-5 ml-4 text-black'>
                                    <div className='text-sm text-black'>
                                        {/* Community  */}
                                        <div className='text-xs font-bold'>
                                            {/* Community Icon */}
                                            <span className='mr-1 text-xs text-gray-dark '>🌱</span>
                                            ESG & Sustainability
                                        </div>
                                        {/* Title */}
                                        {/* TODO: add line clamp here */}
                                        <div className='text-xs font-normal text-left my-2 mx-0 flex leading-normal line-clamp-3 text-green'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate in inventore suscipit ratione deleniti ipsam odit esse rem, dolore est voluptates consectetur accusamus atque molestiae tempora corrupti totam perspiciatisLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate in inventore suscipit ratione deleniti ipsam odit esse rem, dolore est voluptates consectetur accusamus atque molestiae tempora corrupti totam perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate in inventore suscipit ratione deleniti ipsam odit esse rem, dolore est voluptates consectetur accusamus atque molestiae tempora corrupti totam perspiciatis.
                                        </div>
                                        {/* Meta */}
                                        <div className='text-xs text-black'>
                                            2d • 113 views
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>{/* TODO: REMOVE PADDING IF NECESSARY */}
                            <Link href="/post/:id" className='text-black leading-normal text-left font-normal bg-transparent block'>
                                <div className='bg-white hover:bg-light shadow-[0_2px_8px_rgb(0_0_0/12%)] leading-10 rounded-xl p-5 mt-3 mr-0 mb-5 ml-4 text-black'>
                                    <div className='text-sm text-black'>
                                        {/* Community  */}
                                        <div className='text-xs font-bold'>
                                            {/* Community Icon */}
                                            <span className='mr-1 text-xs text-gray-dark '>🌱</span>
                                            ESG & Sustainability
                                        </div>
                                        {/* Title */}
                                        {/* TODO: add line clamp here */}
                                        <div className='text-xs font-normal text-left my-2 mx-0 flex leading-normal overflow-hidden break-words text-black'>
                                            Are you a student or a teacher? Host a UN Youth Climate Dialogue with your class 📚
                                        </div>
                                        {/* Meta */}
                                        <div className='text-xs text-black'>
                                            2d • 113 views
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>{/* TODO: REMOVE PADDING IF NECESSARY */}
                            <Link href="/post/:id" className='text-black leading-normal text-left font-normal bg-transparent block'>
                                <div className='bg-white hover:bg-light shadow-[0_2px_8px_rgb(0_0_0/12%)] leading-10 rounded-xl p-5 mt-3 mr-0 mb-5 ml-4 text-black'>
                                    <div className='text-sm text-black'>
                                        {/* Community  */}
                                        <div className='text-xs font-bold'>
                                            {/* Community Icon */}
                                            <span className='mr-1 text-xs text-gray-dark '>🌱</span>
                                            ESG & Sustainability
                                        </div>
                                        {/* Title */}
                                        {/* TODO: add line clamp here */}
                                        <div className='text-xs font-normal text-left my-2 mx-0 flex leading-normal overflow-hidden break-words text-black'>
                                            Are you a student or a teacher? Host a UN Youth Climate Dialogue with your class 📚
                                        </div>
                                        {/* Meta */}
                                        <div className='text-xs text-black'>
                                            2d • 113 views
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingPost