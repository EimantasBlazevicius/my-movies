import states from "../store/states.interface";

export const getCurrentUserSelector = (state: states) => state.user.data;
