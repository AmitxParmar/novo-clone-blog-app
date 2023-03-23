import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {
    const { query: { pid } } = useRouter();
    console.log(pid, "id post");
console.log("Post rendered!!")
    return (
        <div>
            closing tag hai toh sahi
        </div>
    )
}

export default Post;