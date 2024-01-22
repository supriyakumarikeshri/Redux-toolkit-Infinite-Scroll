import { configureStore } from "@reduxjs/toolkit";
//import articleReducer from "./articleSlicer"
import articleReducer from "./articleSlicer";
export const store = configureStore({
    reducer: {
        article: articleReducer
    }

})

// const store = configureStore({
//     reducer: rootReducer,
//     // other configuration options if needed
//   });

