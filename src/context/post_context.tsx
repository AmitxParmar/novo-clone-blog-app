import { useContext, createContext, useEffect, useState } from 'react'

type Post = {
    categoryId: string;
    title: string;
    content: string;
}

interface State {
    createPost(post: Post): void;
}
const PostsContext = createContext<State | undefined>(undefined);

interface IPostProvider {
    children: React.ReactNode
}

export const PostsProvider: React.FC<IPostProvider> = ({ children }) => {
    const [posts, setPosts] = useState<[]>([]);

    useEffect(() => {
        localStorage.getItem('posts');
    }, []);

    /* const createPost = (post: Post): void => {
        const getExistingPosts = () => {
            const posts = localStorage.getItem('posts');
            return posts ? JSON.parse(posts) : [];
        }
        existingArray.push(post);
        localStorage.setItem('posts', JSON.stringify(existingArray));
    }; */


    return (
       null
    );
};

export const usePosts = () => useContext(PostsContext);


