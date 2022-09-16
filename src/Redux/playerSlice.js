import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
    name: 'counter',
    initialState: {
        controls: false,
        current: false,
        play: false,
        coverImage: false
    },
    reducers: {
        setControls: (state, action) => {
            state.controls = action.payload
        },
        setCurrent: (state, action) => {
            state.current = action.payload
        },
        setPlay: (state, action) => {
            state.play = action.payload
        },
        setCoverImage: (state, action) => {
            state.coverImage = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setPlay, setControls, setCurrent, setCoverImage } = playerSlice.actions

export default playerSlice.reducer