import { createSlice } from "@reduxjs/toolkit";

const reducerName = "form";

export const formSlice = createSlice({
  name: reducerName,
  initialState: {},
  reducers: {},
});

export const formSliceReducer = { [reducerName]: formSlice.reducer };
