import React, { createContext, useState } from "react";
import Profile from "./Profile";
const CountContext = createContext();
const Counter = () => {
  let [count, setCount] = useState(0);
  let handleIncrement = () => {
    setCount(count + 1);
  };
  let handleDecrement = () => {
    setCount(count - 1);
  };
  console.log("Rendered Counter");
  return (
    <CountContext.Provider value={count}>
      <>
        <div className="flex flex-col gap-3 m-5 p-5">
          <div className="flex flex-row items-center gap-2 font-serif text-xl">
            Counter value :-{" "}
            <span className="bg-gray-300 p-1 rounded-md">{count}</span>
          </div>
          <div className="gap-2 flex flex-row">
            <button
              className="bg-gray-300 rounded-md p-2"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className="bg-gray-300 rounded-md p-2"
              onClick={handleDecrement}
            >
              Decrement
            </button>
          </div>
        </div>
        <Profile name="Aryan" username="Gally"/>
      </>
    </CountContext.Provider>
  );
};

export default Counter;
export {CountContext}