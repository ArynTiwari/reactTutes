import React, { useContext } from "react";
import { CountContext } from "./Counter";

const NewCunterValue = () => {
  const count = useContext(CountContext);
  return <span>{count}</span>;
};

export default NewCunterValue;
