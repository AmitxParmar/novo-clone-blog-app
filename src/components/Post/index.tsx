import React from 'react'
import Link from 'next/link';
import Header from './Header';
import { defaultImage } from '~/assets';

const Post: React.FC = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='h-auto ease-in-out transition-none transition-'>
                    {/* Card */}
                    <div className='relative flex flex-col min-w-0 break-words hover:bg-light bg-white bg-clip-border border-[#e0e0e0] border-solid rounded-xl border-0 mb-2 text-sm '>
                        {/* Card Body */}
                        <div className='py-6 xl:p-8 min-h-[1px] flex-[1_1_auto] break-words '>
                            <Link href="/post/:id"></Link>
                            {/* Post Heading */}
                            <Header community="🌱 ESG & Sustainability" profilePic={defaultImage } userName='Amit Parmar' />
                            <Link href="/post/:id" className='z-[6] relative '>
                                <h4 className="text-gray-dark leading-normal font-semibold text-base mb-2 block my-8 mx-0 ">🗞 Top TechCrunch articles of the week!</h4>
                            </Link>
                            {/* FeedPosts_Rte Container */}
                            <div
                                className='z-[1] relative block break-words text-sm antialiased leading-normal before:z-[2] before:content-[""] before:w-full before:h-[30%] before:absolute before:left-0 before:bottom-0 bg-[linear-gradient(180deg,hsla(0,0%,100%,0),#fff)]'
                            >
                                <div className='max-h-64 overflow-hidden h-full relative break-words text-sm leading-normal font-normal '>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore maiores optio magni qui omnis fugit inventore. Vitae harum adipisci voluptate quibusdam, vero qui repellat odio dolor eveniet labore fugit perferendis.
                                    Lorem
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, mollitia iste. Rerum obcaecati fuga rem repellendus eaque distinctio quidem, commodi eius beatae soluta nam suscipit sed doloribus minus mollitia nisi!
                                    Eos tempore, esse vel blanditiis excepturi animi illo adipisci iure distinctio impedit, illum aliquam odio autem similique accusantium! Dolor itaque perferendis fuga est deleniti sed cum fugiat iure distinctio unde.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi soluta ipsum voluptates saepe explicabo enim quo repudiandae illum. Quaerat iure ullam nesciunt quasi ducimus illum ipsum magnam blanditiis maiores ex.
                                    Labore excepturi distinctio ad sit officia quibusdam deleniti reiciendis maiores fugiat, cumque aliquid alias doloremque doloribus sint eos. Neque quam dicta tenetur hic. Pariatur velit quibusdam voluptatibus eos amet unde.
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;