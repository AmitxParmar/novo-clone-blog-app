import React from 'react'
import Link from 'next/link'

const TrendingPost = (props: Props) => {
    return (
        <div className='relative antialiased w-full px-4 lg:block lg:max-w-[33.33%] lg:flex-[0_0_33.33333333%] xl:flex-1/4 xl:max-w-1/4'>
            <div className='inline'>
                <div className=''>
                    <div className='sticky top-[-600px]'>
                        <p className='font-bold ml-4 '>
                            <span className='mr-1 font-extrabold text-xs text-[#3f52e1] leading-normal tracking-normal'>
                                TRENDING POSTS
                            </span>
                        </p>
                        <div>{/* TODO: REMOVE PADDING IF NECESSARY */}
                            <Link href="/post/:id" className='text-black leading-normal text-left font-normal bg-transparent'>
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
                                        <div className='text-xs font-normal text-left my-2 mx-0 flex overflow-hidden break-words text-black'>
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