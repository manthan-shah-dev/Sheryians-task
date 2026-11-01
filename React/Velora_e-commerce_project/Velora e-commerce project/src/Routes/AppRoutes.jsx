import React from 'react'
import { Route, Routes } from 'react-router'
import Shop from '../Pages/Shop'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Login from '../Components/LoginPage'
import ProductDetails from '../Pages/ProductDetail'

const AppRoutes = () => {
  return (
    <div>
       <Routes >
            <Route  path="/" element={<Home/>} />
            {/* <Route  path="/Login" element={<Login/>} /> */}
            <Route path="/shop" element={<Shop/>} />
            <Route path="/Productdetail/:id" element={<ProductDetails/>} />
          
            <Route path="/About" element={<About />} />
        </Routes>
    </div>
  )
}

export default AppRoutes
