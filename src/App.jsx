import { useState } from 'react';
import "./App.css"
function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className='item1'>
      <div className="item">
        <h1>Grocery Bud</h1>
        <form onSubmit={handleAddItem}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="btn" type="submit">Add Item</button>
        </form>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className='btn1' onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
