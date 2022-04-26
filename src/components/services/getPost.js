import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const GetPosts = createAsyncThunk('posts/getPosts', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
})

export default GetPosts
