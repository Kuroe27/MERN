import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import postReducer from '../features/posts/postSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true

})
export default store