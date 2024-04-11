import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart(state, action) {

      const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {

        state.cartItem[itemIndex].cartQuantity += 1
        // state.cartItem[itemIndex].totalPrice += action.payload.price

      } else {

        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItem.push(tempProduct)

      }

    },
    deleteBtn(state, action) {

      const nextCart = state.cartItem.filter((item) => item.id !== action.payload.id);
      state.cartItem = nextCart;

    },

    decreaseBtn(state, action) {

      const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id)

      if (state.cartItem[itemIndex].cartQuantity > 1) {

        state.cartItem[itemIndex].cartQuantity -= 1

      } else if (state.cartItem[itemIndex].cartQuantity <= 1){

        state.cartItem[itemIndex].cartQuantity = 1

      };
      
    }

  }
})


export const { addToCart, deleteBtn, decreaseBtn } = cartSlice.actions
export const cart = cartSlice.reducer;