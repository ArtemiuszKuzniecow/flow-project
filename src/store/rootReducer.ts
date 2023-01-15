import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./slice";

const rootReducer = combineReducers({
  main: mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof store.getState>;
