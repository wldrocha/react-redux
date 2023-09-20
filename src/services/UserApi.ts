import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl = 'https://jsonplaceholder.typicode.com/'

// API endpoint for fetching data
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Users'],

  endpoints: (builder) => ({
    // <Type of data the call will return, Type of parameter being passed to the query function>
    getAllUsers: builder.query({
      query: () => 'users',
      providesTags: ['Users'],
    }),
    getUser: builder.query({
      query: (userId) => `users/${userId}`,
    }),
    deleteUser: builder.mutation({
      query: ({ userId }) => ({ url: `users/${userId}`, method: 'DELETE' }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `users/${user.id}}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})

export const { useGetAllUsersQuery, useGetUserQuery, useDeleteUserMutation, useUpdateUserMutation } = userApi
