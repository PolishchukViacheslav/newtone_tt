import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { CartPage } from './pages/CartPage';
import { ProductsPage } from './pages/ProductsPage';
import { StartPage } from './pages/StartPage';

export const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route component={StartPage} />
    </Switch>
  </div>
);
