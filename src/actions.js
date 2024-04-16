export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addItem = (name, quantity) => ({
  type: ADD_ITEM,
  payload: { name, quantity }
});

export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  payload: { index }
});

export const updateQuantity = (index, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { index, quantity }
});
