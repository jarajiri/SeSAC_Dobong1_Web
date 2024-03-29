const init = 0;
const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

export const deposit = (payload) => {
  return {
    type: DEPOSIT,
    payload: Number(payload),
  };
};

export const withdraw = (payload) => {
  return {
    type: WITHDRAW,
    payload: Number(payload),
  };
};
export const bankReducer = (state = init, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
