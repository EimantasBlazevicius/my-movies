export type UserState = {
  data: UserData;
  isLoading: boolean;
};

export interface UserData {
  name?: string;
}
