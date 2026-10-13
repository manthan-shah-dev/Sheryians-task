import React, { useContext } from 'react'
import { Myshop } from './../context/MyEcom';

const Navbar = () => {
  let {setIsCardOpen}=useContext(Myshop)
  return (
    <div className='flex justify-between h-10 bg-black p-5 items-center rounded text-white'>
<div>logo</div>
<div className='flex gap-10 text-xl'>
    <p onClick={()=> setIsCardOpen(false)} className='cursor-pointer'>Home</p>
    <p onClick={()=> setIsCardOpen(true)} className='cursor-pointer'>Cart</p>
</div>
<button>Login</button>
    </div>
  )
}

export default Navbar
