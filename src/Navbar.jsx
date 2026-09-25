import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>Navbar
        <Link to={'home'}>HOME</Link>
        <Link to={'about'}>ABOUT</Link>
        <Link to={'test'}>TEST</Link>
        </nav>
        <Outlet/>

    </div>
  )
}

export default Navbar