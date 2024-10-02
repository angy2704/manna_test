// store.js
import { createStore } from 'redux';

const initialState = {
  tableData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
      };
    case 'DELETE_DATA':
      return {
        ...state,
        tableData: state.tableData.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
