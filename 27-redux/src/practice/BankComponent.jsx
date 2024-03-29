import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../store/module/bankingReducer";

const BankComponent = () => {
  const [money, setMoney] = useState(0);
  const balance = useSelector((state) => state.banking);
  const dispatch = useDispatch();
  return (
    <>
      <h2>코딩온 은행</h2>
      <p>잔액 : {balance}원</p>
      <input type="number" value={money} onChange={(e) => setMoney(Number(e.target.value))} step={100} />
      <button onClick={() => dispatch(deposit(money))}>입금</button>
      <button onClick={() => dispatch(withdraw(money))}>출금</button>
    </>
  );
};

export default BankComponent;
