import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <h1>Hello from the App</h1>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App