

import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../services/UserApi'

export const store = configureStore({
  reducer: {
    // users: authSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({}).concat([userApi.middleware]),
})
