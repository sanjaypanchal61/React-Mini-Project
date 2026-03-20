import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    { id: 1, name: "Laptop", price: 20000 },
    { id: 2, name: "Camera", price: 30000 },
    { id: 3, name: "Phone", price: 40000 },
  ],
  cart: []
}

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.cart = []
    },
  }
})

export const { addToCart,removeFromCart,clearCart } = shoppingSlice.actions
export default shoppingSlice.reducer