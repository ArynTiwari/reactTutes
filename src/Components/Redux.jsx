import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/slices/counter";

const Redux = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center bg-green-300 m-4 p-4 justify-center">
      <div>Counter Value {count}</div>
      <div className="flex gap-4">
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
      </div>
    </div>
  );
};

export default Redux;
