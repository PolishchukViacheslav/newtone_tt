import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { CartPage } from './pages/CartPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { Page404 } from './pages/Page404';

export const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route component={Page404} />
    </Switch>
  </div>
);
