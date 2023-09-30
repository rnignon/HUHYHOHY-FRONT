import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "./userType";

const initialState: User = {
  userId: "",
  name: "",
  join_crew: [],
  preference_crew: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (_, action: PayloadAction<User>) => {
      return action.payload;
    },

    logout: (_) => {
      return initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
