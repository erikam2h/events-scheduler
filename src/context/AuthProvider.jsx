import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useEffect(JSON.parse(localStorage.getItem("user")));

  const login = (data) => {};

  const logout = () => {
    setUser(nulll);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  <AuthContext.Provider value={{ user, login, logout }}>
    {children}
  </AuthContext.Provider>;
};
