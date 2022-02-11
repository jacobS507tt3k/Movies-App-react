import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';




export const PrivateRoute = ({isAuth, children}) => {


    const location = useLocation()
    
    localStorage.setItem("lastPath", location.pathname)

    return isAuth ? children : <Navigate to="/login" />;
};

