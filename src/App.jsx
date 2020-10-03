import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { CartPage } from './pages/CartPage';
import { ProductsPage } from './pages/ProductsPage';

export const App = () => (
  <div className="App">
    <Switch>
      <Route exec path="/products" component={ProductsPage} />
      <Route exec path="/cart" component={CartPage} />
    </Switch>
  </div>
);
