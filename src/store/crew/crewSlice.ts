import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Crew } from "./crewType";

const initialState: Crew = {
  crewId: -1,
  leaderName: "",
  crewName: "",
  tags: [],
  type: true,
  cost: true,
  introduction: "",
  headcount: 0,
  capacity: 0,
  thumbnail: "",
};

export const crewSlice = createSlice({
  name: "crew",
  initialState,
  reducers: {
    setActiveCrew: (_, action: PayloadAction<Crew>) => {
      return action.payload;
    },

    unsetActiveCrew: (_) => {
      return initialState;
    },
  },
});

export const { setActiveCrew, unsetActiveCrew } = crewSlice.actions;
export default crewSlice.reducer;
