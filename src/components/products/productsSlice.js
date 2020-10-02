import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('products/getProducts', async (endpoint) => {
  const fetchPromise = await fetch(endpoint);
  const { results } = await fetchPromise.json();
  return results;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [
      {
        name: 'banana',
        img: 'https://content.silpo.ua/sku/ecommerce/3/480x480wwm/32485_480x480wwm_96440ee6-d6f0-e532-2aa7-422557c42cfc.png',
        price: 10,
        per: 'kg',
      },
      {
        name: 'apple',
        img: 'https://content.silpo.ua/sku/ecommerce/15/480x480wwm/152947_480x480wwm_c7692e8f-ee6a-375d-f624-cbef6ba3f591.png',
        price: 8,
        per: 'kg',
      },
      {
        name: 'papaya',
        img: 'https://content.silpo.ua/sku/ecommerce/33/480x480wwm/339508_480x480wwm_74615496-1da2-f90a-f50a-a973f3b59875.png',
        price: 10,
        specialPrice: {
          price: 25,
          weight: 3,
        },
        per: 'kg',
      },
    ],
    isLoading: false,
    error: '',
  },
  reducers: {
    setProducts: (state, action) => ({
      ...state,
      list: action.payload,
    }),
    setIsLoading: (state, action) => ({
      ...state,
      isLoading: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => ({
      ...state,
      list: action.payload,
      isLoading: false,
      error: '',
    }),
    [getProducts.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getProducts.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});

export const { setProducts, setIsLoading, setError } = productsSlice.actions;

export const selectProducts = (state) => state.products.list;

export default productsSlice.reducer;
