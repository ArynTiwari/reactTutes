import { useDispatch, useSelector } from "react-redux";
import { check, remove } from "../store/slices/todo";
function ReduxTodo() {
  //   const [state, dispatch] = useReducer(totdoReducer, initalState);

  const state = useSelector((state) => state.todo);
  console.log(state);
  const dispatch = useDispatch();
  const deleteClickHandler = (index) => {
    dispatch(remove(index));
  };

  const handleCheck = (isChecked, index) => {
    console.log(isChecked, index);
    dispatch(check({ isChecked, index }));
  };
  const { fruits, checks } = state;
  return (
    <div className="bg-slate-400 main flex justify-center">
      <div className="card justify-between items-center p-2 bg-white">
        {fruits.map((fruit, index) => (
          <div key={index} className="flex justify-between gap-5">
            <span className="w-2/3">{fruit}</span>
            <input
              type="checkbox"
              checked={checks[index]}
              onChange={(e) => handleCheck(e.target.checked, index)}
            />
            <div className="">
              {checks[index] && (
                <button
                  className="bg-black text-white rounded-md"
                  onClick={() => deleteClickHandler(index)}
                >
                  X
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReduxTodo;
