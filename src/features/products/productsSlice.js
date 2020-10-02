import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    specialPrices: [],
  },
  reducers: {
    setProducts: (state, action) => ({
      ...state,
      list: action.payload,
    }),
    setSpecialPrices: (state, action) => ({
      ...state,
      specialPrices: action.payload,
    }),
  },
});

export const { setProducts, setSpecialPrices } = productsSlice.actions;

export const selectProducts = (state) => state.products.list;

export default productsSlice.reducer;
