/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useContext, createContext, useEffect } from 'react'

type Post = {
    categoryId: string;
    title: string;
    content: string;
}

interface State {
    createPost(post: Post): void | null;
}
const PostsContext = createContext<State | undefined>(undefined);

interface IPostProvider {
    children: React.ReactNode
}

export const PostsProvider: React.FC<IPostProvider> = ({ children }) => {


    const getExistingPosts = (): [] => {
        const posts = localStorage.getItem('posts');
        return posts ? JSON.parse(posts) : [];
    }

    const createPost = (post: Post): void | null => {
        /* const existingArray: typeof getExistingPosts = () => getExistingPosts();
return null
        if (existingArray) {
            existingArray.push(post);
            localStorage.setItem('posts', JSON.stringify(existingArray));
        } */
        return null;
    };


    return (
        <PostsContext.Provider value={{ createPost }}>
            {children}
        </PostsContext.Provider>
    );
};

export const usePosts = () => useContext(PostsContext);


