
import React, { useState } from 'react'

const Inputfield = () => {
  const [input, setInput] = useState("")

  return (
    <div>
      <h2>Live Input Display</h2>

      <input
        type="text"
        placeholder="Enter something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <h3>You typed: {input}</h3>
    </div>
  )
}

export default Inputfield

