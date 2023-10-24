import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery(    {baseUrl: 'http://localhost:3000/api/products'}),
  tagTypes: ["Product"],
  endpoints: (builder) => ({

    getAllProduct: builder.query({
      query: (params) => `?${new URLSearchParams(params).toString()}`,
      providesTags: result => ['Product'],
    }),
    getOneProduct: builder.query({
      query: (id) => `/${id}`,
    }),
    updateProducts: builder.mutation({
      query: (params) => ({
        url: `updateProducts`,
        method: 'PUT',
        body: params
      }),
      invalidatesTags: ["Product"]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllProductQuery,
  useGetOneProductQuery,
  useUpdateProductsMutation,
  usePrefetch
  } = productApi
