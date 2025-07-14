import React, { createContext, useContext, useState } from "react";
import AuthService from "../services/auth.service";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    const data = await AuthService.login(email, password);
    setToken(data.AccessToken);
  };
  const logout = () => {
    setToken(null);
  };
  return (
    <AuthContext.Provider value={{ token, login, loginExemplo, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
