import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {cart:[]},
  reducers: {
    addToCart(state, action) {
        console.log(state.cart)
        const itemExists = state.cart.find((item) => (item.id === action.payload.id && item.options.toString() == action.payload.options.toString()));
        if (itemExists) {
        itemExists.quantity++;
        } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        console.log(state)
        }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.cart.findIndex((item) => item.id === action.payload);
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
        const index = state.findIndex((item) => item.id === action.payload);
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