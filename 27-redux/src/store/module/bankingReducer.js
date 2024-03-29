// const initialState = { amount: 0, money: 0 };

// export const bankingReducer = (state = initialState, action) => {
//   if (action.type === "deposit") {
//     console.log(state.money);
//     console.log(state.amount);
//     return state.money + state.amount;
//   } else {
//     return state.money - state.amount;
//   }
// };

const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

export const deposit = (payload) => ({ type: DEPOSIT, payload: payload });
export const withdraw = (payload) => ({ type: WITHDRAW, payload: payload });

const initialState = 0;
export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
