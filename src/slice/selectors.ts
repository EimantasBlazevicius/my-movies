import states from "../store/states.interface";

export const getCurrentUserSelector = (state: states) => state.user.data;

export const getIsLoadingSelector = (state: states) => state.user.isLoading;
