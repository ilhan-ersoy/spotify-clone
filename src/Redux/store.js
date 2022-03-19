import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerSlice'
import themeReducer from './themeSlice'

export default configureStore({
    reducer: {
        player:playerReducer,
        theme:themeReducer
    }
})