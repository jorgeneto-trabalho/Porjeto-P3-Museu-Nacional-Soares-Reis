import React, { createContext, useContext, useState } from "react";
import AuthService from "../services/auth.service";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  /*const login = async (email, password) => {
    const data = await AuthService.login(email, password);
    setToken(data.AccessToken);
  };
  const logout = () => {
    setToken(null);
  };*/

  const enterQrCode = async (codigo_qr) => {
    const data = await AuthService.enterQrCode(codigo_qr);
    setToken(data.AccessToken);
    return data;
  };

  return (
    <AuthContext.Provider value={{ token, enterQrCode }}>
      {children}
    </AuthContext.Provider>
  );
};
