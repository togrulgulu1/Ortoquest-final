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

      const { id, title, price, src, selectedSize } = action.payload;
      const itemIndex = state.cartItem.findIndex((item) => item.id === id && item.selectedSize === selectedSize);

      if (itemIndex >= 0) {

        state.cartItem[itemIndex].cartQuantity += 1
        state.cartItem[itemIndex].totalPrice += price
        state.cartTotalQuantity += 1

      } else {

        const tempId = generateTempId()
        const tempProduct = { id, tempId, title, price, src, cartQuantity: 1, totalPrice: price, selectedSize }
        state.cartItem.push(tempProduct)
        state.cartTotalQuantity += 1

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







export const addItemToCart = (cartItems, cartItemToAdd, selectedSize) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    if (existingCartItem.productSize === selectedSize) {
      console.log('product sizes are the same');
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
          : cartItem
      );
    } else {
      console.log('product sizes are not the same');
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            productSize: selectedSize,
          }
          : cartItem
      );
    }
  }
  let randomId = Math.floor(1000 + Math.random() * 9000);
  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      tempId: randomId,
      quantity: 1,
      productSize: selectedSize,
    },
  ];
};