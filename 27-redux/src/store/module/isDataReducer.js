const initialState = false;
const CHANGE = "isData/CHANGE";

export const changeData = () => {
  return { type: CHANGE };
};
export const isDateReducer = (state = initialState, action) => {
  if (action.type === "isData/CHANGE") {
    return !state;
  }
  return state;
};
