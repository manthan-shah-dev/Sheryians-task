import React, { useContext } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import Lowerfooter from "./Components/Lowerfooter";
import AppRoutes from "./Routes/AppRoutes";
import LoginRoutes from "./Routes/LoginRoutes";
import {login} from "./context/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  // const login = false;
 const {LoginState}= useContext(login)
  return (
    <div className="bg-[#050817] ">
  <ToastContainer
  position="top-right"
  autoClose={3000}
  theme="dark"
  newestOnTop
  closeOnClick
/>
      {LoginState ? (
        <div>
          <Navbar />
          <AppRoutes />
          <Lowerfooter />
        </div>
      ) : (
        
      <LoginRoutes/>
      )}
    </div>
  );
};

export default App;
