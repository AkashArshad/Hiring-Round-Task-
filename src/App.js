import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, updateQuantity } from './actions';
import './styles.css';

const App = () => {
  const dispatch = useDispatch();
  const {items} = useSelector((state) => state?.items);
  const handleAddItem = () => {
    dispatch(addItem(prompt('Enter item name'), parseInt(prompt('Enter quantity'), 10)));
  };

  const handleDeleteItem = (index) => {
    dispatch(deleteItem(index));
  };

  const handleQuantityChange = (index) => {
    const newQuantity = parseInt(prompt('Enter new quantity'), 10);
    if (!isNaN(newQuantity)) {
      dispatch(updateQuantity(index, newQuantity));
    }
  };

  return (
    <div className='container'>
      <div className='header'>
      <h1>Item List</h1>
      <button onClick={handleAddItem}>Add Item</button></div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items&&items?.length>0?items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td className='action'>
                <button className='delete-button' onClick={() => handleDeleteItem(index)}>Delete</button>
                <button onClick={() => handleQuantityChange(index)}>Update Quantity</button>
              </td>
            </tr>
          )):<tr>
              <td className='no-data-row' colSpan='3'>No Data Found</td>
            </tr>}
        </tbody>
      </table>

    </div>
  );
};

export default App;
