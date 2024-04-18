import { createSlice } from '@reduxjs/toolkit'
import { generateTempId } from '../helpers';

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

      const { id, title, price, src, selectedSize, quantity } = action.payload;
      const itemIndex = state.cartItem.findIndex((item) => item.id === id && item.selectedSize === selectedSize);

      if (itemIndex >= 0) {

        state.cartItem[itemIndex].cartQuantity += quantity
        state.cartItem[itemIndex].totalPrice += price * quantity
        state.cartTotalQuantity += quantity

      } else {

        const tempId = generateTempId()
        const tempProduct = { id, tempId, title, price, src, cartQuantity: quantity, totalPrice: price * quantity, selectedSize }
        state.cartItem.push(tempProduct)
        state.cartTotalQuantity += quantity

      }

      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
      state.selectedSize = selectedSize
    },

    decreaseBtn(state, action) {

      const { id, selectedSize } = action.payload
      const itemIndex = state.cartItem.findIndex((item) => item.id === id && item.selectedSize === selectedSize)

      if (state.cartItem[itemIndex].cartQuantity > 1) {

        state.cartItem[itemIndex].cartQuantity -= 1
        state.cartItem[itemIndex].totalPrice -= action.payload.price

      } else if (state.cartItem[itemIndex].cartQuantity <= 1) {

        state.cartItem[itemIndex].cartQuantity = 1

      };

      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))

    },

    deleteBtn(state, action) {

      const { id, selectedSize, tempId } = action.payload
      const nextCart = state.cartItem.filter((item) => !(item.id === id && item.selectedSize === selectedSize && item.tempId === tempId));
      state.cartItem = nextCart;
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
      console.log(id);
      console.log(selectedSize);

    },

    getTotal(state, action) {

      let { total, quantity } = state.cartItem.reduce((cartTotal, item) => {
        const { price, cartQuantity } = item;
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal

      }, {
        total: 0,
        quantity: 0
      });

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

    }

  }
})


export const { addToCart, deleteBtn, decreaseBtn, getTotal } = cartSlice.actions
export const cart = cartSlice.reducer;