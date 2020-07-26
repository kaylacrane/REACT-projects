import React from 'react';
import ItemList from './ItemList';
import './App.css';
const arrayOfItems = [
  {
    name: 'Choco Crispies',
    description: 'Chocolate covered corn flakes',
    quantity: 2,
    category: 'Cereal',
    price: 5,
  },
  {
    name: 'Cheeseburger',
    description: 'Very healthy grilled burger with cheddar cheese',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Mineral Water',
    description: 'Water from Himalayan springs',
    quantity: 2,
    category: 'Drinks',
    price: 3,
  },
  {
    name: 'Cola',
    description: 'Fizzy pop drink in mystery flavor',
    quantity: 5,
    category: 'Drinks',
    price: 5,
  },
  {
    name: 'Fish Sandwich',
    description: 'White fish breaded patty on a bun',
    quantity: 4,
    category: 'Fast-food',
    price: 12,
  },
  {
    name: 'Potato Wedges',
    description: 'Fat french fries with special seasoning',
    quantity: 12,
    category: 'Fast-food',
    price: 8,
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ItemList items={arrayOfItems} />
      </div>
    );
  }
}

export default App;
