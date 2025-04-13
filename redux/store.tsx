import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice'; // Import the blog slice reducer

// Create the Redux store
const store = configureStore({
  reducer: {
    blog: blogReducer, // Add the blog reducer to the store
  },
});

// Export the store
export default store;

// Export types for use in the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;