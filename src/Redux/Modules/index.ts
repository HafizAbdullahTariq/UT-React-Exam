import { combineReducers } from "@reduxjs/toolkit";
import formReducer, { formAPI } from "./Form";
import counterReducer from "./Counter";

export const combinedReducer = combineReducers({
  ...formReducer,
  ...counterReducer,
});

export const combinedMiddleware = formAPI.middleware;
