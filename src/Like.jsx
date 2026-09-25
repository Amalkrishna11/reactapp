import React, { useState } from 'react'

const Like = () => {
      const [show,setShow]=useState(true)
  return (
    <div>
    <button onClick={()=>setShow(!show)}>
         {show ? "❤️like":"💖liked"}
    </button>
    </div>
  )
}

export default Like