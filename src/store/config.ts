import { configureStore } from "@reduxjs/toolkit";
import ConfigSlice from "../store";

export const store = configureStore({
    reducer: { Config: ConfigSlice.reducer }
});
export type RootState = ReturnType<typeof store.getState>;



