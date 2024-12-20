import React, { createContext, useEffect, useState } from 'react';
import apiClient from '../Service/ApiConfig';

 
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogined, setIsLogined] = useState(false); // Tracks login status
  const [user, setUser] = useState(null); // Stores user data in memory

  const login = async (credentials) => {
    const { data } = await apiClient.post('user/login', credentials);
      const { accessToken, refreshToken, user } = data;
      console.log(accessToken)
      console.log(refreshToken)
      console.log(user)
      // Set user data and login status in memory 
      setUser(user); 
      setIsLogined(true);
      
      // Save the access token in memory (for API usage only)
      localStorage.setItem('accessToken', accessToken); // Or replace this with any other temporary storage like memory cache
      localStorage.setItem('refreshToken', refreshToken); // Or replace this with any other temporary storage like memory cache

      //save the user and islogined in localstorage
      localStorage.setItem('user',JSON.stringify(user))
      localStorage.setItem('isLogined','true')
    
  };

  const logout = () => {
    apiClient.post('/user/logout')
    .then((res)=>{
      setUser(null);
    setIsLogined(false);
    localStorage.removeItem('accessToken'); // Clear the token if it exists
    localStorage.removeItem('refreshToken'); // Clear the token if it exists
    localStorage.removeItem('user'); // Clear the token if it exists
    localStorage.removeItem('isLogined'); // Clear the token if it exists
    window.location.href = '/login'; // Redirect to login page
    })
    .catch((err) =>{
      console.log(err)
    })
    
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedLoginStatus = localStorage.getItem('isLogined');
    console.log('in useeffect of context')
    
    if (storedUser && storedLoginStatus) {
     setUser(JSON.parse(storedUser));
     setIsLogined(true);

    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLogined, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


