// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import apiClient from "./ApiConfig.js";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const navigate = useNavigate();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const userData = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        setUser(userData);
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("accessToken");
      }
    }
  }, []);

  const login = async (credentials) => {
    apiClient
      .post("http://localhost:4000/user/login", credential)
      .then((res) => {
        const { accessToken, refreshToken } = res.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        alert("sucessfully logined");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong pls try again");
      });
  };
  // const login = async (credentials) => {
  //   const { data } = await apiClient.post('/login', credentials);
  //   localStorage.setItem('accessToken', data.accessToken);
  //   setUser(JSON.parse(atob(data.accessToken.split('.')[1])));
  // };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
