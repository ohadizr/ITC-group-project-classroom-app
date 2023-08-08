import React from 'react'
import useMessages from '../hooks/useMessages'

export default function TestMsg() {
const { msgToContent } = useMessages()

const handleClick = () => {
    msgToContent({
        key1: 'value1',
        key2: 'value2',
    })
}

  return (
    <button onClick={handleClick} >Send msg to content</button>
  )
}
