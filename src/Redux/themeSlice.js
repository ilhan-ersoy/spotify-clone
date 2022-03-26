import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        background:'',
        deviceBar:false,
        isLoginPage:false
    },
    reducers: {
        setBackground: (state, action) => {
            state.background = action.payload
            // alert(state.background)
        },
        setDeviceBar: (state, action) => {
            state.deviceBar = action.payload
        },
        setIsLoginPage: (state, action) => {
            state.isLoginPage = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setBackground, setDeviceBar, setIsLoginPage } = themeSlice.actions

export default themeSlice.reducer