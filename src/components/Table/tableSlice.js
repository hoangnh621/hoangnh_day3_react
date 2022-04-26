import { createSlice } from '@reduxjs/toolkit'
import getPosts from '../services/getPost'

const tableSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.posts = payload
    },
    [getPosts.rejected]: (state) => {
      state.loading = false
    },
  },
})

export const { fetchPost } = tableSlice.actions

export default tableSlice.reducer
