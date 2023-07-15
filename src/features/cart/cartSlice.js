import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //we canderive state from this array like 'totalPrice', 'length'
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      if (window.confirm("Remove this item from cart?"))
        state.cart = state.cart.filter(
          (item) => item.pizzaId != action.payload
        );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);

      if (item.quantity <= 1) {
        cartSlice.caseReducers.removeItem(state, action);
      }
      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// if we change state shape, the namings, we just replace that here
export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = function (id) {
  return (state) =>
    state.cart.cart.find((item) => item.pizzaId == id)?.quantity ?? 0;
};
// 'reselect' library to checkout and optimize these selectors
// for performance issues in larger apps
