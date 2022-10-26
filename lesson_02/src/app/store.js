import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postS/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
