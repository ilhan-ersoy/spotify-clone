import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        background:''
    },
    reducers: {
        setBackground: (state, action) => {
            state.background = action.payload
            // alert(state.background)
        }
    }
})

// Action creators are generated for each case reducer function
export const { setBackground } = themeSlice.actions

export default themeSlice.reducer