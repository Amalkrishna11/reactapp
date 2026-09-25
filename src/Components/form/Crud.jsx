import React, { useState } from 'react'

const Crud = () => {
    const [name,setName] = useState('')
    const [rno,setRno] = useState('')
    const [students,setStudents] = useState([])
    console.log(students);
    


    const namechange = (e)=>{
        setName(e.target.value)
    }

    const rnochange = (e)=>{
        setRno(e.target.value)

    }

    const submit = (e)=>{
        e.preventDefault()
        setStudents([...students,{name,rno}])
        setName('')
        setRno('')
    }
  return (
    <div>
        <form action="" onSubmit={submit}>

           <div>
            <label htmlFor="">name:</label>
            <input type="text" value={name} onChange={namechange} />
           </div>
           <div>
            <label htmlFor="">rno:</label>
            <input type="text" value={rno} onChange={rnochange} />
           </div>
           <div>
            <button>submit</button>
           </div>

        </form>
       
       {students.map((students)=>(
        <div>
            <h1>NAme:{students.name}</h1>
            <h1>rno:{students.rno}</h1>
            </div>
       ))}
    </div>
  )
}

export default Crud