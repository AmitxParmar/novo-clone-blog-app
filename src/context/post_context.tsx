import { useContext, createContext, useReducer, useEffect, useState } from 'react'

const PostsContext = createContext(undefined);

interface IPostProvider {
    children: React.ReactNode
}

export const PostsProvider: React.FC<IPostProvider> = ({ children }) => {
    const [posts, setPosts] = useState<[]>([]);

    useEffect(() => {
        localStorage.getItem('posts');
    }, []);

    type Post = {
        categoryId: string;
        title: string;
        content: string;
    }
    const createPost = (post: Post): void => {
        const existingArray: Post[]= JSON.parse(localStorage.getItem('posts')) || "[]";

        if (post) {
            existingArray.push(post);
            localStorage.setItem('posts', JSON.stringify(existingArray));
        }

    };


    return (
        <PostsContext.Provider value={{ createPost }} >
            {children}
        </PostsContext.Provider>
    );
};

export const usePosts = () => useContext(PostsContext);


