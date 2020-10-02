import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { Products } from './components/products/Products';
import { ProductsPage } from './pages/ProductsPage';

export const App = () => (
  <div className="App">
    <Switch>
      <Route exec path="/products" component={ProductsPage} />
    </Switch>
  </div>
);
