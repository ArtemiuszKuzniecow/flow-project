import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed: true,
};

export const mainSlice = createSlice({
  name: "manychatClone",
  initialState,
  reducers: {
    openNavbar: (state) => ({ ...state, isCollapsed: false }),
    closeNavbar: (state) => ({ ...state, isCollapsed: true }),
  },
});

export const { reducer: mainReducer } = mainSlice;
