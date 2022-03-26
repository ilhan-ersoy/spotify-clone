import { createSlice } from '@reduxjs/toolkit'

export const devicesSlice = createSlice({
    name: 'device',
    initialState: {
        device:false,
    },
    reducers: {
        setDevice: (state, action) => {
            state.device = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { setDevice } = devicesSlice.actions

export default devicesSlice.reducer