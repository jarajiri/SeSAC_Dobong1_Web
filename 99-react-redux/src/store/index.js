import { combineReducers } from "redux";
import { bankReducer } from "./module/bankReducer";
import { todo } from "./module/todo";

const rootReducer = combineReducers({
  bank: bankReducer,
  todo: todo,
});

export default rootReducer;
