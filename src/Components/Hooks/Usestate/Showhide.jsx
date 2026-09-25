import React, { useState } from 'react'

const Showhide = () => {
    const [show, setshow] = useState(false)
  return (
    <div>
        <button onClick={()=>setshow(!show)}>
            {show ? "hide":"show"}
          
        </button>
          {
                show && <h2>hello students</h2>
            }
    </div>
  )
}

export default Showhide