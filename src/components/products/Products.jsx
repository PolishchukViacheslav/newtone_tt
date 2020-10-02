import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from './Product';
import './Products.scss';
import { selectProducts } from './productsSlice';

export const Products = () => {
  const products = useSelector(selectProducts);

  return (
    <div className="products">
      <ul className="products__list">
        {products.map((item) => (
          <Product key={item.name} data={item} />
        ))}
      </ul>
    </div>
  );
};
