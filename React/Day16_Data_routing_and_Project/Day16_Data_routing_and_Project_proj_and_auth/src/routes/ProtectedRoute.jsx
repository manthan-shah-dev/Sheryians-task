import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import {Auth} from '../context/Auth_cont'
const Protectedroutes = () => {
  const { loggedIndUser } = useContext(Auth);
if(!loggedIndUser){
 return < Navigate to='/'/>
}
  return (
    <Outlet/>
  )
}

export default Protectedroutes;