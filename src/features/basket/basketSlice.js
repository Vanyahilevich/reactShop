import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  quantityProductInBasket: 0
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setQuantityProductInBasket: (state, action) => {
      state.quantityProductInBasket = action.payload.reduce((acc, item) => {
        return acc += item.count
      }, 0)
    }

  }

})

export const {
  setQuantityProductInBasket
} = basketSlice.actions

export default basketSlice.reducer
