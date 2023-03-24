import React from 'react'
import Post from './Post'
import { api } from '~/utils/api'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


/* const { data } = api.post.getAll.useQuery() */

/* console.log("posts fetch check", data) */

const Posts = () => {
    return (
        <div className='block'>
            <Post/>
            <Skeleton width={"100%"} className='p-5 m-5 h-screen'/>
            <Post />
            <Post/>
        </div >
    )
}

export default Posts