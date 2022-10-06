import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    background: "",
    deviceBar: false,
    isLoginPage: false,
    aboutComp: false,
    artistsPage: false,
    gradient: "#201b50",
  },
  reducers: {
    setBackground: (state, action) => {
      state.background = action.payload;
      // alert(state.background)
    },
    setDeviceBar: (state, action) => {
      state.deviceBar = action.payload;
    },
    setIsLoginPage: (state, action) => {
      state.isLoginPage = action.payload;
    },
    setAboutComp: (state, action) => {
      state.aboutComp = action.payload;
    },
    setArtistsPage: (state, action) => {
      state.artistsPage = action.payload;
    },
    setGradient: (state, action) => {
      state.gradient = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setBackground,
  setDeviceBar,
  setIsLoginPage,
  aboutComp,
  setAboutComp,
  setArtistsPage,
  artistsPage,
  setGradient,
  gradient,
} = themeSlice.actions;

export default themeSlice.reducer;
