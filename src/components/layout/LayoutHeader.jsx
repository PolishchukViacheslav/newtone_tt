import React from 'react';
import { useHistory } from 'react-router-dom';
import './LayoutHeader.scss';

export const LayoutHeader = () => {
  const history = useHistory();
  const handleRouteToCart = () => {
    history.push('/cart');
  };

  return (
    <>
      <h1 className="header__title">Horns&Hooves</h1>
      <button
        type="button"
        className="header__button"
        onClick={handleRouteToCart}
      >
        Cart
      </button>
    </>
  );
};
