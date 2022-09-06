import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingcartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingcartItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          description: newItem.description,
          image: newItem.image,
        });
      } else {
        existingcartItem.quantity++;
        existingcartItem.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const { removeAll } = action.payload;
      const existingCartItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingCartItem.quantity === 1 || removeAll === true) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingCartItem.quantity--;
        existingCartItem.totalPrice -= existingCartItem.price;
      }
    },
    clearItem(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      state.totalQuantity -= item.quantity;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearCart(state, actions) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
