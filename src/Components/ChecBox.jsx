import { useState } from "react";

const arr = ["Apple", "Orange", "Banana", "Kiwi", "SitaFal", "Avakado"];

export default function App() {
  const [fruitsArr, setFruitsArr] = useState([...arr]);
  const [chkBoxStates, setChkBoxStates] = useState(fruitsArr.map(() => false));
  const deleteClickHandler = (index) => {
    const filteredArr = fruitsArr.filter((_, i) => i !== index);
    setFruitsArr(filteredArr);
    setChkBoxStates((prevStates) => {
      const newArray = prevStates.filter((_, i) => i !== index);
      return newArray;
    });
  };
  const handleCheck = (isChecked, index) => {
    setChkBoxStates((prevStates) => {
      const newArray = [...prevStates];
      newArray[index] = isChecked;
      return newArray;
    });
  };          
  return (
    <div className="my-4 mx-4 p-2">
      <h1>Hello CodeSandbox</h1>
      {fruitsArr.map((element, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              checked={chkBoxStates[index]} // Set the checked state based on chkBoxStates
              onChange={(e) => handleCheck(e.target.checked, index)}
            />
            &nbsp;&nbsp;
            {element} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {chkBoxStates[index] && (
              <button onClick={() => deleteClickHandler(index)}>Delete</button>
            )}
          </div>
        );
      })}
    </div>
  );
}
