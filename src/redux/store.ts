import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import categoryReducer from "./category/categorySlice";

const store: any = configureStore({
    reducer: {
        counter: counterReducer,
        category: categoryReducer
    }
});

// selector
export type AppRootState = ReturnType<typeof store.getState>;
// dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
