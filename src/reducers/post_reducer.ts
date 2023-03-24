export interface Post {
    categoryId: string;
    title: string;
    content: string;
}

export type State = {
    posts: Post[];
};

export type Action =
    | { type: 'ADD_POST'; payload: Post }
    | { type: 'REMOVE_POST'; payload: string };

export type Dispatch = (action: Action) => void;

export const post_reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD_POST':
            const newPosts = [...state.posts, action.payload];
            localStorage.setItem('posts', JSON.stringify(newPosts));
            return { ...state, posts: newPosts };
        case 'REMOVE_POST':
            const filteredPosts = state.posts.filter((post) => post.categoryId !== action.payload);
            localStorage.setItem('posts', JSON.stringify(filteredPosts));
            return { ...state, posts: filteredPosts };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
