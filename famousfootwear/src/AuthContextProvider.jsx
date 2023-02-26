import React from "react";
export const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(false);
  const [data,setData] = React.useState([]);
  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout,data,setData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
