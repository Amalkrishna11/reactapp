import React from 'react'

const child = (props) => {
  return (
    <div>
        NAME IS:{props.student.name} <br />
        AGE IS:{props.student.age} <br />
        EMAIL IS:{props.student.email} <br />
    </div>
  )
}

export default child