import React, { useContext } from "react";
import { Navigate, Outlet, } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { user, isLogined } =useContext(AuthContext)
    
    //   console.log("in protec",JSON.stringify(user))
      console.log("in protected route",isLogined);
      console.log("checking the type",typeof(isLogined));

    return(
        isLogined ? <Outlet /> : <Navigate to="/login" />
        // isLogined ? <Navigate to="/login" /> :<Outlet />
    ) 
  };

// const ProtectedRoute = ({ children }) => {
//     const { isLoggedIn } = useContext(AuthContext)
//     console.log(typeof(isLoggedIn))
  
//     if (isLoggedIn) {
//       return <Navigate to="/login" />;
//     }
  
//     return children; 
// };
  
  export default ProtectedRoute;