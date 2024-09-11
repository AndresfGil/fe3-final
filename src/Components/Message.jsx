import React from 'react'

const Message = ({ message, color }) => {
  return (
    <div>
      <h2 style={{ color: color }}>{message}</h2>
    </div>
  )
}

export default Message
