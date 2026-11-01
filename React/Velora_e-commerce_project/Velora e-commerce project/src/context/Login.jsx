
import { createContext, useEffect, useState } from "react";

export const login = createContext();

const Login = ({ children }) => {
  const [form, setform] = useState({});
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [detail, setdetail] = useState(
    JSON.parse(localStorage.getItem("detail")) || {}
  );

  const [LoginState, setLoginState] = useState(
    JSON.parse(localStorage.getItem("LoginState")) || false
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("detail", JSON.stringify(detail));
    localStorage.setItem("LoginState", JSON.stringify(LoginState));
  }, [users, detail, LoginState]);

  return (
    <login.Provider
      value={{
        form,
        setform,
        users,
        setUsers,
        detail,
        setdetail,
        LoginState,
        setLoginState,
      }}
    >
      {children}
    </login.Provider>
  );
};

export default Login;
