import React, { useState } from 'react'

const Forms = () => {
    const [name,setName] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name);
        
    }
  return (
    <div>
        <form action="" on onSubmit={handleSubmit}>

            <label htmlFor="">name</label>
            <input type="text" placeholder='enter your name' value={name}
            onChange={(e)=>setName(e.target.value)}/> <br />
            <button>submit</button>
        </form>
    </div>
  )
}

export default Forms