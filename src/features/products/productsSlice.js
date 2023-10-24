import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  products: [],
  basket: {
    product: [],
    count: 0,
  },
  filterProducts: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initial: (state, action) => {
      state.products = action.payload
      state.filterProducts = action.payload
    },
    addProductToBasket: (state, action) => {
      let isFind = false
      const clickedProduct = state.products.find(product => product.id === action.payload.id)
      if (state.basket.product.length === 0) {
        state.basket.product.push({
          product: clickedProduct,
          count: 1,
          basketSize: action.payload.size
        })
        state.basket.count++
        return
      }
      state.basket.product.forEach(p => {
        if (clickedProduct.id === p.product.id && action.payload.size === p.basketSize) {
          p.count += 1
          isFind = true
        }
      })
      state.basket.count++
      if (!isFind) {
        state.basket.product.push(
          {
            product: clickedProduct,
            count: 1,
            basketSize: action.payload.size
          })
      }

    },
    filterProductsByCost: (state, action) => {
      if (action.payload === "min") {
        state.filterProducts = [...state.filterProducts].sort((a, b) => {
          return a.price - b.price
        })

      } else if (action.payload === "max") {
        state.filterProducts = [...state.filterProducts].sort((a, b) => {
          return b.price - a.price
        })
      }
      // else {
      //   return state = state.filterProducts
      // }
    },
    filterProductsBySize: (state, action) => {
      if(!action.payload){
        return
      }
      state.filterProducts = [...state.products].filter(product => {
        return product.availableSizes.find(size => size.size === action.payload && size.count !== 0)
      })
    },
    resetFilter: (state, action) => {
      state.filterProducts = state.products
    },
    increaseCountProduct: (state, action) => {
      state.basket.product.forEach(p => {
        if (action.payload.product.id === p.product.id && action.payload.basketSize === p.basketSize) {
          p.count += 1
        }
      })
    },
    decreaseCountProduct: (state, action) => {
      state.basket.product.forEach(p => {
        if (action.payload.product.id === p.product.id && action.payload.basketSize === p.basketSize) {
          p.count -= 1
        }
      })
    }

  },

})

export const {
  initial,
  addProductToBasket,
  filterProductsByCost,
  filterProductsBySize,
  resetFilter,
  increaseCountProduct,
  decreaseCountProduct

} = productsSlice.actions

export default productsSlice.reducer
