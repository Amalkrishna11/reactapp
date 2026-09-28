import React from 'react'
import { useRef } from 'react'

const Uncontrolled = () => {
    const name = useRef()

    const handle = (e)=>{
        e.preventDefault()
        alert(name.current.value)
    }
  return (
    <div>
        <form action="" onSubmit={handle}>
            <input type="text " placeholder='enter your name'ref={name}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Uncontrolled