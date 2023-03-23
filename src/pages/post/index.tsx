import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {
    const { query: { pid } } = useRouter();
    console.log(pid, "id post");
console.log("Post rendered!!")
    return (
        <div className='text-black bg-green font-bold mt-18 ml-12'>
            Tessetsefnascowndc
        </div>
    )
}

export default Post;