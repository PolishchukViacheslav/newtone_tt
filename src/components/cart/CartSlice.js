import { createSlice } from '@reduxjs/toolkit';

export const purchasesSlice = createSlice({
  name: 'cart',
  initialState: {
    purchases: {},
  },
  reducers: {
    setPurchases: (state, action) => ({
      ...state,
      purchases: {
        ...state.purchases,
        ...action.payload,
      },
    }),
    delProduct: (state, action) => {
      const { [action.payload]: deleted, ...withoutDeleted } = state.purchases;
      if (!Object.keys(state.purchases)) {
        return state;
      }

      return {
        ...state,
        purchases: withoutDeleted,
      };
    },
  },
});

export const { setPurchases, delProduct } = purchasesSlice.actions;

export const selectPurchases = (state) => state.cart.purchases;

export default purchasesSlice.reducer;
