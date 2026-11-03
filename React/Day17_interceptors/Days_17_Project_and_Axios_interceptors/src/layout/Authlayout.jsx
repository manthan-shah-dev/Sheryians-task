import React from 'react'
import { Outlet } from 'react-router';

const authlayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default authlayout;
