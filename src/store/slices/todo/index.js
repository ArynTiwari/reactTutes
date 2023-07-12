import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fruits: ["mango", "apple", "kiwi", "banana"],
  checks: [false, false, false, false],
};
export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    check: (state, action) => {
      console.log("Action is " + action.payload.isChecked);
      state.checks = state.checks.map((checked, i) => {
        if (i === action.payload.index) {
          return action.payload.isChecked;
        } else {
          return checked;
        }
      });
    },
    remove: (state, action) => {
      let index = action.payload;
      state.fruits.splice(index, 1);
      state.checks.splice(index, 1);
      state.checks = state.checks.map(() => false);
    },
  },
});
export const { check, remove } = todoSlice.actions;
export default todoSlice.reducer;
