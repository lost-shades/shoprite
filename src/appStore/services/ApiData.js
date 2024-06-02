import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    reducerPath: "products",

    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    
    endpoints: (builder) => ({
        // Get all products

        getAllProduct: builder.query({
            query: () => '/products'
        }),
            
        getProductById: builder.query({
            query: (id) => `/products/${id}`
        }),

        getRelatedProducts: builder.query({
            query: (category) => `/products/category/${category}`
        })

        // addNewProduct: builder.mutation({
        //     query: (newProduct) => ({
        //         url: `/products/add`,
        //         method: "POST",
        //         headers: {"Content-Type": "application/json"},
        //         body: newProduct,
        //     })
        // }),
        
        // updateProduct: builder.mutation({
        //     query: ({id, updatedProduct}) => ({
        //         url: `/products/${id}`,
        //         method: "PUT",
        //         headers: {"Content-Type": "application/json"},
        //         body: updatedProduct,
        //     })
        // }),

        // deleteProduct: builder.mutation({
        //     query: (id) => ({
        //       url: `/products/${id}`,
        //       method: "DELETE",
        //     }),
        // }),

    }),
});


export const { 
    useGetAllProductQuery, 
    useGetProductByIdQuery,
    useGetRelatedProductsQuery, 
    // useAddNewProductMutation,
    // useUpdateProductMutation,
    // useDeleteProductMutation 
} = productsApi