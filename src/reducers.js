// reducers.js
import { ADD_ITEM, DELETE_ITEM, UPDATE_QUANTITY } from './actions';

const initialState = {
  items: []
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state?.items?.filter((item, index) => index !== action.payload.index)
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state?.items?.map((item, index) => {
          if (index === action.payload.index) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        })
      };
    default:
      return state;
  }
};

export default itemReducer;
