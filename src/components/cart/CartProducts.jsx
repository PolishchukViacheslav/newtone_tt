import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../../selectors/cartSelector';
import { priceReducer } from '../../app/functions';
import { delProduct } from './CartSlice';

export const CartProducts = () => {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();

  return (
    <ul>
      {cart.map((product) => (
        <li key={product.name} className="cart__product details">
          <div className="details__presentation">
            <img src={product.img} alt="product" className="details__img" />
            <span className="details__weight">{`weight ${product.cartWeight}${product.per}`}</span>
            <span className="details__price">{`price $${product.price}`}</span>
            {product.specialPrice
            && (
            <span className="details__price--special">
              {`special $${product.specialPrice.price}/${product.specialPrice.weight}${product.per}`}
            </span>
            )}
          </div>
          <div className="details__cost">
            <span className="details__total">{`total $${priceReducer([product])}`}</span>
          </div>
          <button
            type="button"
            className="details__remove_btn"
            onClick={() => dispatch(delProduct(product.name))}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};
