import React from 'react'
import { useParams } from 'react-router-dom'

const Useparamscomp = () => {
    const params= useParams()
  return (
    <div>Useparamscomp
        product id{params.id}
    </div>
  )
}

export default Useparamscomp