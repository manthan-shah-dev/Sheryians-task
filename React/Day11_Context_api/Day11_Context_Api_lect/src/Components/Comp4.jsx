import React, { useContext } from 'react'
import { Mystore } from '../context/Mycontext'

const Comp4 = () => {
const cd=useContext(Mystore)

  // console.log(data)
  console.log(cd)
  return (
    <div>
      <h1>comp 3 </h1>
    </div>
  )
}

export default Comp4
