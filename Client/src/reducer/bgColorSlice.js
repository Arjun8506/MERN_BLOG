// bgColorSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const bgColorSlice = createSlice({
  name: 'bgColor',
  initialState: {
    color: 'light', // Initial background color theme
  },
  reducers: {
    toggleTheme: (state) => {
      state.color = state.color === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = bgColorSlice.actions;

export const selectBgColor = (state) => state.bgColor.color;

export default bgColorSlice.reducer;
