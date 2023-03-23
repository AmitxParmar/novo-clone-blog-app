import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {
    const { query: { pid } } = useRouter();
    console.log(pid, "id post");
    console.log("Post rendered!!")
    return (
        <div>
            Single Post
        </div>
    )
}

export default Post;