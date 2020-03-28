import { createStore, combineReducers } from "redux";

const initialState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1
};

function render(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_TIME":
      const { payload } = action;
      return { ...state, year: payload.year, month: payload.month };
    default:
      return state;
  }
}

// 向外输出 Store
export const storeInstance = createStore(
  combineReducers({ namespace: () => "base", render })
);
