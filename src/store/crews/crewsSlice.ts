import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Crew } from "../crew/crewType";

const initialState: Crew[] = [
  {
    crewId: 100,
    leaderName: "워니",
    crewName: "먹부심",
    tags: ["모임", "음식"],
    type: false,
    cost: true,
    introduction: "맛있는 거 먹으러 다니는 모임",
    headcount: 8,
    capacity: 15,
    thumbnail: null,
  },
  {
    crewId: 200,
    leaderName: "미뇽이",
    crewName: "오버워치 소집",
    tags: ["게임"],
    type: true,
    cost: false,
    introduction: "소집에 응하실 분을 구합니다",
    headcount: 3,
    capacity: 5,
    thumbnail: null,
  },
];

export const crewsSlice = createSlice({
  name: "crews",
  initialState,
  reducers: {
    fetchCrews: (_, action: PayloadAction<Crew[]>) => {
      return action.payload;
    },
  },
});

export const { fetchCrews } = crewsSlice.actions;
export default crewsSlice.reducer;
