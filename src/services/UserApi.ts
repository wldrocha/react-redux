import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../store/user/UserSlice'
const baseUrl = 'https://jsonplaceholder.typicode.com/'

// API endpoint for fetching data
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl
  }),

  endpoints: (builder) => ({
    // <Type of data the call will return, Type of parameter being passed to the query function>
    getAllUsers: builder.query<User[], void>({
      query: () => 'users'
    })
  })
})

export const { useGetAllUsersQuery } = userApi
