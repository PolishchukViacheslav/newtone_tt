import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../selectors/cartSelector';
import './Cart.scss';

export const Cart = () => {
  const cart = useSelector(cartSelector);

  const priceReducer = (purchases) => {
    const total = purchases.reduce((subTotal, product) => {
      if (Object.prototype.hasOwnProperty.call(product, 'specialPrice')) {
        const { specialPrice, cartWeight, price } = product;
        if ((cartWeight / specialPrice.weight) > 1) {
          const specialPriceQuantity = Math.floor(cartWeight / specialPrice.weight);
          const regularPriceQuantity = cartWeight
          % (specialPriceQuantity * specialPrice.weight);
          const productTotalCost = (specialPriceQuantity * specialPrice.price)
          + (regularPriceQuantity * price);

          return subTotal + productTotalCost;
        }
        return subTotal + (cartWeight * price);
      }
      return subTotal + (product.cartWeight * product.price);
    }, 0);
    return total;
  };

  const totalPrice = useMemo(() => priceReducer(cart), [cart]);

  return (
    <div className="cart">
      <div className="cart__products_area">jgf</div>
      <div className="cart__payments">
        <div>
          <span>Subtotal</span>
          <span>{`$${totalPrice}`}</span>
        </div>
      </div>
    </div>
  );
};
