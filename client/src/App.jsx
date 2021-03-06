import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
      <div className="App">
        <AppNavbar></AppNavbar>
        <ShoppingList></ShoppingList>
      </div>
  );
};

export default App;
