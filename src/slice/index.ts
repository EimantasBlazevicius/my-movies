import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState, UserData } from "./types";

const initialState: UserState = {
  data: {},
  isLoading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getUser, getUserSuccess } = userSlice.actions;
export default userSlice.reducer;
