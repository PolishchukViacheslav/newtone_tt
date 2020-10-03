import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/products/productsSlice';
import purchasesReducer from '../components/cart/CartSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: purchasesReducer,
  },
});
