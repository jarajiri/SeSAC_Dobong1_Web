import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../store/module/bankReducer";

const CodingBank = () => {
  const balance = useSelector((state) => state.bank);
  // 모든 컴포넌트에서 사용할 state
  const money = useRef();
  const dispatch = useDispatch();

  return (
    <>
      <h2>Coding Bank</h2>
      <p>잔액 : {balance}원</p>
      <input type="number" ref={money} step={1000} />
      <button onClick={() => dispatch(deposit(money.current.value))}>입금</button>
      <button onClick={() => dispatch(withdraw(money.current.value))}>출금</button>
    </>
  );
};

export default CodingBank;
