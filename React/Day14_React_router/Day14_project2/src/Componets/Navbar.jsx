import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className=' rounded-r-full flex items-center justify-between gap-3 p-5 bg-amber-300'>
      <h1>LOGO</h1>
      <div className='flex items-center  gap-5'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </div>
      <h1>Login</h1>
    </div>
  )
}

export default Navbar
