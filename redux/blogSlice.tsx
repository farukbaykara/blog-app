import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Blog {
    id: string;
    value: string;
    description: string;
}

interface BlogState {
    blogList: Blog[];
}

const initialState: BlogState = {
    blogList: [],
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlog(state, action: PayloadAction<Blog>) {
            state.blogList.push(action.payload); // Add a unique ID
        },
        deleteBlog(state, action: PayloadAction<string>) {
            state.blogList = state.blogList.filter((blog) => blog.id !== action.payload); // Remove by ID
        },
    },
});

export const { setBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;