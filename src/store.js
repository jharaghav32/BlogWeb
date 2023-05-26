import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './features/PostSlice.js'
export const store = configureStore({
    reducer:PostReducer
})


