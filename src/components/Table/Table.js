import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPosts from '../services/getPost'

export default function Table() {
  const dispatch = useDispatch()
  const { posts, loading } = useSelector((state) => {
    return state.posts
  })

  useEffect(() => {
    dispatch(getPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <table>
      <tr>
        <th>User id</th>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      {posts.map((post) => {
        return (
          <tr>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        )
      })}
    </table>
  )
}
