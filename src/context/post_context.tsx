import { useContext, createContext, useReducer, useEffect } from 'react'
import { type Post, post_reducer } from '~/reducers/post_reducer';

const PostsContext = createContext(undefined);

const PostsProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(post_reducer, { posts: [] });

    useEffect(() => {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            dispatch({ type: 'ADD_POST', payload: JSON.parse(storedPosts) });
        }
    }, []);

    const createPost = ({...data }) => {
        
    };


    return (
        <PostsContext.Provider>
            {children}
        </PostsContext.Provider>
    );
};


const usePostsDispatch = () => {
    const context = useContext(PostsDispatchContext);
    if (context === undefined) {
        throw new Error('usePostsDispatch must be used within a PostsProvider');
    }
    return context;
};
