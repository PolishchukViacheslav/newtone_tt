import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/products/productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
