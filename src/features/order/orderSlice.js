import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  currentOrder: null,
  item: 1,
  total: 0,
  userInfo: {
    name: '',
    email: '',
    phone: '',
    location: ''
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.currentOrder = action.payload;
      state.total = parseFloat(action.payload.price.replace('$', '')) || 0;
      state.item = 1;
    },
    addItem: (state) => {
      const currentPrice = parseFloat(state.currentOrder?.price.replace('$', '')) || 0;
      state.item += 1;
      state.total += currentPrice;
    },
    decItem: (state) => {
      if (state.item > 1) {
        const currentPrice = parseFloat(state.currentOrder?.price.replace('$', '')) || 0;
        state.item -= 1;
        state.total -= currentPrice;
      }
    },
    submitOrder: (state, action) => {
      state.orders.push({
        ...state.currentOrder,
        item: state.item,
        total: state.total,
        userInfo: action.payload,  // Save user info with the order
      });
      state.currentOrder = null;
      state.item = 1;
      state.total = 0;
      state.userInfo = { name: '', email : '', phone: '', location: '' };
    },
  },
});

export const { setOrder, addItem, decItem, submitOrder } = orderSlice.actions;
export default orderSlice.reducer;
