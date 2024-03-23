import {configureStore} from "@reduxjs/toolkit";
import postsSlice from "../featuers/postsSlice";
const store = configureStore({
    reducer:{
        postsSlice
    }
})
export default store