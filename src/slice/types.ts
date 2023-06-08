import { User } from "firebase/auth";

export type UserState = {
  data: User;
  isLoading: boolean;
};
