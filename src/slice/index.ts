import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { User } from "firebase/auth";

const initialState: UserState = {
  data: {} as User,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getUserFailure: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setActiveUser: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export const { getUser, getUserSuccess, setActiveUser, getUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
