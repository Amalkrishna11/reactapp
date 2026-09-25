import React from 'react'
import { Outlet } from 'react-router-dom'

const NestedRouter = () => {
  return (
    <div>NestedRouter
        <Outlet/>
    </div>
  )
}

export default NestedRouter