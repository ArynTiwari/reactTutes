import { useReducer } from "react";
import { initalState, totdoReducer } from "./todoReducer";
function MyComponent() {
  const [state, dispatch] = useReducer(totdoReducer, initalState);
  console.log(state);
  const deleteClickHandler = (index) => {
    dispatch({ type: "DELETE_ITEM", payload: index });
  };

  const handleCheck = (isChecked, index) => {
    dispatch({
      type: "UPDATE_CHECKBOX",
      payload: { isChecked, index },
    });
  };

  // You can access the state values as `state.fruitsArr` and `state.chkBoxStates`

  // Example usage
  const { fruits, checkBoxes } = state;

  return (
    <div className="bg-slate-400 flex flex-col justify-center gap-x-2 items-center">
      {fruits.map((fruit, index) => (
        <div key={index} className="flex items-center justify-between gap-2">
          <span>{fruit}</span>
          <input
            type="checkbox"
            checked={checkBoxes[index]}
            onChange={(e) => handleCheck(e.target.checked, index)}
          />
          {checkBoxes[index] && (
            <button onClick={() => deleteClickHandler(index)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
