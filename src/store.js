
import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './features/profile/profileSlice'
import productsReducer from "./features/products/productsSlice"
import {productApi} from "./features/products/productApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {basketApi} from "./features/basket/basketApi";
import {basketSlice} from "./features/basket/basketSlice";
export const store = configureStore({
  reducer: {
    profile: profileReducer,
    products: productsReducer,
    basket: basketSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, basketApi.middleware),
})
setupListeners(store.dispatch)
