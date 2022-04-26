import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import styled from 'styled-components'

const InputStyle = styled.textarea`
  border: none;
  width: 100%;
  resize: none;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`

const Input = ({ content }) => {
  const [value, setValue] = useState(content)
  const [readOnly, setReadOnly] = useState(true)
  const inputRef = useRef(null)

  // useEffect(() => {
  //   const handleChangeInput = () => {
  //     readOnly = false
  //   }
  //   inputRef.current.addEventListener('click', handleChangeInput)
  //   return () =>
  //     inputRef.current.removeEventListener('click', handleChangeInput)
  // }, [])

  return (
    <InputStyle
      ref={inputRef}
      type="text"
      readOnly={readOnly}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      onClick={() => setReadOnly(!readOnly)}
    />
  )
}

Input.defaultProps = {
  readOnly: true,
}

Input.propTypes = {
  content: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
}

export default Input
