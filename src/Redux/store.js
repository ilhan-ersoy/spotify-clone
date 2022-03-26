import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerSlice'
import themeReducer from './themeSlice'
import devicesReducer from './devicesSlice'


export default configureStore({
    reducer: {
        player:playerReducer,
        theme:themeReducer,
        devices:devicesReducer
    }
})