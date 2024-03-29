import { combineReducers } from "redux";
import { isDateReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";
import { bankingReducer } from "./module/bankingReducer";

// 여기선 reducer를 통합하는 과정을 처리함
// 여러 개의 리듀서를 combineReducers 객체형태로 리듀서를 선언
const rootReducer = combineReducers({
  isData: isDateReducer,
  counter: counterReducer,
  banking: bankingReducer,
});

export default rootReducer;
