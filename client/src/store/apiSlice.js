import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:5000';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: build => ({
        getCategories: build.query({
            // get: 'http://localhost:5000/api/categories'
            query: () => '/api/categories',
            providesTags: ['categories']
        }),
        getLabels: build.query({
            // get: 'http://localhost:5000/api/labels'
            query: () => '/api/labels',
            providesTags: ['transactions']
        }),
        createTransaction: build.mutation({
            query: (req) => ({
                // post: 'http://localhost:5000/api/transactions'
                url: '/api/transactions',
                method: "POST",
                body: req
            }),
            invalidatesTags: ['transactions']
        }),
        deleteTransaction: build.mutation({
            query: ({ id }) => ({
                // delete: 'http://localhost:5000/api/transactions/:id'
                url: `/api/transactions/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['transactions']
        })

    })
});

export default apiSlice;