import React from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Count from './components/Count/Count';

function App() {
  return (
    <div className="App">
      <Count />
      <Shop />
      <Cart />
    </div>
  );
}

export default App;
