import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart(state, action) {

      const { id, title, price, src, selectedSize } = action.payload;
      const itemIndex = state.cartItem.findIndex((item) => item.id === id && item.selectedSize === selectedSize);

      if (itemIndex >= 0) {

        state.cartItem[itemIndex].cartQuantity += 1
        state.cartItem[itemIndex].totalPrice += price

      } else {

        const tempProduct = {  id, title, price, src, cartQuantity: 1, totalPrice: price, selectedSize }
        state.cartItem.push(tempProduct)

      }

      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
      state.selectedSize = selectedSize

    },
    deleteBtn(state, action) {

      const nextCart = state.cartItem.filter((item) => item.id !== action.payload.id);
      state.cartItem = nextCart;
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))

    },

    decreaseBtn(state, action) {

      const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id)

      if (state.cartItem[itemIndex].cartQuantity > 1) {

        state.cartItem[itemIndex].cartQuantity -= 1
        state.cartItem[itemIndex].totalPrice -= action.payload.price

      } else if (state.cartItem[itemIndex].cartQuantity <= 1) {

        state.cartItem[itemIndex].cartQuantity = 1

      };
      
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))

    }

  }
})


export const { addToCart, deleteBtn, decreaseBtn } = cartSlice.actions
export const cart = cartSlice.reducer;