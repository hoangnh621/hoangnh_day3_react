import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Input from '../common/Input/Input'
import getPosts from '../services/getPost'

const TableStyle = styled.table`
  width: 100%;
  border: 1px solid #000;
  border-collapse: collapse;
  tr {
    border: 1px solid #000;
    th {
      border: 1px solid #000;
    }
    td {
      border: 1px solid #000;
    }
  }
`

const Table = () => {
  const dispatch = useDispatch()
  const { posts, loading } = useSelector((state) => {
    return state.posts
  })
  console.log('re-render parent component')

  useEffect(() => {
    dispatch(getPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <TableStyle>
      <thead>
        <tr>
          <th>User id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      {posts.map((post) => {
        return (
          <tbody key={post.id}>
            <tr>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>
                <Input content={post.title} />
              </td>
              <td>
                <Input content={post.body} />
              </td>
            </tr>
          </tbody>
        )
      })}
    </TableStyle>
  )
}

export default Table
