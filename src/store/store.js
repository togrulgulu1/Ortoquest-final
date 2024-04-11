import { configureStore } from '@reduxjs/toolkit'
import { cart } from '../features/counterSlice'

export const store = configureStore({
    reducer: {
        cart: cart
    },
})