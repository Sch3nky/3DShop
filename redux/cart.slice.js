import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {cart:[]},
  reducers: {
    addToCart(state, action) {
        const itemExists = state.cart.find((item) => (item.id === action.payload.id && JSON.stringify(item.options) == JSON.stringify(action.payload.options)));
        if (itemExists) {
        itemExists.quantity++;
        } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id && JSON.stringify(item.options) == JSON.stringify(action.payload.options));
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id && JSON.stringify(item.options) == JSON.stringify(action.payload.options));
      if (item.quantity === 1) {
        const index = state.cart.findIndex((item) => item.id === action.payload.id && JSON.stringify(item.options) == JSON.stringify(action.payload.options));
        state.cart.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      if (action.payload == ""){
        state.cart = []
      }
      else{
        const index = state.cart.findIndex((item) => item.id === action.payload.id && JSON.stringify(item.options) == JSON.stringify(action.payload.options));
        state.cart.splice(index, 1);
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;