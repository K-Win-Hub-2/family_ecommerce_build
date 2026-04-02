import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    total_pcs: 0,
  },
  reducers: {
    recalculateTotals: (state) => {
      state.total_pcs = state.products.length;
    },

    addWishlist: (state, action) => {
      const product = state.products.find(
        (p) => p.unitid === action.payload.unitid
      );

      if (!product) {
        state.products.push(action.payload);
      }

      wishlistSlice.caseReducers.recalculateTotals(state);
    },

    removeWishlist: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter(
        (p) => p.unitid !== id
      );

      wishlistSlice.caseReducers.recalculateTotals(state);
    },

    clearWishlist: (state) => {
      state.products = [];
      state.total_pcs = 0;
    },
  },
});

export const { addWishlist, removeWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;