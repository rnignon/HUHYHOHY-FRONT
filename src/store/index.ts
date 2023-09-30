import { configureStore } from "@reduxjs/toolkit";
import crewSlice from "./crew/crewSlice";
import crewsSlice from "./crews/crewsSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    crewSlice,
    crewsSlice,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
