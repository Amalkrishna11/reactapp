import React from 'react'
import Child from './Child'

const Parent = () => {
    const student = {
        name:"anu",
        age:20,
        email:"anu@gmail.com"
    }
  return (
    <div>
        
    <Child student = {student}/>
    </div>
  )
}

export default Parent