import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { onlyRegularPriceReducer, priceReducer } from '../../app/functions';
import { cartSelector } from '../../selectors/cartSelector';
import './Cart.scss';
import { CartProducts } from './CartProducts';

export const Cart = () => {
  const cart = useSelector(cartSelector);
  const history = useHistory();
  const handleRouteToProducts = () => {
    history.push('/');
  };

  const totalPrice = useMemo(() => priceReducer(cart), [cart]);
  const savingsAmount = (onlyRegularPriceReducer(cart) - totalPrice) || undefined;

  return (
    <div className="cart">
      <div className="cart__products_area">
        <CartProducts />
      </div>
      <div className="cart__payments payments">
        <div className="payments__item payment">
          <span className="payment__title">Subtotal</span>
          <span className="payment__value">{`$${totalPrice}`}</span>
        </div>
        {savingsAmount && (
        <div className="payments__item payment">
          <span className="payment__title">You saved</span>
          <span className="payment__value">{`$${savingsAmount}`}</span>
        </div>
        )}
        <div className="payments__item payment">
          <span className="payment__title">Delivery</span>
          <span className="payment__value">Free</span>
        </div>
        <div className="payments__item payment">
          <span className="payment__title">Taxes and fees</span>
          <span className="payment__value">- -</span>
        </div>
        <div className="payments__item total_payment">
          <span className="total_payment__title">Est.total</span>
          <span className="total_payment__value">{`$${totalPrice}`}</span>
        </div>
        <div className="payments__buttons">
          <button type="button" className="payments__pay_button">
            Pay
          </button>
          <button type="button" className="payments__shop_button" onClick={handleRouteToProducts}>
            Go shopping
          </button>
        </div>
      </div>
    </div>
  );
};
