import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { CartPage } from './pages/CartPage';
import { ProductsPage } from './pages/ProductsPage';

export const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={ProductsPage} />
      <Route exact path="/cart" component={CartPage} />
    </Switch>
  </div>
);
