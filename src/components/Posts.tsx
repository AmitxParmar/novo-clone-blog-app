import React from 'react'
import Post from './Post'
import { api } from '~/utils/api'

const posts = api.post

const Posts = () => {
    return (
        <div className='block'>
            <Post/>
        </div >
    )
}

export default Posts