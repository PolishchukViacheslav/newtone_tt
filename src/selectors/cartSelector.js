import { createSelector } from 'reselect';
import { selectPurchases } from '../components/cart/CartSlice';
import { selectProducts } from '../components/products/productsSlice';

export const cartSelector = createSelector(
  selectProducts,
  selectPurchases,
  (products, purchases) => {
    const cart = [];
    Object.keys(purchases).forEach((item) => {
      const productData = products.find((product) => product.name === item);
      cart.push({
        ...productData,
        cartWeight: purchases[item],
      });
    });
    return cart;
  },
);
