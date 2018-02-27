import React, { Component } from 'react';
import Products from './Products';
import Cart from './Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shopping Cart</h1>
        </header>
        <p className="App-intro">
          Shopping Cart
        </p>
        <Products/>
        <Cart/>
      </div>
    );
  }
}

export default App;
