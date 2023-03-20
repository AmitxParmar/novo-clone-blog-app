import React from 'react'
import CreatePost from 'src/components/CreatePost';
import Tabs from './Tabs';
import Post from './Post';
import Sort from './Sort';

const Feed = () => {
    return (
        <div className='lg:pt-8 lg:px-4 flex flex-wrap -mx-4 w-full'> {/* TODO: might fix that later */}
            <div></div> {/* Left side space */}
            <div className='px-0 xl:flex-[0_0_58.33%] xl:max-w-[58.33%] lg:max-w-[66.66%] lg:flex-[0_0_66.67%] relative w-full'>
                <CreatePost />
                <Tabs />
                <Sort/>
                <Post/>
            </div> {/* Main Feed */}
            <div></div> {/* Right Side */}
            <div></div> {/* Right Side Space */}
        </div>
    )
}

export default Feed