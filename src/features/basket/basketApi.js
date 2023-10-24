import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  tagTypes: ["Basket"],
  endpoints: (builder) => ({
    getAllProductInBasket: builder.query({
      query: () => `basket`,
      providesTags: result => ['Basket'],
    }),
    addProductToBasket: builder.mutation({
      query: (params,) => ({
        url: 'basket',
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ["Basket"]
    }),
    updateBasket: builder.mutation({
      query: (params) => ({
        url: `basket`,
        method: 'PUT',
        body: params
      }),
      invalidatesTags: ["Basket"]
    }),
    deleteProductInBasket: builder.mutation({
      query: (params) => ({
        url: `basket`,
        method: 'DELETE',
        body: params
      }),
      invalidatesTags: ["Basket"]

    }),
  }),
})

export const {
  useGetAllProductInBasketQuery,
  useAddProductToBasketMutation,
  useUpdateBasketMutation,
  useDeleteProductInBasketMutation,
} = basketApi
