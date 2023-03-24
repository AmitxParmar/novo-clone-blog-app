import React from 'react'
import CreatePost from 'src/components/CreatePost';
import Tabs from './Tabs';
import Posts from './Posts';
import Sort from './Sort';
import TrendingPost from './TrendingPost';

const Feed = () => {
    return (
        <div className='lg:pt-8 lg:px-4 flex flex-wrap leading-6 -mx-4 w-full'>
            {/* TODO: might fix that later */}
            {/* Left side space */}
            <div className='sm:w-0 sm:p-0 xl:block xl:flex-[0_0_8.33%] xl:max-w-[8.33%] relative w-full px-4 '></div>
            {/* Main Feed */}
            <div className='px-0 mt-12 xl:flex-[0_0_58.33%] xl:max-w-[58.33%] lg:max-w-[66.66%] lg:flex-[0_0_66.67%] relative w-full'>
                <CreatePost />
                {/* <Tabs /> */}
                <Sort />
                <Posts />
            </div>
            {/* Right Side */}
            <TrendingPost />
            <div></div> {/* Right Side Space */}
        </div>
    )
}

export default Feed