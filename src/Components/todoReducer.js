export const initalState = {
  fruits: ["apple", "mango", "kiwi", "banana"],
  checkBoxes: Array(4).fill(false),
};
export const totdoReducer = (state, action) => {
  switch (action.type) {
    case "SET_FRUITS_ARR":
      return { ...state, fruits: action.payload };
    case "SET_CHKBOX_STATES":
      return { ...state, checkBoxes: action.payload };
    case "DELETE_ITEM":
      return {
        ...state,
        fruits: state.fruits.filter((_, i) => i !== action.payload),
        checkBoxes: state.checkBoxes.filter((_, i) => i !== action.payload),
      };
    case "UPDATE_CHECKBOX":
      return {
        ...state,
        checkBoxes: state.checkBoxes.map((state, i) =>
          i === action.payload.index ? action.payload.isChecked : state
        ),
      };
    default:
      return state;
  }
};
