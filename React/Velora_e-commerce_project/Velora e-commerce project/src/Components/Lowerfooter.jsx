import React from 'react'
import logo from  '../assets/images/Logo.png'
const Lowerfooter = () => {
  return (
    <div>
       <div className="my-6 bg-[#050817]">
              <hr className="w-full h-1 border-t bg-[#182B50] " />
            </div>
            <div className="flex items-center justify-center flex-col p-1.5 ">
              <img
                src={logo}
                alt={"title"}
                className="h-40 w-40 shrink-0 rounded-lg object-contain sm:h-26 sm:w-26"
              />
              <h3 className="text-white">
                © 2026 VELORA • Built with React + Redux + TanStack Query
              </h3>
            </div>
    </div>
  )
}

export default Lowerfooter
