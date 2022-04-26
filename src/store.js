import { configureStore } from '@reduxjs/toolkit'
import fetchPostReducer from './components/Table/tableSlice'

export const store = configureStore({
  reducer: { posts: fetchPostReducer },
})
